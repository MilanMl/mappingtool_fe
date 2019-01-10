import {
	APP_INIT_COMPLETE,
	ADD_GLOBAL_ERROR,
	REMOVE_GLOBAL_ERROR
} from './actionTypes'

export function changeAppInit(bool) {
	return {
		type: APP_INIT_COMPLETE,
		complete: bool
	}
}

function addGlobalError(error) {
	return {
		type: ADD_GLOBAL_ERROR,
		error
	}
}

function removeGlobalError(error) {
	return {
		type: REMOVE_GLOBAL_ERROR,
		error
	}
}

export function sendGlobalError(error) {
	return async(dispatch) => {
		dispatch(addGlobalError(error))
		setTimeout(() => {
			dispatch(removeGlobalError(error))
		}, 5000)
	}
}
