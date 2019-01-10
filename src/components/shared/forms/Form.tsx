import React, { Component, createRef, createElement } from 'react'
import PropTypes from 'prop-types'

interface Props {
	onSubmit: any
}

export default class Form extends Component<Props> {
	constructor(props: Props) {
		super(props)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.validateForm = this.validateForm.bind(this)
	}

	static propTypes = {
		loading: PropTypes.bool,
		onSubmit: PropTypes.func
	}

	state = {
		// isValid: false
	}

	formEl = createRef<HTMLFormElement>()

	validateForm() {
		let isValid = true

		const EMPTY_MESSAGE = ''
		const ERROR_MESSAGE = 'You have failed!'
		const ERROR_DOM_SELECTOR = '.error-message'
		const INPUT_VALID_CLASS = 'field-valid'
		const INPUT_INVALID_CLASS = 'field-invalid'

		if (!this.formEl.current) {
			return false
		}

		for (let elem = 0; elem < this.formEl.current.elements.length; elem++) {
			let currentElement = this.formEl.current[elem] as HTMLInputElement

			if (
				currentElement.type === 'submit' ||
				currentElement.type === 'button'
			) {
				continue
			}

			currentElement.setCustomValidity(EMPTY_MESSAGE)

			let parentElement = document.createElement('div') as Element
			if (
				currentElement.parentNode &&
				currentElement.parentNode.querySelector(ERROR_DOM_SELECTOR)
			) {
				parentElement = currentElement.parentNode.querySelector(
					ERROR_DOM_SELECTOR
				) as Element
			}

			if (!currentElement.checkValidity()) {
				currentElement.setCustomValidity(ERROR_MESSAGE)
				currentElement.className = INPUT_INVALID_CLASS
				parentElement.innerHTML = currentElement.validationMessage
				isValid = false
			} else {
				currentElement.className = INPUT_VALID_CLASS
				parentElement.innerHTML = EMPTY_MESSAGE
			}
		}

		return isValid
	}

	handleSubmit(e: any) {
		e.preventDefault()

		if (this.validateForm()) {
			this.props.onSubmit()
		}
	}

	render() {
		return (
			<form
				autoComplete='off'
				ref={this.formEl}
				onSubmit={this.handleSubmit}
				noValidate
			>
				{this.props.children}
			</form>
		)
	}
}
