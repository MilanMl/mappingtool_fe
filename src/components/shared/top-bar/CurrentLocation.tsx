import React from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

function CurrentLocation(props: any) {
	let finalCategory
	let finalDetail
	let finalSubcategory

	if (props.currentLocation.category) {
		finalCategory = props.currentLocation.category.toUpperCase()
	}

	if (props.currentLocation.detail) {
		finalDetail = (
			<span>
				<span className='current-location-div-icon'>
					<FontAwesomeIcon icon={faCaretRight} />
				</span>
				<span className='current-location-text'>
					{props.currentLocation.detail.toUpperCase()}
				</span>
			</span>
		)

		if (props.currentLocation.subcategory) {
			finalSubcategory = (
				<span>
					<span className='current-location-div-icon'>
						<FontAwesomeIcon icon={faCaretRight} />
					</span>
					<span className='current-location-text'>
						{props.currentLocation.subcategory.toUpperCase()}
					</span>
				</span>
			)
		}
	}

	return (
		<div className='current-location'>
			{finalCategory} {finalDetail} {finalSubcategory}
		</div>
	)
}

const mapStateToProps = (state: any) => {
	return {
		currentLocation: state.NavigationReducer.currentLocation
	}
}

export default connect(
	mapStateToProps,
	{}
)(CurrentLocation)
