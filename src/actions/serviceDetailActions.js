import {
	GET_SERVICE_DETAIL_LOADING,
	GET_SERVICE_DETAIL_SUCCESS,
	SERVICE_DETAIL_INIT,
	GET_SERVICE_MAPPING_SUCCESS,
	ADD_SERVICE_MAPPING_SUCCESS,
	UPDATE_SERVICE_MAPPING_SUCCESS,
	UPDATE_SERVICE_MAPPING_LOADING,
	UPDATE_SERVICE_DETAIL_SUCCESS,
	UPDATE_SERVICE_DETAIL_LOADING,
	ADD_SERVICE_PROPERTY_SUCCESS,
	DELETE_SERVICE_PROPERTY_SUCCESS,
	EDIT_SERVICE_PROPERTY_SUCCESS,
	IMPORT_PROPERTIES_SUCCESS,
	UNMARK_SERVICE_PROPERTY_SUCCESS
} from './actionTypes'
import { ServiceOperationService } from '../services/ServiceOperationService'

function getServiceDetailSuccess(service) {
	return {
		type: GET_SERVICE_DETAIL_SUCCESS,
		service
	}
}

function getServiceLoading(bool) {
	return {
		type: GET_SERVICE_DETAIL_LOADING,
		isLoading: bool
	}
}

function addServicePropertySuccess(service) {
	return {
		type: ADD_SERVICE_PROPERTY_SUCCESS,
		service
	}
}

function deleteServicePropertySuccess(service) {
	return {
		type: UNMARK_SERVICE_PROPERTY_SUCCESS,
		service
	}
}

function unmarkServicePropertySuccess(service) {
	return {
		type: DELETE_SERVICE_PROPERTY_SUCCESS,
		service
	}
}

function editServicePropertySuccess(service) {
	return {
		type: EDIT_SERVICE_PROPERTY_SUCCESS,
		service
	}
}

function getServiceMappingsSuccess(mappingList) {
	return {
		type: GET_SERVICE_MAPPING_SUCCESS,
		mappingList
	}
}

function addServiceMappingsSuccess(mapping) {
	return {
		type: ADD_SERVICE_MAPPING_SUCCESS,
		mapping: mapping
	}
}

function updateServiceMappingsSuccess(mapping) {
	return {
		type: UPDATE_SERVICE_MAPPING_SUCCESS,
		mapping: mapping
	}
}

function updateServiceMappingsLoading(bool) {
	return {
		type: UPDATE_SERVICE_MAPPING_LOADING,
		updateServiceMappingLoading: bool
	}
}

function updateServiceDetailSuccess(service) {
	return {
		type: UPDATE_SERVICE_DETAIL_SUCCESS,
		service
	}
}

function updateServiceLoading(bool) {
	return {
		type: UPDATE_SERVICE_DETAIL_LOADING,
		updateServiceLoading: bool
	}
}

function importPropertiesSuccess(service) {
	return {
		type: IMPORT_PROPERTIES_SUCCESS,
		service
	}
}

export function getServiceDetailRequest(serviceId) {
	return async(dispatch) => {
		dispatch(getServiceLoading(true))
		const response = await ServiceOperationService.getServiceDetailById(serviceId)
		dispatch(getServiceDetailSuccess(response))
		dispatch(getServiceLoading(false))
	}
}

export function getServiceMappingListRequest(serviceId) {
	return async(dispatch) => {
		const response = await ServiceOperationService.getServiceMappingList(serviceId)
		dispatch(getServiceMappingsSuccess(response.mappings))
	}
}

export function addServiceMappingRequest(serviceId, mapping, clonedMappingId) {
	console.log(clonedMappingId)
	return async(dispatch) => {
		dispatch(updateServiceMappingsLoading(true))
		console.log(clonedMappingId)
		let response
		if (!clonedMappingId) {
			response = await ServiceOperationService.addServiceMapping(serviceId,
				mapping)
		} else {
			response = await ServiceOperationService.cloneServiceMapping(serviceId,
				mapping,
				clonedMappingId)
		}

		dispatch(addServiceMappingsSuccess(response))
		dispatch(updateServiceMappingsLoading(false))
	}
}

export function updateServiceMappingRequest(serviceId, mapping) {
	return async(dispatch) => {
		dispatch(updateServiceMappingsLoading(true))
		const response = await ServiceOperationService.updateServiceMapping(serviceId,
			mapping)
		dispatch(updateServiceMappingsSuccess(response))
		dispatch(updateServiceMappingsLoading(false))
	}
}

export function addMappingDependency(serviceId,
	mappingId,
	dependencyServiceId) {
	return async(dispatch) => {
		dispatch(updateServiceMappingsLoading(true))
		const response = await ServiceOperationService.addMappingDependency(serviceId,
			mappingId,
			dependencyServiceId)
		dispatch(updateServiceMappingsSuccess(response))
		dispatch(updateServiceMappingsLoading(false))
	}
}

export function updateServiceRequest(service) {
	return async(dispatch) => {
		dispatch(updateServiceLoading(true))
		const response = await ServiceOperationService.updateService(service)
		dispatch(updateServiceDetailSuccess(response))
		dispatch(updateServiceLoading(false))
	}
}

export function importPropertiesRequest(serviceId, importObject) {
	return async(dispatch) => {
		dispatch(updateServiceLoading(true))
		const response = await ServiceOperationService.importProperties(serviceId,
			importObject)
		dispatch(importPropertiesSuccess(response))
		dispatch(updateServiceLoading(false))
	}
}

export function addServicePropertyRequest(serviceId, property) {
	return async(dispatch) => {
		dispatch(updateServiceLoading(true))
		const response = await ServiceOperationService.addServiceProperty(serviceId,
			property)
		dispatch(addServicePropertySuccess(response))
		dispatch(updateServiceLoading(false))
	}
}

export function editServicePropertyRequest(serviceId, property) {
	return async(dispatch) => {
		dispatch(updateServiceLoading(true))
		const response = await ServiceOperationService.editServiceProperty(serviceId,
			property)
		dispatch(editServicePropertySuccess(response))
		dispatch(updateServiceLoading(false))
	}
}

export function deleteServicePropertyRequest(serviceId, propertyId) {
	return async(dispatch) => {
		dispatch(updateServiceLoading(true))
		const response = await ServiceOperationService.deleteServiceProperty(serviceId,
			propertyId)
		dispatch(deleteServicePropertySuccess(response))
		dispatch(updateServiceLoading(false))
	}
}

export function unmarkServicePropertyRequest(serviceId, propertyId) {
	return async(dispatch) => {
		dispatch(updateServiceLoading(true))
		const response = await ServiceOperationService.unmarkPropertyChanges(serviceId,
			propertyId)
		dispatch(unmarkServicePropertySuccess(response))
		dispatch(updateServiceLoading(false))
	}
}

export function serviceDetailInitComplete(boolean) {
	return {
		type: SERVICE_DETAIL_INIT,
		initComplete: boolean
	}
}
