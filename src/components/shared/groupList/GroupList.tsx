import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faPlus,
	faClone,
	faEdit,
	faTrash
} from '@fortawesome/free-solid-svg-icons'
import APP_CONFIG from '../../../config/appConfig'

interface Props {
	children?: any
	groupName?: string
	showHideButton?: boolean
	groupActions?: any
	groupActionsValue?: string
	showHeader?: boolean
	onGroupAction?: any
}

class GroupList extends Component<Props> {
	constructor(props: Props) {
		super(props)
		this.handleShowItems = this.handleShowItems.bind(this)
	}

	static defaultProps = {
		groupActions: [],
		showHideButton: false,
		showHeader: true,
		groupActionsValue: ''
	}

	state = {
		showItems: true
	}

	handleShowItems() {
		this.setState({ showItems: !this.state.showItems })
	}

	render() {
		const {
			groupName,
			showHideButton,
			groupActions,
			groupActionsValue,
			showHeader = true
		} = this.props

		const headerClass = showHeader ? 'group-header' : 'group-header hidden'

		const gActions = groupActions.map((action: any, index: number) => {
			let icon
			switch (action) {
				case APP_CONFIG.GROUP_ACTIONS.ADD:
					icon = faPlus
					break
				case APP_CONFIG.GROUP_ACTIONS.EDIT:
					icon = faEdit
					break
				case APP_CONFIG.GROUP_ACTIONS.CLONE:
					icon = faClone
					break
				case APP_CONFIG.GROUP_ACTIONS.DELETE:
					icon = faTrash
					break
				default:
					icon = faEdit
					break
			}

			return (
				<button
					className='list-action'
					key={index}
					type='button'
					value={groupActionsValue}
					name={action}
					onClick={this.props.onGroupAction}
				>
					<FontAwesomeIcon icon={icon} />
				</button>
			)
		})

		const itemsClassName = this.state.showItems
			? 'group-items show'
			: 'group-items hide'

		return (
			<div className='group-list'>
				<div className={headerClass}>
					<div className='group-item-col w-80'>
						{showHideButton && this.props.children.length > 0 ? (
							<button
								type='button'
								onClick={this.handleShowItems}
								className='show-switch-button'
							>
								{this.state.showItems ? '-' : '+'} {groupName}
							</button>
						) : (
							<div className='group-name'>{groupName}</div>
						)}
					</div>
					<div className='group-item-col w-20'>
						<div className='group-actions'>{gActions}</div>
					</div>
				</div>
				<div className={itemsClassName}>{this.props.children}</div>
			</div>
		)
	}
}

export default GroupList
