import React from 'react'

interface Props {
	loading?: boolean | null
	label: string
	outerClass: string
	type: string
	name: string
	buttonClass: string
	onClick?: any
}

const Button: React.SFC<Props> = (props) => {
	let label = props.loading ? '...' : props.label

	return (
		<div className={props.outerClass}>
			<button
				type={props.type}
				name={props.name}
				className={props.buttonClass}
				onClick={props.onClick}
			>
				{label}
			</button>
		</div>
	)
}

export default Button
