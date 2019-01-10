import React from 'react'

interface Props {
	class?: string
}

const Spinner: React.SFC<Props> = (props) => {
	let cssClass = 'loader-container'
	if (props.class) {
		cssClass = cssClass + ' ' + props.class
	}

	return (
		<div className={cssClass}>
			<div className='loader' />
		</div>
	)
}

export default Spinner
