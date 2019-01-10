import {
	APP_INIT_COMPLETE,
	ADD_GLOBAL_ERROR,
	REMOVE_GLOBAL_ERROR
} from '../actions/actionTypes'

const initState = {
	initComplete: false,
	appErrors: []
}

export function AppReducer(state = initState, action) {
	let currentErrors = []

	switch (action.type) {
		case APP_INIT_COMPLETE:
			return { ...state, initComplete: action.complete }
		case ADD_GLOBAL_ERROR:
			currentErrors = [...state.appErrors]
			currentErrors.push(action.error)

			return {
				...state,
				appErrors: currentErrors
			}
		case REMOVE_GLOBAL_ERROR:
			currentErrors = [...state.appErrors]
			currentErrors.splice(currentErrors.length - 1, 1)

			return {
				...state,
				appErrors: currentErrors
			}
		default:
			return state
	}
}
