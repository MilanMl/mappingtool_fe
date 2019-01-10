import React, { Component } from 'react'
import ListPlusButton from './ListPlusButton'
import SmallSpinner from '../SmallSpinner'
import APP_CONFIG from '../../../config/appConfig'
import EmptyList from './EmptyList'

interface Props {
	actions: any
	loading: boolean
	title?: string | ''
	onAddItem: any
	showEmptyList?: boolean | false
	children: any | []
}

class GroupListContainer extends Component<Props> {
	renderContent() {
		const { actions = [], loading, title = null, onAddItem } = this.props

		return (
			<div>
				{actions.includes(APP_CONFIG.ACTION_TYPES.ADD) && (
					<ListPlusButton onAddItem={onAddItem} />
				)}
				<div className='box-header'>
					<div className='box-header-content '>
						{loading && <SmallSpinner />}
					</div>
					<div className='box-header-content '>
						<strong>{title}</strong>
					</div>
				</div>
				{this.props.children}
			</div>
		)
	}

	render() {
		const { showEmptyList = false, onAddItem, children = [] } = this.props

		return (
			<div className='box white'>
				{children.length === 0 && showEmptyList ? (
					<EmptyList onAddItem={onAddItem} />
				) : (
					this.renderContent()
				)}
			</div>
		)
	}
}

export default GroupListContainer
