import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Button, TextInput } from '../../shared/forms/index'

interface Props {
	onUseCaseSave: any
	loading?: boolean
}

export default class ServiceUseCaseForm extends Component<Props> {
	constructor(props: Props) {
		super(props)
		this.handleFormChange = this.handleFormChange.bind(this)
		this.handleSaveForm = this.handleSaveForm.bind(this)
	}

	static propTypes = {
		loading: PropTypes.bool.isRequired,
		useCase: PropTypes.object
	}

	state = {
		useCase: {
			mappingName: ''
		}
	}

	handleFormChange(e: any) {
		let useCase: any = this.state.useCase
		useCase[e.currentTarget.name] = e.currentTarget.value
		this.setState({ useCase: useCase })
	}

	handleSaveForm(e: any) {
		this.props.onUseCaseSave(this.state.useCase)
	}

	render() {
		const { loading } = this.props

		return (
			<div className='form-fields'>
				<Form onSubmit={this.handleSaveForm}>
					<TextInput
						name='mappingName'
						label='Mapping name'
						type='text'
						value={this.state.useCase.mappingName}
						placeholder='Mapping name'
						required={true}
						minLength={3}
						maxLength={64}
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
			</div>
		)
	}
}
