import React from 'react'
import Moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faEdit,
	faPlus,
	faArrowAltCircleUp
} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import APP_CONFIG from '../../../config/appConfig'

interface Props {
	service: any
	actions?: any
	onAddItemAction: any
	onCreateNewVersion: any
}

const ServiceListItem: React.SFC<Props> = (props) => {
	const { service, actions = [], onAddItemAction, onCreateNewVersion } = props

	let sourceSystem = service.sourceSystem ? service.sourceSystem.name : 'FU'

	return (
		<div className='group-item'>
			<div className='group-item-col w-10'>{sourceSystem}</div>
			<div className='group-item-col w-30'>
				({service.serviceType}) {service.serviceName}
			</div>
			<div className='group-item-col w-20'>
				{Moment(service.lastModifiedAt).format('DD.MM.YYYY HH:mm')}
			</div>
			<div className='group-item-col w-20'>{service.lastModifiedBy}</div>
			<div className='group-item-col w-20 right'>
				<div className='list-actions'>
					{actions.includes(APP_CONFIG.ACTION_TYPES.NEW_VERSION) &&
						service.userDefined && (
							<button
								name='newversion'
								value={service._id}
								className='list-action'
								onClick={onCreateNewVersion}
							>
								<FontAwesomeIcon icon={faArrowAltCircleUp} />
							</button>
						)}
					{actions.includes(APP_CONFIG.ACTION_TYPES.EDIT) && (
						<NavLink
							to={'/app/services/' + service._id + '/detail'}
							className='list-action'
						>
							<FontAwesomeIcon icon={faEdit} />
						</NavLink>
					)}

					{actions.includes(APP_CONFIG.ACTION_TYPES.ADD) && (
						<button
							name='addService'
							value={service._id}
							className='list-action'
							onClick={onAddItemAction}
						>
							<FontAwesomeIcon icon={faPlus} />
						</button>
					)}
				</div>
			</div>
		</div>
	)
}

export default ServiceListItem
