import {
	GET_VERSION_LIST_SUCCESS,
	GET_VERSION_LIST_LOADING,
	GET_VERSION_LIST_FAILED
} from '../actions/actionTypes'

const initState = {
	versions: [],
	isLoading: true,
	hasFailed: null
}

export function VersionReducer(state = initState, action) {
	switch (action.type) {
		case GET_VERSION_LIST_SUCCESS:
			return { ...state, versions: action.versions }
		case GET_VERSION_LIST_LOADING:
			return { ...state, isLoading: action.isLoading }
		case GET_VERSION_LIST_FAILED:
			return { ...state, hasFailed: action.hasFailed }
		default:
			return state
	}
}
