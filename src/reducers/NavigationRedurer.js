import { CHANGE_NAVIGATION } from '../actions/actionTypes'

const initState = {
	currentLocation: {}
}

export function NavigationReducer(state = initState, action) {
	switch (action.type) {
		case CHANGE_NAVIGATION:
			return { ...state, currentLocation: action.currentLocation }
		default:
			return state
	}
}
