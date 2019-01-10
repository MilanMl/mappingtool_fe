import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import {
	NotFoundPage,
	DashboardPage,
	SettingsPage,
	ServiceListPage
} from './pages'

import ServiceDetailRouter from './pages/service-detail/ServiceDetailRouter'
import {
	NavigationList,
	Spinner,
	Footer,
	GlobalError
} from './components/shared/'
import TopBar from './components/shared/top-bar/TopBar'
import { getVersionListRequest } from './actions/versionActions'
import { changeAppInit } from './actions/appActions'

class MappingTool extends Component<any> {
	constructor(props: any) {
		super(props)
	}

	componentDidMount() {
		const initCalls = [this.props.getVersionsList()]

		Promise.all(initCalls).then(() => {
			this.props.changeAppInit(true)
		})
	}

	renderApp() {
		return (
			<div>
				<GlobalError />
				<Switch>
					<Route exact path='/app/' component={DashboardPage} />
					<Route path='/app/dashboard' component={DashboardPage} />
					<Route exact path='/app/services' component={ServiceListPage} />
					<Route
						path='/app/services/:serviceId'
						component={ServiceDetailRouter}
					/>
					<Route exact path='/app/imports' component={DashboardPage} />
					<Route path='/app/imports/:importId' component={DashboardPage} />
					<Route path='/app/graphs' component={DashboardPage} />
					<Route path='/app/settings' component={SettingsPage} />
					<Route component={NotFoundPage} />
				</Switch>
			</div>
		)
	}

	renderSpinner() {
		return <Spinner />
	}

	render() {
		return (
			<div className='container'>
				<NavigationList />
				<TopBar />
				<div className='main'>
					{this.props.appInitComplete ? this.renderApp() : this.renderSpinner()}
				</div>
				<Footer />
			</div>
		)
	}
}

const mapStateToProps = (state: any) => {
	return {
		versions: state.VersionReducer.versions,
		isLoading: state.VersionReducer.isLoading,
		appInitComplete: state.AppReducer.initComplete
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		getVersionsList: () => dispatch(getVersionListRequest()),
		changeAppInit: (bool: boolean) => dispatch(changeAppInit(bool))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MappingTool)
