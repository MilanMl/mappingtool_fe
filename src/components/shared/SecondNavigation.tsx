import React from 'react'
import { NavLink } from 'react-router-dom'
import DICTIONARY from '../../config/dictionary'

interface Props {
	itemId: string
}

const SecondNavigation: React.SFC<Props> = (props: Props) => (
	<div className='second-navigation'>
		<ul className='second-navigation-items'>
			<li className='second-navigation-item'>
				<NavLink
					to={'/app/services/' + props.itemId + '/detail'}
					activeClassName='active'
				>
					{DICTIONARY.EN.SECOND_SERVICE_NAVIGATION.LINK_SERVICE_DETAIL.toUpperCase()}
				</NavLink>
			</li>
			<li className='second-navigation-item'>
				<NavLink
					to={'/app/services/' + props.itemId + '/attachments'}
					activeClassName='active'
				>
					{DICTIONARY.EN.SECOND_SERVICE_NAVIGATION.LINK_SERVICE_ATTACHMENTS.toUpperCase()}
				</NavLink>
			</li>
			<li className='second-navigation-item'>
				<NavLink
					to={'/app/services/' + props.itemId + '/use-cases'}
					activeClassName='active'
				>
					{DICTIONARY.EN.SECOND_SERVICE_NAVIGATION.LINK_SERVICE_USE_CASES.toUpperCase()}
				</NavLink>
			</li>
			<li className='second-navigation-item'>
				<NavLink
					to={'/app/services/' + props.itemId + '/mapping'}
					activeClassName='active'
				>
					{DICTIONARY.EN.SECOND_SERVICE_NAVIGATION.LINK_SERVICE_MAPPING.toUpperCase()}
				</NavLink>
			</li>
		</ul>
	</div>
)

export default SecondNavigation
