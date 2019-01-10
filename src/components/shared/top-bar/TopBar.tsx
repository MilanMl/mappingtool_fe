import React from 'react'
import CurrentLocation from './CurrentLocation'
import TopMenu from './TopMenu'

const TopBar: React.SFC<{}> = (props) => (
	<div className='top-bar'>
		<CurrentLocation />
		<TopMenu />
	</div>
)

export default TopBar
