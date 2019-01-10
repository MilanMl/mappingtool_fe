import React from 'react'
import Modal from 'react-modal'
import { connect } from 'react-redux'
import ServiceForm from './ServiceForm'
import APP_CONFIG from '../../config/appConfig'
import { AppUtils } from '../../utils/AppUtils'

Modal.setAppElement('#root')

interface Props {
	visible: boolean
	onClose: any
	versions: any
	loading: any
	onSave: any
	service: any
}

function ServiceModalForm(props: Props) {
	return (
		<Modal
			isOpen={props.visible}
			onRequestClose={props.onClose}
			shouldCloseOnOverlayClick={true}
			style={APP_CONFIG.MODAL_WINDOW_STYLES}
			contentLabel='Example Modal'
		>
			<div className='modal-header'>
				<button className='close-modal' onClick={props.onClose}>
					x
				</button>
			</div>
			<ServiceForm
				versions={AppUtils.createComboboxVersionsOptions(props.versions)}
				loading={props.loading}
				onServiceSave={props.onSave}
				service={props.service}
			/>
		</Modal>
	)
}

const mapStateToProps = (state: any) => {
	return {
		versions: state.VersionReducer.versions
	}
}

export default connect(
	mapStateToProps,
	null
)(ServiceModalForm)
