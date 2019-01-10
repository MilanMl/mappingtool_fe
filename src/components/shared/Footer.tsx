import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNode, faReact } from '@fortawesome/free-brands-svg-icons'

const Footer: React.SFC<{}> = (props) => (
	<div className='footer'>
		<span className='footer-icon'>
			<FontAwesomeIcon icon={faNode} />
		</span>
		<span className='footer-icon'>
			<FontAwesomeIcon icon={faReact} />
		</span>
	</div>
)

export default Footer
