import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faChartArea,
	faGlobe,
	faPuzzlePiece,
	faCogs,
	faLowVision
} from '@fortawesome/free-solid-svg-icons'

const NavigationList: React.SFC<{}> = (props) => (
	<div className='nav'>
		<div className='logo' />
		<div className='navigation-list'>
			<ul>
				<li>
					<NavLink to='/app/dashboard' activeClassName='active'>
						<div className='nav-icon'>
							<FontAwesomeIcon icon={faChartArea} />
						</div>
					</NavLink>
				</li>
				<li>
					<NavLink to='/app/services' activeClassName='active'>
						<div className='nav-icon'>
							<FontAwesomeIcon icon={faGlobe} />
						</div>
					</NavLink>
				</li>
				<li>
					<NavLink to='/app/imports' activeClassName='active'>
						<div className='nav-icon'>
							<FontAwesomeIcon icon={faPuzzlePiece} />
						</div>
					</NavLink>
				</li>
				<li>
					<NavLink to='/app/graphs' activeClassName='active'>
						<div className='nav-icon'>
							<FontAwesomeIcon icon={faLowVision} />
						</div>
					</NavLink>
				</li>
				<li>
					<NavLink to='/app/settings' activeClassName='active'>
						<div className='nav-icon'>
							<FontAwesomeIcon icon={faCogs} />
						</div>
					</NavLink>
				</li>
			</ul>
		</div>
	</div>
)

export default NavigationList
