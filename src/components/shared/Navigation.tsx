import React from 'react'
import { checkPropTypes } from 'prop-types'

interface NavLink {
	LABEL: string
	URI: string
}

const Navigation: React.SFC<{ links: NavLink[] }> = (props) => (
	<div className='navigation-container'>
		<p>{props.links[0].LABEL}</p>
	</div>
)

export default Navigation
