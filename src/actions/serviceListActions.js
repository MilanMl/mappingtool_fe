import {
	GET_SERVICE_LIST_SUCCESS,
	GET_SERVICE_LIST_LOADING
} from './actionTypes'
import { ServiceOperationService } from '../services/ServiceOperationService'

function getServiceListSuccesAction(services) {
	return {
		type: GET_SERVICE_LIST_SUCCESS,
		services
	}
}

function getServiceListLoadingAction(bool) {
	return {
		type: GET_SERVICE_LIST_LOADING,
		isLoading: bool
	}
}

export function getServiceListRequest(services) {
	return async(dispatch) => {
		dispatch(getServiceListLoadingAction(true))
		let services = await ServiceOperationService.getServiceList()
		dispatch(getServiceListSuccesAction(services))
		dispatch(getServiceListLoadingAction(false))
	}
}
