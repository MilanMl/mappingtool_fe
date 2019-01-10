import {
	GET_VERSION_LIST_FAILED,
	GET_VERSION_LIST_SUCCESS,
	GET_VERSION_LIST_LOADING
} from './actionTypes'
import { VersionService } from '../services/VersionService'

function getVersionListSuccessAction(versions) {
	return {
		type: GET_VERSION_LIST_SUCCESS,
		versions
	}
}

function getVersionListLoadingAction(bool) {
	return {
		type: GET_VERSION_LIST_LOADING,
		isLoading: bool
	}
}

export function getVersionListRequest(name) {
	return async(dispatch) => {
		dispatch(getVersionListLoadingAction(true))
		let versions = await VersionService.getVersionList()
		dispatch(getVersionListSuccessAction(versions))
		dispatch(getVersionListLoadingAction(false))
	}
}
