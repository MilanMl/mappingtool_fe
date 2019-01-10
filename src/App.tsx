import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { LoginPage, NotFoundPage } from './pages/'
import MappingTool from './MappingTool'
import AuthorizationWrapper from './AuthorizationWrapper'

export default class App extends Component {
	render() {
		return (
			<Switch>
				<Route path='/login' component={LoginPage} />
				<Route
					path='/app'
					component={AuthorizationWrapper(['loggedUser', 'admin'])(MappingTool)}
				/>
				<Route component={NotFoundPage} />
			</Switch>
		)
	}
}
