import React from 'react'

interface Props {
	class: string
	iconClass: string
	onClick: any
}

const ActionButton: React.SFC<Props> = (props) => (
	<button type='button' className={props.class} onClick={props.onClick}>
		<span className={props.iconClass} />
	</button>
)

export default ActionButton
