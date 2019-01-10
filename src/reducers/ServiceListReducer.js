import {
	GET_SERVICE_LIST_SUCCESS,
	GET_SERVICE_LIST_LOADING,
	GET_SERVICE_LIST_FAILED
} from '../actions/actionTypes'

const initState = {
	services: {},
	isLoading: true,
	hasFailed: null
}

export function ServiceListReducer(state = initState, action) {
	switch (action.type) {
		case GET_SERVICE_LIST_SUCCESS:
			return { ...state, services: action.services }
		case GET_SERVICE_LIST_LOADING:
			return { ...state, isLoading: action.isLoading }
		case GET_SERVICE_LIST_FAILED:
			return { ...state, hasFailed: action.hasFailed }
		default:
			return state
	}
}
