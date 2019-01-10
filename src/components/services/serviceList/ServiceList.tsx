import React, { Component } from 'react'
import ServiceListItem from './ServiceListItem'
import GroupListContainer from '../../shared/groupList/GroupListContainer'
import GroupList from '../../shared/groupList/GroupList'
import PagingButton from '../../shared/groupList/PagingButton'
import { Paging, Service } from '../../../models'

interface Props {
	services: Paging<Service>
	itemActions: any
	onAddItemAction?: any
	onCreateNewVersion?: any
	containerActions?: any
	loading: boolean
	onAddService?: any
	onNextPage?: any
}

const ServiceList: React.SFC<Props> = (props) => {
	const items = props.services.items.map((service: Service, index: number) => {
		return (
			<ServiceListItem
				service={service}
				key={index}
				actions={props.itemActions}
				onAddItemAction={props.onAddItemAction}
				onCreateNewVersion={props.onCreateNewVersion}
			/>
		)
	})

	return (
		<div className='service-list-items'>
			<GroupListContainer
				title='Service list result:'
				actions={props.containerActions}
				loading={props.loading}
				onAddItem={props.onAddService}
			>
				<GroupList showHideButton={false} showHeader={false}>
					{items}
				</GroupList>
			</GroupListContainer>
			<PagingButton
				pageNumber={props.services.pageNumber}
				nextPage={props.services.nextPage}
				onShowNextPage={props.onNextPage}
			/>
		</div>
	)
}

export default ServiceList
