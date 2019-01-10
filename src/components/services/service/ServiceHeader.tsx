import React, { Component } from 'react'
import { connect } from 'react-redux'
import Moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faUpload } from '@fortawesome/free-solid-svg-icons'
import {
	updateServiceRequest,
	importPropertiesRequest
} from '../../../actions/serviceDetailActions'
import ServiceModalForm from '../ServiceModalForm'
import ImportPropertiesModal from '../ImportPropertiesModal'
import { VersionLabel } from '../../shared/'
import { Service } from '../../../models'

interface Props {
	service: Service
	updateServiceRequest: any
	updateServiceLoading: boolean
	importPropertiesRequest: any
}

class ServiceHeader extends Component<Props> {
	constructor(props: Props) {
		super(props)
		this.openServiceFormModal = this.openServiceFormModal.bind(this)
		this.closeModals = this.closeModals.bind(this)
		this.handleSaveServiceForm = this.handleSaveServiceForm.bind(this)
		this.openImportPropertiesModal = this.openImportPropertiesModal.bind(this)
		this.handleImportProperties = this.handleImportProperties.bind(this)
	}

	state = {
		serviceModalVisible: false,
		updateServiceLoading: false,
		importPropertiesModalVisible: false
	}

	openServiceFormModal() {
		this.setState({ serviceModalVisible: true })
	}

	closeModals() {
		this.setState({
			serviceModalVisible: false,
			importPropertiesModalVisible: false
		})
	}

	handleSaveServiceForm(service: Service) {
		this.props
			.updateServiceRequest(service)
			.then(() => this.setState({ serviceModalVisible: false }))
	}

	openImportPropertiesModal() {
		this.setState({ importPropertiesModalVisible: true })
	}

	handleImportProperties(importObject: any) {
		this.props
			.importPropertiesRequest(this.props.service._id, importObject)
			.then(() => this.setState({ importPropertiesModalVisible: false }))
	}

	render() {
		const { service } = this.props

		return (
			<div className='detail-header'>
				<div>
					<VersionLabel version={service.version && service.version.name} />
					<h1>{service.serviceName}</h1>
					{service.userDefined && (
						<span>
							<button
								className='header-action'
								onClick={this.openServiceFormModal}
							>
								<FontAwesomeIcon icon={faEdit} />
							</button>
							<button
								className='header-action'
								onClick={this.openImportPropertiesModal}
							>
								<FontAwesomeIcon icon={faUpload} />
							</button>
						</span>
					)}
					<ServiceModalForm
						visible={this.state.serviceModalVisible}
						loading={this.props.updateServiceLoading}
						onClose={this.closeModals}
						onSave={this.handleSaveServiceForm}
						service={service}
					/>
					<ImportPropertiesModal
						visible={this.state.importPropertiesModalVisible}
						loading={this.props.updateServiceLoading}
						onClose={this.closeModals}
						onSave={this.handleImportProperties}
					/>
				</div>
				<div className='header-info'>
					<span className='inline-info'>
						Created at: {Moment(service.createdAt).format('DD.MM.YYYY HH:mm')}
					</span>
					<span className='inline-info'>
						Last modified:{' '}
						{Moment(service.lastModifiedAt).format('DD.MM.YYYY HH:mm')}
					</span>
				</div>
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
		updateServiceRequest: (service: Service) =>
			dispatch(updateServiceRequest(service)),
		importPropertiesRequest: (serviceId: string, importObject: any) =>
			dispatch(importPropertiesRequest(serviceId, importObject))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ServiceHeader)
