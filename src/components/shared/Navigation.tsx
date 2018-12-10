import React from 'react'

interface NavLink {
	LABEL: string
	URI: string
}

interface Props {
	links: NavLink[]
}

const Navigation: React.SFC<Props> = (props) => (
	<div className='navigation-container'>
		<p>{props.links[0].LABEL}</p>
	</div>
)

export default Navigation
