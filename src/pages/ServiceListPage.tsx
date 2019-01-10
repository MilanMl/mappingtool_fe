import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import Moment from 'moment'
import { faEdit, faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'
import APP_CONFIG from '../config/appConfig'
import { getServiceListRequest } from '../actions/serviceListActions'
import { changeNavigation } from '../actions/sharedActions'
import { AppUtils } from '../utils/AppUtils'
import { ServiceOperationService } from '../services/ServiceOperationService'
import ServiceListFilters from '../components/services/serviceList/ServiceListFilters'
import ServiceModalForm from '../components/services/ServiceModalForm'
import {
	PaginatedList,
	PaginatedItem,
	PaginatedItemColumn
} from '../components/shared/paginated-list/'
import {
	ListItemAction,
	ListItemRedirectAction
} from '../components/shared/ListItemActions'
import VersionLabel from '../components/shared/VersionLabel'

class ServiceListContainer extends Component<any> {
	constructor(props: any) {
		super(props)
		this.openAddServiceModal = this.openAddServiceModal.bind(this)
		this.closeAddServiceModal = this.closeAddServiceModal.bind(this)
		this.handleSaveServiceForm = this.handleSaveServiceForm.bind(this)
		this.handleFilter = this.handleFilter.bind(this)
		this.getServiceList = this.getServiceList.bind(this)
		this.showNextPage = this.showNextPage.bind(this)
	}

	state = {
		serviceListResponse: {
			items: [],
			nextPage: null
		},
		serviceListLoading: false,
		addServiceModalVisible: false,
		addServiceRequestLoading: false,
		addedService: {
			_id: null,
			serviceName: '',
			serviceType: '',
			userDefined: true
		}
	}

	componentDidMount() {
		this.props.changeNavigation(AppUtils.createNavigationTree('services'))

		const paging = {
			pageNumber: APP_CONFIG.PAGING.PAGE_NUMBER,
			pageSize: APP_CONFIG.PAGING.PAGE_SIZE
		}

		this.getServiceList(paging)
	}

	getServiceList(paging: any, filter = null) {
		this.setState({ serviceListLoading: true })
		try {
			ServiceOperationService.getServiceList(paging, filter)
				.then((response: any) => {
					this.setState({ serviceListResponse: response })
				})
				.then(() => {
					this.setState({ serviceListLoading: false })
				})
		} catch (e) {
			console.log(e)
		}
	}

	showNextPage(e: any) {
		console.log(e)
	}

	handleFilter(filter: any) {
		const paging = {
			pageNumber: APP_CONFIG.PAGING.PAGE_NUMBER,
			pageSize: APP_CONFIG.PAGING.PAGE_SIZE
		}

		this.getServiceList(paging, filter)
	}

	createNewVersion(e: any) {
		const serviceId = e.currentTarget.value
		console.log(serviceId)
	}

	openAddServiceModal() {
		this.setState({ addServiceModalVisible: true })
	}

	closeAddServiceModal() {
		this.setState({ addServiceModalVisible: false })
	}

	handleSaveServiceForm(service: any) {
		this.setState({
			addServiceRequestLoading: true
		})

		ServiceOperationService.addService(service).then((response: any) => {
			this.setState({
				addedService: response,
				addServiceRequestLoading: false
			})
		})
	}

	render() {
		if (this.state.addedService._id) {
			return (
				<Redirect
					to={'/app/services/' + this.state.addedService._id + '/detail'}
				/>
			)
		}

		const services = this.state.serviceListResponse.items.map(
			(service: any, index) => {
				return (
					<PaginatedItem key={index}>
						<PaginatedItemColumn width={60}>
							<VersionLabel version={service.version && service.version.name} />
							{service.serviceName}
						</PaginatedItemColumn>
						<PaginatedItemColumn width={10}>
							{service.serviceType}
						</PaginatedItemColumn>
						<PaginatedItemColumn width={10}>
							{Moment(service.lastModifiedAt).format('DD.MM.YYYY HH:mm')}
						</PaginatedItemColumn>
						<PaginatedItemColumn width={20} actions={true}>
							<ListItemAction
								name='new-version'
								value={service._id}
								icon={faArrowAltCircleUp}
								onClick={this.createNewVersion}
							/>
							<ListItemRedirectAction
								link={'/app/services/' + service._id + '/detail'}
								icon={faEdit}
							/>
						</PaginatedItemColumn>
					</PaginatedItem>
				)
			}
		)

		return (
			<div className='page-container'>
				<div className='service-list-grid'>
					<ServiceListFilters onFilter={this.handleFilter} />
					<PaginatedList
						addButton={true}
						onAddAction={this.openAddServiceModal}
						headerText='Result'
						nextPage={this.state.serviceListResponse.nextPage}
						loadNextPage={this.showNextPage}
					>
						{services}
					</PaginatedList>
					<ServiceModalForm
						service={this.state.addedService}
						visible={this.state.addServiceModalVisible}
						loading={this.state.addServiceRequestLoading}
						onClose={this.closeAddServiceModal}
						onSave={this.handleSaveServiceForm}
					/>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state: any) => {
	return {
		services: state.ServiceListReducer.services,
		servicesLoading: state.ServiceListReducer.isLoading,
		servicesFailed: state.ServiceListReducer.hasFailed
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		getServiceListRequest: () => dispatch(getServiceListRequest()),
		changeNavigation: (currentLocation: any) =>
			dispatch(changeNavigation(currentLocation))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ServiceListContainer)
