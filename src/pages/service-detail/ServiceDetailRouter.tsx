import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import {
	getServiceDetailRequest,
	serviceDetailInitComplete,
	getServiceMappingListRequest
} from '../../actions/serviceDetailActions'
import { NotFoundPage } from '..'
import Spinner from '../../components/shared/Spinner'
import SecondNavigation from '../../components/shared/SecondNavigation'
import ServiceHeader from '../../components/services/service/ServiceHeader'
import {
	ServiceDetailPage,
	ServiceAttachmentsPage,
	ServiceUseCasesPage,
	ServiceMappingPage
} from '../service-detail'

import { Service } from '../../models'

interface Props {
	service: Service
	serviceDetailInitComplete: any
	getServiceById: any
	getServiceMappingList: any
	match: any
	initComplete: boolean
}

class ServiceDetailRouter extends Component<Props> {
	componentDidMount() {
		if (this.props.service._id !== this.props.match.params.serviceId) {
			this.props.serviceDetailInitComplete(false)
			const initCalls = [
				this.props.getServiceById(this.props.match.params.serviceId),
				this.props.getServiceMappingList(this.props.match.params.serviceId)
			]

			Promise.all(initCalls).then(() => {
				this.props.serviceDetailInitComplete(true)
			})
		}
	}

	renderSpinner() {
		return <Spinner />
	}

	renderContent() {
		return (
			<div className='page-container'>
				<ServiceHeader />
				<Switch>
					<Route
						exact
						path='/app/services/:serviceId'
						component={ServiceDetailPage}
					/>
					<Route
						path='/app/services/:serviceId/detail'
						component={ServiceDetailPage}
					/>
					<Route
						path='/app/services/:serviceId/attachments'
						component={ServiceAttachmentsPage}
					/>
					<Route
						path='/app/services/:serviceId/use-cases'
						component={ServiceUseCasesPage}
					/>
					<Route
						path='/app/services/:serviceId/mapping'
						component={ServiceMappingPage}
					/>
					<Route component={NotFoundPage} />
				</Switch>
			</div>
		)
	}

	render() {
		let content
		if (!this.props.initComplete) {
			content = this.renderSpinner()
		} else {
			content = this.renderContent()
		}

		return (
			<div>
				<SecondNavigation itemId={this.props.match.params.serviceId} />
				{content}
			</div>
		)
	}
}

const mapStateToProps = (state: any) => {
	return {
		service: state.ServiceDetailReducer.service,
		isLoading: state.ServiceDetailReducer.isLoading,
		initComplete: state.ServiceDetailReducer.initComplete
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		getServiceById: (serviceId: string) =>
			dispatch(getServiceDetailRequest(serviceId)),
		getServiceMappingList: (serviceId: string) =>
			dispatch(getServiceMappingListRequest(serviceId)),
		serviceDetailInitComplete: (isComplete: boolean) =>
			dispatch(serviceDetailInitComplete(isComplete))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ServiceDetailRouter)
