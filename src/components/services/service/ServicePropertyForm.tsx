import React, { Component } from 'react'
import { Form, Button, TextInput, Combobox } from '../../shared/forms/index'
import APP_CONFIG from '../../../config/appConfig'
import { AppUtils } from '../../../utils/AppUtils'
import { ServiceUtils } from '../../../utils/ServiceUtils'
import { Property } from '../../../models'

interface Props {
	property?: Property | null
	serviceProperties: any
	onSaveProperty: any
	loading?: boolean
}

export default class ServicePropertyForm extends Component<Props> {
	constructor(props: Props) {
		super(props)
		this.handleFormChange = this.handleFormChange.bind(this)
		this.handleSaveForm = this.handleSaveForm.bind(this)
	}

	state = {
		property: this.props.property
			? this.props.property
			: {
					group: '',
					propertyType: '',
					propertyName: '',
					path: ''
			  },
		groups: AppUtils.createOptionsFromObject(APP_CONFIG.PROPERTY_GROUPS),
		propertyTypes: AppUtils.createOptionsFromArray(APP_CONFIG.PROPERTY_TYPES),
		currentPropertyGroup:
			this.props.property && this.props.property.group
				? AppUtils.createComboboxOption(
						this.props.property.group,
						this.props.property.group
				  )
				: '',
		currentPropertyType:
			this.props.property && this.props.property.propertyType
				? AppUtils.createComboboxOption(
						this.props.property.propertyType,
						this.props.property.propertyType
				  )
				: '',
		currentGroupPaths: this.props.property
			? ServiceUtils.createGroupPathsOptions(
					this.props.serviceProperties,
					this.props.property.group
			  )
			: []
	}

	handleFormChange(e: any) {
		const propertyParam = e.target.name
		const propertyValue = e.target.value

		let property: any = this.state.property
		let groupPaths = this.state.currentGroupPaths

		property[propertyParam] = propertyValue

		// pri zmene groupy vytvorit nove pathOptions
		if (propertyParam === 'group') {
			groupPaths = ServiceUtils.createGroupPathsOptions(
				this.props.serviceProperties,
				propertyValue
			)
		}

		console.log(property)

		this.setState({
			property: property,
			currentGroupPaths: groupPaths
		})
	}

	handleSaveForm() {
		console.log(this.state.property)
		this.props.onSaveProperty(this.state.property)
	}

	render() {
		const { loading, property } = this.props

		return (
			<div className='service-detail-form'>
				<div className='box white padding'>
					<Form onSubmit={this.handleSaveForm}>
						<Combobox
							name='group'
							label='Group'
							value={this.state.property.group}
							required={true}
							options={this.state.groups}
							onChange={this.handleFormChange}
						/>
						<TextInput
							type='text'
							name='propertyName'
							label='Property name'
							value={this.state.property.propertyName}
							placeholder='Property name'
							required={true}
							minLength={3}
							maxLength={64}
							onChange={this.handleFormChange}
						/>
						<Combobox
							name='propertyType'
							label='Property type'
							value={this.state.property.propertyType}
							required={true}
							options={this.state.propertyTypes}
							onChange={this.handleFormChange}
						/>
						<Combobox
							name='path'
							label='Path'
							value={this.state.property.path}
							required={false}
							options={this.state.currentGroupPaths}
							onChange={this.handleFormChange}
						/>
						<Button
							name='submit'
							label='Save'
							type='submit'
							outerClass='form-input'
							buttonClass='green right'
							loading={loading}
						/>
					</Form>
				</div>
			</div>
		)
	}
}
