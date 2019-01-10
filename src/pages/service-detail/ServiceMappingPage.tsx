import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeNavigation } from '../../actions/sharedActions'
import { AppUtils } from '../../utils/AppUtils'
import { ServiceOperationService } from '../../services/ServiceOperationService'
import { DependencyService } from '../../services/DependencyService'
import { Service, Property } from '../../models'

interface Props {
	service: Service
	changeNavigation: any
}

class ServiceMappingContainer extends Component<Props> {
	constructor(props: Props) {
		super(props)
		this.showDependecyServiceProps = this.showDependecyServiceProps.bind(this)
		this.handleMappingDetail = this.handleMappingDetail.bind(this)
	}

	componentDidMount() {
		this.props.changeNavigation(
			AppUtils.createNavigationTree(
				'services',
				this.props.service.serviceName,
				'mapping'
			)
		)
	}

	state = {
		dependencyServicePropsLoading: false,
		dependencyServiceDetail: {
			properties: []
		},
		dependencyServicePropsWaiting: true,
		mappingDetailVisible: false,
		mappedPropertyDefinition: null,
		propertyMappingLoading: false,
		propertyMappingDetail: null,
		dependencyMapping: {
			_id: ''
		}
	}

	async showDependecyServiceProps(dependencyId: string) {
		this.setState({
			dependencyServicePropsLoading: true,
			dependencyServicePropsWaiting: true
		})

		try {
			const dependencyResponse = await DependencyService.getDependencyById(
				dependencyId
			)
			const serviceDetail = await ServiceOperationService.getServiceDetailById(
				dependencyResponse.service
			)
			this.setState({
				dependencyServicePropsLoading: false,
				dependencyServiceDetail: serviceDetail,
				dependencyMapping: dependencyResponse
			})
		} catch (e) {
			console.log(e)
		}
	}

	async handleMappingDetail(e: any) {
		const propertyId = e.currentTarget.value
		const currentService = this.state.dependencyServiceDetail
		const currentProperty: any = currentService.properties.find(
			(property: Property) => {
				return property._id === propertyId
			}
		)

		this.setState({
			propertyMappingLoading: true,
			mappingDetailVisible: true,
			mappedPropertyDefinition: currentProperty
		})

		try {
			const propertyMapping = await DependencyService.getPropertyMapping(
				this.state.dependencyMapping._id,
				currentProperty._id
			)

			this.setState({
				propertyMappingLoading: false,
				propertyMappingDetail: propertyMapping
			})
		} catch (e) {
			console.log(e)
		}
	}

	render() {
		return <div className='service-mapping-grid'>sad</div>
	}
}

const mapStateToProps = (state: any) => {
	return {
		mappingList: state.ServiceDetailReducer.mappingList,
		service: state.ServiceDetailReducer.service
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		changeNavigation: (currentLocation: any) =>
			dispatch(changeNavigation(currentLocation))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ServiceMappingContainer)
