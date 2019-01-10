import React, { Component } from 'react'

interface Props {
	name: string
	type: string
	label: string
	placeholder?: string
	required: any
	minLength?: number
	maxLength?: number
	min?: number
	max?: number
	value: string
	onChange: any
}

const TextInput: React.SFC<Props> = (props) => {
	const {
		name,
		type = 'text',
		label,
		placeholder,
		required = props.required ? 'required' : null,
		minLength = 0,
		maxLength = 128,
		min,
		max,
		value = '',
		onChange
	} = props

	return (
		<div className='form-input'>
			<label htmlFor={name}>{label}</label>
			<input
				type={type}
				name={name}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
				minLength={minLength}
				maxLength={maxLength}
				min={min}
				max={max}
				required={required}
			/>
			<div className='error-message' />
		</div>
	)
}

export default TextInput
