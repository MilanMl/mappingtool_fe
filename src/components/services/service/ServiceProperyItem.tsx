import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faEdit,
	faClone,
	faTrash,
	faCaretDown,
	faCaretUp,
	faPoo
} from '@fortawesome/free-solid-svg-icons'
import APP_CONFIG from '../../../config/appConfig'
import { ServiceUtils } from '../../../utils/ServiceUtils'
import { Property } from '../../../models'

interface Props {
	property: Property
	subPropsVisible?: boolean
	propertyActions: any
	onShow: any
	onUnmark: any
	onDuplicate: any
	onRemove: any
	onEdit: any
}

export default class ServicePropertyItem extends Component<Props> {
	constructor(props: Props) {
		super(props)
		this.handleDuplicate = this.handleDuplicate.bind(this)
		this.handleEdit = this.handleEdit.bind(this)
	}

	getPropertyNamePadding() {
		return { paddingLeft: 20 + this.props.property.path.split('.').length * 15 }
	}

	getItemClass() {
		let currentChangeClass
		switch (this.props.property.currentChange) {
			case APP_CONFIG.PROPERTY_CHANGE_TYPES.NEW:
				currentChangeClass = 'group-item added'
				break
			case APP_CONFIG.PROPERTY_CHANGE_TYPES.UPDATE:
				currentChangeClass = 'group-item updated'
				break
			case APP_CONFIG.PROPERTY_CHANGE_TYPES.DELETE:
				currentChangeClass = 'group-item removed'
				break
			default:
				currentChangeClass = 'group-item'
		}

		return currentChangeClass
	}

	handleEdit(e: any) {
		this.props.onEdit(this.props.property._id)
	}

	handleDuplicate(e: any) {
		console.log(e.target.value)
		//this.props.onDuplicate(e.target.value)
	}

	render() {
		const { subPropsVisible, propertyActions = {}, property } = this.props

		const paddingStyle = this.getPropertyNamePadding()
		const showSubPropsIcon = subPropsVisible ? faCaretUp : faCaretDown
		const currentChangeClass = this.getItemClass()

		return (
			<div className={currentChangeClass}>
				<div className='group-item-col w-30' style={paddingStyle}>
					{property.propertyName + ' '}
					{ServiceUtils.isNestingPropertyType(property.propertyType) && (
						<button
							className='property-show-button'
							value={property._id}
							onClick={this.props.onShow}
						>
							<FontAwesomeIcon icon={showSubPropsIcon} />
						</button>
					)}
				</div>
				<div className='group-item-col w-10'>{property.propertyType}</div>
				<div className='group-item-col w-10'>{property.mandatory}</div>
				<div className='group-item-col w-30'>{property.description}</div>
				<div className='group-item-col w-20 right'>
					{property.currentChange && (
						<button
							className='list-action red'
							type='button'
							name='unmark'
							value={property._id}
							onClick={this.props.onUnmark}
						>
							<FontAwesomeIcon icon={faPoo} />
						</button>
					)}
					{propertyActions.includes(APP_CONFIG.ACTION_TYPES.CLONE) && (
						<button
							className='list-action'
							type='button'
							name='duplicate'
							value={property._id}
							onClick={this.props.onDuplicate}
						>
							<FontAwesomeIcon icon={faClone} />
						</button>
					)}
					{propertyActions.includes(APP_CONFIG.ACTION_TYPES.EDIT) && (
						<button
							className='list-action'
							type='button'
							name='edit'
							value={property._id}
							onClick={this.handleEdit}
						>
							<FontAwesomeIcon icon={faEdit} />
						</button>
					)}
					{propertyActions.includes(APP_CONFIG.ACTION_TYPES.DELETE) && (
						<button
							className='list-action'
							type='button'
							name='remove'
							value={property._id}
							onClick={this.props.onRemove}
						>
							<FontAwesomeIcon icon={faTrash} />
						</button>
					)}
				</div>
			</div>
		)
	}
}
