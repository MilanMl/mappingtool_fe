import React from 'react'

interface Props {
	name: string
	label: string
	placeholder?: string
	required: any
	minLength?: number
	maxLength?: number
	value: string
	rows?: number
	onChange: any
}

const Textarea: React.SFC<Props> = (props) => {
	const {
		name,
		label,
		placeholder,
		required = props.required ? 'required' : null,
		minLength = 0,
		maxLength = 128,
		value = '',
		rows = 5,
		onChange
	} = props

	return (
		<div className='form-input'>
			<label htmlFor={name}>{label}</label>
			<textarea
				name={name}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
				minLength={minLength}
				maxLength={maxLength}
				required={required}
				rows={rows}
			/>
			<div className='error-message' />
		</div>
	)
}

export default Textarea
