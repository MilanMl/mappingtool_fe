import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeNavigation } from '../../actions/sharedActions'
import { AppUtils } from '../../utils/AppUtils'
import { Service } from '../../models'

interface Props {
	service: Service
	changeNavigation: any
}

class ServiceAttachmentsPage extends Component<Props> {
	componentDidMount() {
		this.props.changeNavigation(
			AppUtils.createNavigationTree(
				'services',
				this.props.service.serviceName,
				'attachments'
			)
		)
	}

	render() {
		return <div className='service-detail-container'>sad</div>
	}
}

const mapStateToProps = (state: any) => {
	return {
		service: state.ServiceDetailReducer.service
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		changeNavigation: (currentLocation: any) =>
			dispatch(changeNavigation(currentLocation))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ServiceAttachmentsPage)
