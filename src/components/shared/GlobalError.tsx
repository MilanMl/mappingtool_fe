import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendGlobalError } from '../../actions/appActions'

class GlobalError extends Component<any> {
	render() {
		const { errors } = this.props

		const errorsList = errors.map((error: any, index: any) => {
			return (
				<div className='global-error-message' key={index}>
					{error}
				</div>
			)
		})

		return <div className='global-error-container'>{errorsList}</div>
	}
}

const mapStateToProps = (state: any) => {
	return {
		errors: state.AppReducer.appErrors
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GlobalError)
