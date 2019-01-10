import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

interface Props {
	dependencyService: any
	onDelete: any
}

const ServiceUseCaseListItem: React.SFC<Props> = (props) => (
	<div className='group-item'>
		<div className='group-item-col w-80'>
			<Link
				to={'/app/services/' + props.dependencyService.service._id + '/detail'}
				target='_blank'
				className='item-link'
			>
				({props.dependencyService.service.serviceType}){' '}
				{props.dependencyService.service.serviceName}
			</Link>
		</div>
		<div className='group-item-col w-20 right'>
			<button
				className='list-action'
				type='button'
				name='delete'
				value={props.dependencyService._id}
				onClick={props.onDelete}
			>
				<FontAwesomeIcon icon={faTrash} />
			</button>
		</div>
	</div>
)

export default ServiceUseCaseListItem
