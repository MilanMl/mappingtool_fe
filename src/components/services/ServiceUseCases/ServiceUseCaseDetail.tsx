import React, { Component } from 'react'
import SearchInput from '../../shared/SearchInput'
import ServiceList from '../serviceList/ServiceList'
import { ServiceOperationService } from '../../../services/ServiceOperationService'
import APP_CONFIG from '../../../config/appConfig'
import { Paging, Service } from '../../../models'

interface Props {
	mapping: any
	onAddServiceDependency: any
}

interface State {
	serviceListLoading: boolean
	filter: any
	serviceList: any
}

export default class ServiceUseCaseDetail extends Component<Props, State> {
	constructor(props: Props) {
		super(props)
		this.handleSearch = this.handleSearch.bind(this)
	}

	state: State = {
		serviceListLoading: false,
		filter: { name: '' },
		serviceList: {}
	}

	async handleSearch(search: string) {
		const paging = {
			pageNumber: APP_CONFIG.PAGING.PAGE_NUMBER,
			pageSize: APP_CONFIG.PAGING.PAGE_SIZE
		}

		const filter = this.state.filter
		filter.name = search

		this.setState({ serviceListLoading: true })
		let serviceListResult = await ServiceOperationService.getServiceList(
			paging,
			filter
		)
		this.setState({
			serviceListLoading: false,
			serviceList: serviceListResult
		})
	}

	render() {
		const { mapping } = this.props

		return (
			<div className='service-use-case-detail'>
				<div className='box white'>
					<div className='box-header'>{mapping.mappingName}</div>
					<div className='box-content'>
						<SearchInput
							placeholder='Search service'
							onSearch={this.handleSearch}
						/>
						<div className='box-row' />
						<ServiceList
							loading={this.state.serviceListLoading}
							services={this.state.serviceList}
							itemActions={
								APP_CONFIG.SERVICE_DETAIL_ACTIONS.USE_CASE_SERVICES_ITEM_ACTIONS
							}
							onAddItemAction={this.props.onAddServiceDependency}
						/>
					</div>
				</div>
			</div>
		)
	}
}
