import {
	GET_SERVICE_DETAIL_FAILED,
	GET_SERVICE_DETAIL_LOADING,
	GET_SERVICE_DETAIL_SUCCESS,
	GET_SERVICE_MAPPING_SUCCESS,
	UPDATE_SERVICE_DETAIL_FAILED,
	UPDATE_SERVICE_DETAIL_SUCCESS,
	UPDATE_SERVICE_DETAIL_LOADING,
	ADD_SERVICE_PROPERTY_SUCCESS,
	EDIT_SERVICE_PROPERTY_SUCCESS,
	DELETE_SERVICE_PROPERTY_SUCCESS,
	SERVICE_DETAIL_INIT,
	ADD_SERVICE_MAPPING_SUCCESS,
	UPDATE_SERVICE_MAPPING_LOADING,
	UPDATE_SERVICE_MAPPING_FAILED,
	UPDATE_SERVICE_MAPPING_SUCCESS,
	IMPORT_PROPERTIES_SUCCESS,
	UNMARK_SERVICE_PROPERTY_SUCCESS
} from '../actions/actionTypes'

const initState = {
	service: {},
	isLoading: true,
	hasFailed: null,
	initComplete: false,
	mappingList: [],
	updateServiceLoading: false,
	updateServiceFailed: null,
	updateServiceMappingLoading: false,
	updateServiceMappingFailed: false
}

export function ServiceDetailReducer(state = initState, action) {
	switch (action.type) {
		case GET_SERVICE_DETAIL_SUCCESS:
			return { ...state, service: action.service }
		case GET_SERVICE_DETAIL_LOADING:
			return { ...state, isLoading: action.isLoading }
		case GET_SERVICE_DETAIL_FAILED:
			return { ...state, hasFailed: action.hasFailed }
		case ADD_SERVICE_PROPERTY_SUCCESS:
			return { ...state, service: action.service }
		case EDIT_SERVICE_PROPERTY_SUCCESS:
			return { ...state, service: action.service }
		case DELETE_SERVICE_PROPERTY_SUCCESS:
			return { ...state, service: action.service }
		case IMPORT_PROPERTIES_SUCCESS:
			return { ...state, service: action.service }
		case UNMARK_SERVICE_PROPERTY_SUCCESS:
			return { ...state, service: action.service }
		case GET_SERVICE_MAPPING_SUCCESS:
			return { ...state, mappingList: action.mappingList }
		case UPDATE_SERVICE_DETAIL_LOADING:
			return { ...state, updateServiceLoading: action.updateServiceLoading }
		case UPDATE_SERVICE_DETAIL_FAILED:
			return { ...state, updateServiceFailed: action.updateServiceFailed }
		case ADD_SERVICE_MAPPING_SUCCESS:
			const _newMapping = action.mapping
			let _editedMappingList = state.mappingList
			_editedMappingList.push(_newMapping)

			return { ...state, mappingList: _editedMappingList }

		case UPDATE_SERVICE_MAPPING_SUCCESS:
			let currentMappingList = [...state.mappingList]

			const mappingIndex = currentMappingList.findIndex((mapping) => {
				return mapping._id === action.mapping._id
			})

			currentMappingList.splice(mappingIndex, 1, action.mapping)

			return {
				...state,
				mappingList: currentMappingList
			}
		case UPDATE_SERVICE_MAPPING_LOADING:
			return {
				...state,
				updateServiceMappingLoading: action.updateServiceMappingLoading
			}
		case UPDATE_SERVICE_MAPPING_FAILED:
			return {
				...state,
				updateServiceMappingFailed: action.updateServiceMappingFailed
			}
		case UPDATE_SERVICE_DETAIL_SUCCESS:
			return { ...state, service: action.service }
		case SERVICE_DETAIL_INIT:
			return { ...state, initComplete: action.initComplete }
		default:
			return state
	}
}
