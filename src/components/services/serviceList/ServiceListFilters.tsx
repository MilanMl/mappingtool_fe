import React, { Component } from 'react'
import SearchInput from '../../shared/SearchInput'

interface Props {
	onFilter: any
}

export default class ServiceListFilters extends Component<Props> {
	constructor(props: any) {
		super(props)
		this.handleSearchChange = this.handleSearchChange.bind(this)
	}

	state = { filter: { name: null } }

	handleSearchChange(search: any) {
		let currentFilter = this.state.filter
		currentFilter.name = search
		this.setState({ filter: currentFilter })
		this.props.onFilter(currentFilter)
	}

	render() {
		return (
			<div className='service-list-filters'>
				<SearchInput
					placeholder={'search'}
					onSearch={this.handleSearchChange}
				/>
			</div>
		)
	}
}
