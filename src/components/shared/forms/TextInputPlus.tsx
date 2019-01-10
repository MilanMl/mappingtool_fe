import React, { Component, createRef } from 'react'

interface Props {
	name: string
	type: string
	label: string
	placeholder: string
	required?: boolean
	minLength?: number
	maxLenght?: number
	min?: number
	max?: number
	value: string
	onChange: any
	options: any
}

class TextInput extends Component<Props> {
	constructor(props: Props) {
		super(props)
		this.handleChangeTextfield = this.handleChangeTextfield.bind(this)
		this.handleChooseOption = this.handleChooseOption.bind(this)
		this.setWrapperRef = this.setWrapperRef.bind(this)
		this.handleClickOutside = this.handleClickOutside.bind(this)
		this.handleShowOptions = this.handleShowOptions.bind(this)
	}

	wrapperRef = createRef<HTMLElement>()

	componentDidMount() {
		document.addEventListener('mousedown', this.handleClickOutside)
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleClickOutside)
	}

	setWrapperRef(node: any) {
		this.wrapperRef = node
	}

	handleClickOutside(event: any) {
		if (
			this.wrapperRef &&
			this.wrapperRef.current &&
			!this.wrapperRef.current.contains(event.target)
		) {
			this.setState({ optionsVisible: false })
		}
	}

	filterOptions(value: string) {
		let filteredOptions = []

		if (value) {
			filteredOptions = this.props.options.filter((option: any) => {
				if (option.name.search(value) !== -1) {
					return option
				}
			})
		} else {
			filteredOptions = this.props.options
		}

		return filteredOptions
	}

	state = {
		optionsVisible: false,
		currentOptions: this.filterOptions(this.props.value)
	}

	handleChangeTextfield(e: any) {
		const value = e.target.value
		let filteredOptions = this.filterOptions(value)

		this.setState({
			currentOptions: filteredOptions,
			optionsVisible: true
		})

		this.props.onChange(e)
	}

	handleShowOptions() {
		this.setState({ optionsVisible: true })
	}

	handleChooseOption(e: any) {
		this.setState({
			optionsVisible: false,
			currentOptions: this.filterOptions(e.target.value)
		})
		this.props.onChange(e)
	}

	render() {
		const {
			name,
			type = 'text',
			label,
			placeholder,
			required = this.props.required ? true : false,
			minLength = 0,
			maxLenght = 128,
			min,
			max,
			value = '',
			onChange
		} = this.props

		const optionItems = this.state.currentOptions.map(
			(option: any, index: number) => {
				return (
					<button
						key={index}
						className='text-input-plus-option'
						name={name}
						value={option.value}
						onClick={this.handleChooseOption}
					>
						{option.name}
					</button>
				)
			}
		)

		return (
			<div className='form-input'>
				<label htmlFor={name}>{label}</label>
				<input
					type={type}
					name={name}
					value={value}
					placeholder={placeholder}
					minLength={minLength}
					maxLength={maxLenght}
					min={min}
					max={max}
					required={required}
					className='combobox'
					onClick={this.handleShowOptions}
					onChange={this.handleChangeTextfield}
				/>
				{this.state.optionsVisible && (
					<div className='combobox-options' ref={this.setWrapperRef}>
						{optionItems}
					</div>
				)}
				<div className='error-message' />
			</div>
		)
	}
}

export default TextInput
