import React, { Component } from 'react'
import {
	Form,
	Button,
	TextInput,
	Combobox,
	Checkbox
} from '../shared/forms/index'
import APP_CONFIG from '../../config/appConfig'
import { AppUtils } from '../../utils/AppUtils'

interface Props {
	loading: boolean
	service: any
	onServiceSave: any
	versions: any
}

export default class ServiceForm extends Component<Props> {
	constructor(props: any) {
		super(props)
		this.handleFormChange = this.handleFormChange.bind(this)
		this.handleSaveForm = this.handleSaveForm.bind(this)
	}

	state = {
		service: this.props.service,
		serviceTypes: AppUtils.createOptionsFromObject(APP_CONFIG.SERVICE_TYPES),
		currentServiceTypeOption: this.props.service._id
			? AppUtils.createComboboxOption(
					this.props.service.serviceType,
					this.props.service.serviceType
			  )
			: '',
		currentServiceVersionOption: this.props.service.version
			? AppUtils.createComboboxOption(
					this.props.service.version.name,
					this.props.service.version._id
			  )
			: ''
	}

	handleFormChange(e: any) {
		let service = this.state.service
		const name = e.currentTarget.name
		const value = e.currentTarget.value

		service[name] = value

		this.setState({ service: service })
	}

	handleSaveForm(e: any) {
		this.props.onServiceSave(this.state.service)
	}

	render() {
		const { loading } = this.props

		return (
			<div className='form-fields'>
				<Form onSubmit={this.handleSaveForm}>
					<TextInput
						type='text'
						name='serviceName'
						label='service'
						value={this.state.service.serviceName}
						placeholder='service name'
						required={true}
						minLength={5}
						maxLength={64}
						onChange={this.handleFormChange}
					/>
					<Combobox
						name='serviceType'
						label='Service type'
						required={true}
						value={this.state.service.serviceType}
						options={this.state.serviceTypes}
						onChange={this.handleFormChange}
					/>
					<Combobox
						name='version'
						label='Release version'
						value={
							typeof this.state.service.version === 'object'
								? this.state.service.version._id
								: this.state.service.version
						}
						options={this.props.versions}
						onChange={this.handleFormChange}
					/>
					<Checkbox
						name='userDefined'
						label='User defined'
						checked={this.state.service.userDefined}
						disabled={true}
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
			</div>
		)
	}
}
