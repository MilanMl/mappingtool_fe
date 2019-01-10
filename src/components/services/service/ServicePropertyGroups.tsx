import React, { Component } from 'react'
import ServicePropertyList from './ServicePropertyList'
import APP_CONFIG from '../../../config/appConfig'
import GroupListContainer from '../../shared/groupList/GroupListContainer'
import { Property } from '../../../models'

interface Props {
	properties: any
	propertyActions: any
	groupContainerActions: any
	loading: boolean
	containerClass: string
	resetProperties: any
	onAddProperty: any
	onEditProperty: any
	onDeleteProperty: any
	onUmarkPropertyChanges: any
	listActions: any
}

export default class ServicePropertyGroups extends Component<Props> {
	state = {
		propertyFormVisible: false
	}

	render() {
		const {
			properties,
			propertyActions,
			groupContainerActions = {},
			loading,
			resetProperties,
			containerClass
		} = this.props

		let requestProps: Property[] = []
		let responseProps: Property[] = []
		let headerProps: Property[] = []
		let routeProps: Property[] = []

		properties.map((property: Property) => {
			switch (property.group) {
				case APP_CONFIG.PROPERTY_GROUPS.HEADER:
					headerProps.push(property)
					break
				case APP_CONFIG.PROPERTY_GROUPS.ROUTE:
					routeProps.push(property)
					break
				case APP_CONFIG.PROPERTY_GROUPS.REQUEST:
					requestProps.push(property)
					break
				case APP_CONFIG.PROPERTY_GROUPS.RESPONSE:
					responseProps.push(property)
					break
				default:
					break
			}
		})

		return (
			<div className={containerClass}>
				<GroupListContainer
					actions={groupContainerActions}
					title='Service properties'
					loading={loading}
					onAddItem={this.props.onAddProperty}
				>
					<ServicePropertyList
						group={APP_CONFIG.PROPERTY_GROUPS.HEADER}
						properties={headerProps}
						reset={resetProperties}
						loading={loading}
						propertyActions={propertyActions}
						onEditProperty={this.props.onEditProperty}
						onDeleteProperty={this.props.onDeleteProperty}
						onUnmark={this.props.onUmarkPropertyChanges}
					/>
					<ServicePropertyList
						group={APP_CONFIG.PROPERTY_GROUPS.ROUTE}
						properties={routeProps}
						reset={resetProperties}
						loading={loading}
						propertyActions={propertyActions}
						onEditProperty={this.props.onEditProperty}
						onDeleteProperty={this.props.onDeleteProperty}
						onUnmark={this.props.onUmarkPropertyChanges}
					/>
					<ServicePropertyList
						group={APP_CONFIG.PROPERTY_GROUPS.REQUEST}
						properties={requestProps}
						reset={resetProperties}
						loading={loading}
						propertyActions={propertyActions}
						onEditProperty={this.props.onEditProperty}
						onDeleteProperty={this.props.onDeleteProperty}
						onUnmark={this.props.onUmarkPropertyChanges}
					/>
					<ServicePropertyList
						group={APP_CONFIG.PROPERTY_GROUPS.RESPONSE}
						properties={responseProps}
						reset={resetProperties}
						loading={loading}
						propertyActions={propertyActions}
						onEditProperty={this.props.onEditProperty}
						onDeleteProperty={this.props.onDeleteProperty}
						onUnmark={this.props.onUmarkPropertyChanges}
					/>
				</GroupListContainer>
			</div>
		)
	}
}
