import React, { Component } from 'react'
import ServiceUseCaseListItem from './ServiceUseCaseListItem'
import GroupListContainer from '../../shared/groupList/GroupListContainer'
import GroupList from '../../shared/groupList/GroupList'
import APP_CONFIG from '../../../config/appConfig'

interface Props {
	items: any
	loading: boolean
	onDeleteDependency: any
	onAddDependency: any
	onCloneMapping: any
	onAddUseCase: any
}

class ServiceUseCaseList extends Component<Props> {
	constructor(props: Props) {
		super(props)
		this.handleShowItems = this.handleShowItems.bind(this)
		this.handleGroupAction = this.handleGroupAction.bind(this)
	}

	state = {
		showItems: true
	}

	handleShowItems() {
		this.setState({ showItems: !this.state.showItems })
	}

	handleGroupAction(e: any) {
		let currentAction = e.currentTarget.name
		let value = e.currentTarget.value

		switch (currentAction) {
			case APP_CONFIG.ACTION_TYPES.ADD:
				this.props.onAddDependency(value)
				break
			case APP_CONFIG.ACTION_TYPES.CLONE:
				this.props.onCloneMapping(value)
				break
			default:
				return null
		}
	}

	render() {
		const { items, loading, onDeleteDependency } = this.props

		const mappingList = items.map((mapping: any, index: number) => {
			const dependencyServices = mapping.dependencyServices.map(
				(dependencyService: any, index: number) => {
					return (
						<ServiceUseCaseListItem
							key={index}
							dependencyService={dependencyService}
							onDelete={onDeleteDependency}
						/>
					)
				}
			)

			return (
				<GroupList
					key={index}
					showHideButton={true}
					groupName={mapping.mappingName}
					groupActions={
						APP_CONFIG.SERVICE_DETAIL_ACTIONS.USE_CASE_LIST_GROUP_ACTIONS
					}
					groupActionsValue={mapping._id}
					onGroupAction={this.handleGroupAction}
				>
					{dependencyServices}
				</GroupList>
			)
		})

		return (
			<div className='service-use-case-list'>
				<GroupListContainer
					actions={
						APP_CONFIG.SERVICE_DETAIL_ACTIONS.USE_CASE_LIST_GROUP_ACTIONS
					}
					loading={loading}
					onAddItem={this.props.onAddUseCase}
					showEmptyList={true}
				>
					{mappingList}
				</GroupListContainer>
			</div>
		)
	}
}

export default ServiceUseCaseList
