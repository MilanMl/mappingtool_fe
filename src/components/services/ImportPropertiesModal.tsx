import React, { Component } from 'react'
import Modal from 'react-modal'
import APP_CONFIG from '../../config/appConfig'
import { Form, Combobox, Textarea, Button } from '../shared/forms/index'
import { AppUtils } from '../../utils/AppUtils'

interface Props {
	loading?: boolean
	onClose: any
	visible: any
	onSave: any
}

Modal.setAppElement('#root')

class ImportPropertiesModal extends Component<Props> {
	constructor(props: Props) {
		super(props)
		this.handleFormChange = this.handleFormChange.bind(this)
		this.handleSaveForm = this.handleSaveForm.bind(this)
	}

	state = { importObject: { group: '', exampleObject: '' } }

	handleFormChange(e: any) {
		let importObject: any = this.state.importObject
		importObject[e.target.name] = e.target.value
		this.setState({ importObject: importObject })
	}

	handleSaveForm() {
		this.props.onSave(this.state.importObject)
	}

	render() {
		const { loading, onClose, visible } = this.props

		const groups = AppUtils.createOptionsFromObject(APP_CONFIG.PROPERTY_GROUPS)

		return (
			<Modal
				isOpen={visible}
				onRequestClose={onClose}
				shouldCloseOnOverlayClick={true}
				style={APP_CONFIG.MODAL_WINDOW_STYLES}
			>
				<div className='modal-header'>
					<button className='close-modal' onClick={onClose}>
						x
					</button>
				</div>
				<Form onSubmit={this.handleSaveForm}>
					<Combobox
						name='group'
						label='Group'
						required={true}
						value={this.state.importObject.group}
						options={groups}
						onChange={this.handleFormChange}
					/>
					<Textarea
						name='exampleObject'
						label='huh'
						placeholder={'Some valid json'}
						value={this.state.importObject.exampleObject}
						required={true}
						maxLength={1000}
						rows={15}
						onChange={this.handleFormChange}
					/>
					<Button
						name='submit'
						label='Save'
						type='submit'
						outerClass='form-input'
						buttonClass='green right'
						loading={loading}
					/>
				</Form>
			</Modal>
		)
	}
}

export default ImportPropertiesModal
