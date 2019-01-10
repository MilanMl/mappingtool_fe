import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import { changeNavigation } from '../../actions/sharedActions'
import { AppUtils } from '../../utils/AppUtils'
import {
	addServiceMappingRequest,
	updateServiceMappingRequest,
	addMappingDependency
} from '../../actions/serviceDetailActions'
import ServiceUseCaseList from '../../components/services/ServiceUseCases/ServiceUseCaseList'
import ServiceUseCaseForm from '../../components/services/ServiceUseCases/ServiceUseCaseForm'
import ServiceUseCaseDetail from '../../components/services/ServiceUseCases/ServiceUseCaseDetail'
import APP_CONFIG from '../../config/appConfig'
import { Service } from '../../models'

interface Props {
	changeNavigation: any
	service: Service
	mappingList: any
	addServiceMappingRequest: any
	addMappingDependency: any
	updateServiceMappingRequest: any
	updateServiceMappingLoading: boolean
}

class ServiceUseCasesPage extends Component<Props> {
	constructor(props: Props) {
		super(props)
		this.handleShowModal = this.handleShowModal.bind(this)
		this.handleCloseModal = this.handleCloseModal.bind(this)
		this.showDependencyForm = this.showDependencyForm.bind(this)
		this.handleSaveMapping = this.handleSaveMapping.bind(this)
		this.handleSaveDependency = this.handleSaveDependency.bind(this)
		this.handleDeleteDependency = this.handleDeleteDependency.bind(this)
		this.handleCloneMapping = this.handleCloneMapping.bind(this)
	}

	componentDidMount() {
		this.props.changeNavigation(
			AppUtils.createNavigationTree(
				'services',
				this.props.service.serviceName,
				'use-cases'
			)
		)
	}

	state: any = {
		modalVisible: false,
		dependencyFormVisible: false,
		editedMapping: null,
		clonedMapping: null
	}

	handleShowModal() {
		this.setState({
			modalVisible: true
		})
	}

	handleCloseModal() {
		this.setState({
			modalVisible: false,
			clonedMappingId: null
		})
	}

	showDependencyForm(mappingId: string) {
		let mappingList = this.props.mappingList
		const editedMapping = mappingList.find((mapping: any) => {
			return mapping._id === mappingId
		})

		this.setState({
			dependencyFormVisible: true,
			editedMapping: editedMapping
		})
	}

	handleSaveMapping(mapping: any) {
		this.props.addServiceMappingRequest(
			this.props.service._id,
			mapping,
			this.state.clonedMappingId
		)
		this.handleCloseModal()
	}

	handleCloneMapping(mappingId: string) {
		this.setState({
			modalVisible: true,
			clonedMappingId: mappingId
		})
	}

	handleSaveDependency(e: any) {
		const dependencyServiceId = e.currentTarget.value

		let currentMapping = this.props.mappingList.find((mapping: any) => {
			return mapping._id === this.state.editedMapping._id
		})

		this.props.addMappingDependency(
			this.props.service._id,
			currentMapping._id,
			dependencyServiceId
		)
	}

	handleDeleteDependency(e: any) {
		const dependencyId = e.currentTarget.value
		console.log(dependencyId)
		let currentMapping = this.findMappingByDependencyId(dependencyId)
		console.log(currentMapping)
		currentMapping.dependencyServices = currentMapping.dependencyServices.filter(
			(dependency: any) => {
				return dependency._id !== dependencyId
			}
		)

		console.log(currentMapping)

		this.props.updateServiceMappingRequest(
			this.props.service._id,
			currentMapping
		)
	}

	findMappingByDependencyId(dependencyId: string) {
		let mappingList = this.props.mappingList
		console.log(mappingList)
		for (let i = 0; i <= mappingList.length; i++) {
			for (let j = 0; j < mappingList[i].dependencyServices.length; j++) {
				if (mappingList[i].dependencyServices[j]._id === dependencyId) {
					return mappingList[i]
				}
			}
		}
	}

	render() {
		const { mappingList, updateServiceMappingLoading } = this.props

		return (
			<div className='service-use-case-grid'>
				<ServiceUseCaseList
					items={mappingList}
					loading={updateServiceMappingLoading}
					onAddUseCase={this.handleShowModal}
					onAddDependency={this.showDependencyForm}
					onCloneMapping={this.handleCloneMapping}
					onDeleteDependency={this.handleDeleteDependency}
				/>
				{this.state.dependencyFormVisible && (
					<ServiceUseCaseDetail
						mapping={this.state.editedMapping}
						onAddServiceDependency={this.handleSaveDependency}
					/>
				)}
				<Modal
					isOpen={this.state.modalVisible}
					onRequestClose={this.handleCloseModal}
					shouldCloseOnOverlayClick={true}
					style={APP_CONFIG.MODAL_WINDOW_STYLES}
				>
					<ServiceUseCaseForm
						loading={updateServiceMappingLoading}
						onUseCaseSave={this.handleSaveMapping}
					/>
				</Modal>
			</div>
		)
	}
}

const mapStateToProps = (state: any) => {
	return {
		mappingList: state.ServiceDetailReducer.mappingList,
		service: state.ServiceDetailReducer.service,
		updateServiceMappingLoading:
			state.ServiceDetailReducer.updateServiceMappingLoading
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		changeNavigation: (currentLocation: any) =>
			dispatch(changeNavigation(currentLocation)),
		addServiceMappingRequest: (
			serviceId: string,
			mapping: any,
			mappingId: string
		) => dispatch(addServiceMappingRequest(serviceId, mapping, mappingId)),
		updateServiceMappingRequest: (serviceId: string, mapping: any) =>
			dispatch(updateServiceMappingRequest(serviceId, mapping)),
		addMappingDependency: (
			serviceId: string,
			mappingId: string,
			dependencyServiceId: string
		) =>
			dispatch(addMappingDependency(serviceId, mappingId, dependencyServiceId))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ServiceUseCasesPage)
