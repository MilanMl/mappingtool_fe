import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

interface Props {
	placeholder?: string
	onSearch: any
}

class SearchInput extends Component<Props> {
	constructor(props: any) {
		super(props)
		this.handleSearchChange = this.handleSearchChange.bind(this)
		this.handleKeyPress = this.handleKeyPress.bind(this)
		this.handleButtonClick = this.handleButtonClick.bind(this)
	}

	state = { currentSearch: '' }

	handleKeyPress(e: any) {
		if (e.key === 'Enter') {
			this.props.onSearch(this.state.currentSearch)
		}
	}

	handleSearchChange(e: any) {
		this.setState({ currentSearch: e.target.value })
	}

	handleButtonClick() {
		this.props.onSearch(this.state.currentSearch)
	}

	render() {
		let { placeholder } = this.props

		return (
			<div className='box right'>
				<div className='search-container'>
					<input
						type='text'
						className='search-input'
						name='search'
						placeholder={placeholder}
						value={this.state.currentSearch}
						onKeyPress={this.handleKeyPress}
						onChange={this.handleSearchChange}
					/>
					<button className='search-button' onClick={this.handleButtonClick}>
						<FontAwesomeIcon icon={faSearch} />
					</button>
				</div>
			</div>
		)
	}
}

export default SearchInput
