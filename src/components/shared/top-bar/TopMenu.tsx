import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff, faUser } from '@fortawesome/free-solid-svg-icons'

const TopMenu: React.SFC<{}> = (props) => (
	<div className='top-menu'>
		<div className='top-menu-link'>
			<NavLink to={'aaa'}>
				<FontAwesomeIcon icon={faUser} />
			</NavLink>
		</div>
		<div className='top-menu-link'>
			<NavLink to={'aaa'}>
				<FontAwesomeIcon icon={faPowerOff} />
			</NavLink>
		</div>
	</div>
)

export default TopMenu
