import React, { Component } from 'react'
import ServicePropertyItem from './ServiceProperyItem'
import GroupList from '../../shared/groupList/GroupList'
import { ServiceUtils } from '../../../utils/ServiceUtils'

interface Props {
	group: any
	propertyActions: any
	onEditProperty: any
	onDeleteProperty: any
	onUnmark: any
	properties: any
	reset?: boolean
	loading?: boolean
}

export default class ServicePropertyList extends Component<Props> {
	constructor(props: Props) {
		super(props)
		this.handleShowGroup = this.handleShowGroup.bind(this)
		this.handleShowSubProps = this.handleShowSubProps.bind(this)
		this.handleEdit = this.handleEdit.bind(this)
		//this.handleRemove = this.handleRemove.bind(this)
	}

	state = {
		showItems: true,
		properties: ServiceUtils.setPropertyListItems(this.props.properties),
		propertiesLoading: false
	}

	componentDidUpdate(nextProps: any, state: any) {
		if (nextProps.reset) {
			const newPropertiesList = ServiceUtils.setPropertyListItems(
				nextProps.properties
			)
			this.setState({ properties: newPropertiesList })
		}
	}

	changePropsVisibility(propertyItems: any, outerPropItem: any) {
		return propertyItems.map((propertyItem: any) => {
			if (propertyItem.property._id === outerPropItem.property._id) {
				propertyItem.subPropsVisible = !outerPropItem.subPropsVisible
			}

			if (
				propertyItem.property.path.includes(outerPropItem.property.path + '.')
			) {
				propertyItem.visible = !propertyItem.visible
			}

			return propertyItem
		})
	}

	handleShowGroup() {
		this.setState({ showItems: !this.state.showItems })
	}

	handleShowSubProps(e: any) {
		const propertyListItems = this.state.properties
		const propertyId = e.currentTarget.value
		const searchedProp = ServiceUtils.findPropertyListItemById(
			propertyListItems,
			propertyId
		)
		const changedList = this.changePropsVisibility(
			propertyListItems,
			searchedProp
		)
		this.setState({ properties: changedList })
	}

	handleDuplicate(e: any) {
		/*
        const propertyId = e.currentTarget.value
        const item = ServiceUtils.findPropertyListItemById(this.state.properties,propertyId)
        */
	}

	/*
    handleRemove(e) {

        const item = this.getPropertyItemById(e.currentTarget.value)
        console.log(e.currentTarget.value)
        /*
        const propertyItems = this.state.properties
        const rootPropPath = item.property.path + '.' + item.property.propertyName
        const changedItems = propertyItems.map((pItem) => {
            if(pItem.property.path.includes(rootPropPath) || (pItem.property.propertyName === item.property.propertyName && pItem.property.path === item.property.path)) {
                
                // opravit chybu v oznaceni - zatim vzdy jen negace 
                if(!pItem.property.currentChange) {
                    console.log(pItem.property.currentChange)
                    pItem.property.currentChange = APP_CONFIG.PROPERTY_CHANGE_TYPES.DELETE
                } else {
                    pItem.property.currentChange = null
                }
            }

            return pItem
        })

        this.setState({properties: changedItems})
        
    }

    */

	handleEdit(e: any) {
		console.log(e.currentTarget.value)
	}

	render() {
		const { group, propertyActions = [] } = this.props

		const items = this.state.properties.map((item: any, index: number) => {
			if (item.visible) {
				return (
					<ServicePropertyItem
						property={item.property}
						key={index}
						subPropsVisible={item.subPropsVisible}
						onShow={this.handleShowSubProps}
						onDuplicate={this.handleDuplicate}
						onEdit={this.props.onEditProperty}
						onRemove={this.props.onDeleteProperty}
						propertyActions={propertyActions}
						onUnmark={this.props.onUnmark}
					/>
				)
			}
		})

		return (
			<GroupList showHideButton={true} groupName={group}>
				{items}
			</GroupList>
		)
	}
}
