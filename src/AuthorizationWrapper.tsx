import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

export default function AuthorizationWrapper(allowedRoles: any) {
	return (WrappedComponent: any) => {
		class WithAuthorization extends Component {
			state = {
				user: {
					username: 'sadkj',
					role: 'loggedUser'
				},
				token: null,
				isLoggedIn: true
			}

			render() {
				// potreba doresit platnost tokenu - i po vyprseni this.state.isLoggedIn === true
				if (
					allowedRoles.includes(this.state.user.role) &&
					this.state.isLoggedIn
				) {
					return <WrappedComponent />
				} else {
					return <Redirect to='/login' />
				}
			}
		}

		const mapStateToProps = (state: object) => {
			return {}
		}

		const mapDispatchToProps = (dispatch: any) => {
			return {}
		}

		return connect(
			mapStateToProps,
			mapDispatchToProps
		)(WithAuthorization)
	}
}
