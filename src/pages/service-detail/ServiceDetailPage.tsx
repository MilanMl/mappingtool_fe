import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeNavigation } from '../../actions/sharedActions'
import { AppUtils } from '../../utils/AppUtils'
import { ServiceUtils } from '../../utils/ServiceUtils'
import {
	addServicePropertyRequest,
	deleteServicePropertyRequest,
	editServicePropertyRequest,
	unmarkServicePropertyRequest
} from '../../actions/serviceDetailActions'
import APP_CONFIG from '../../config/appConfig'
import ServicePropertyForm from '../../components/services/service/ServicePropertyForm'
import ServicePropertyGroups from '../../components/services/service/ServicePropertyGroups'
import { Service, Property } from '../../models'

interface Props {
	service: Service
	updateServiceLoading: boolean
	addServicePropertyRequest: any
	editServicePropertyRequest: any
	unmarkServicePropertyRequest: any
	deleteServicePropertyRequest: any
	changeNavigation: any
}

class ServiceDetailPage extends Component<Props> {
	constructor(props: Props) {
		super(props)
		this.showPropertyForm = this.showPropertyForm.bind(this)
		this.handleSaveProperty = this.handleSaveProperty.bind(this)
		this.handleDeleteProperty = this.handleDeleteProperty.bind(this)
		this.handleUnmarkPropertyChanges = this.handleUnmarkPropertyChanges.bind(
			this
		)
	}

	state = {
		propertyFormVisible: false,
		currentProperty: null,
		resetProperties: false,
		currentPropertyAction: null
	}

	componentDidMount() {
		this.props.changeNavigation(
			AppUtils.createNavigationTree(
				'services',
				this.props.service.serviceName,
				'detail'
			)
		)
	}

	// dodelat - pokud naimportuji properties pres json tak se neupdatuje ServicePropertyGroups protoze se nenastavi state.reset
	componentDidUpdate(nextProps: any, state: any) {
		if (nextProps.service && !nextProps.updateServiceLoading) {
			console.log(666)
		}
	}

	handleSaveProperty(property: Property) {
		if (this.state.currentPropertyAction === APP_CONFIG.ACTION_TYPES.ADD) {
			this.props
				.addServicePropertyRequest(this.props.service._id, property)
				.then(() => {
					this.setState({
						resetProperties: true,
						propertyFormVisible: false
					})
				})
				.then(() => {
					this.setState({ resetProperties: false })
				})
		} else {
			this.props
				.editServicePropertyRequest(this.props.service._id, property)
				.then(() => {
					this.setState({
						resetProperties: true,
						propertyFormVisible: false
					})
				})
				.then(() => {
					this.setState({ resetProperties: false })
				})
		}
	}

	handleUnmarkPropertyChanges(e: any) {
		const propertyId = e.currentTarget.value
		this.props
			.unmarkServicePropertyRequest(this.props.service._id, propertyId)
			.then(() => {
				this.setState({ resetProperties: true })
			})
			.then(() => {
				this.setState({ resetProperties: false })
			})
	}

	handleDeleteProperty(e: any) {
		const propertyId = e.currentTarget.value
		this.props
			.deleteServicePropertyRequest(this.props.service._id, propertyId)
			.then(() => {
				this.setState({ resetProperties: true })
			})
			.then(() => {
				this.setState({ resetProperties: false })
			})
	}

	showPropertyForm(e: any) {
		let property = {}
		let currentAction = APP_CONFIG.ACTION_TYPES.ADD

		if (!e.target) {
			const propertyId = e
			property = ServiceUtils.findPropertyById(
				this.props.service.properties,
				propertyId
			)
			currentAction = APP_CONFIG.ACTION_TYPES.EDIT
		}

		this.setState({
			propertyFormVisible: true,
			currentProperty: property,
			currentPropertyAction: currentAction
		})
	}

	render() {
		const { service, updateServiceLoading } = this.props

		return (
			<div className='service-detail-container'>
				<ServicePropertyGroups
					containerClass={'service-detail-properties'}
					listActions={
						APP_CONFIG.SERVICE_DETAIL_ACTIONS.PROPERTIES_GROUP_ACTIONS
					}
					properties={service.properties}
					groupContainerActions={
						APP_CONFIG.SERVICE_DETAIL_ACTIONS.PROPERTIES_GROUP_CONTAINER_ACTIONS
					}
					propertyActions={
						APP_CONFIG.SERVICE_DETAIL_ACTIONS.PROPERTIES_ITEMS_ACTIONS
					}
					resetProperties={this.state.resetProperties}
					loading={updateServiceLoading}
					onAddProperty={this.showPropertyForm}
					onEditProperty={this.showPropertyForm}
					onDeleteProperty={this.handleDeleteProperty}
					onUmarkPropertyChanges={this.handleUnmarkPropertyChanges}
				/>
				{this.state.propertyFormVisible && (
					<ServicePropertyForm
						serviceProperties={service.properties}
						property={this.state.currentProperty}
						onSaveProperty={this.handleSaveProperty}
					/>
				)}
			</div>
		)
	}
}

const mapStateToProps = (state: any) => {
	return {
		service: state.ServiceDetailReducer.service,
		updateServiceLoading: state.ServiceDetailReducer.updateServiceLoading,
		updateServiceFailed: state.ServiceDetailReducer.updateServiceFailed
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		changeNavigation: (currentLocation: any) =>
			dispatch(changeNavigation(currentLocation)),
		addServicePropertyRequest: (serviceId: string, property: Property) =>
			dispatch(addServicePropertyRequest(serviceId, property)),
		deleteServicePropertyRequest: (serviceId: string, propertyId: string) =>
			dispatch(deleteServicePropertyRequest(serviceId, propertyId)),
		editServicePropertyRequest: (serviceId: string, property: Property) =>
			dispatch(editServicePropertyRequest(serviceId, property)),
		unmarkServicePropertyRequest: (serviceId: string, propertyId: string) =>
			dispatch(unmarkServicePropertyRequest(serviceId, propertyId))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ServiceDetailPage)
