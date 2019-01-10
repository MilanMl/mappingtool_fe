import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { AppReducer } from '../reducers/AppReducer'
import { ServiceListReducer } from '../reducers/ServiceListReducer'
import { ServiceDetailReducer } from '../reducers/ServiceDetailReducer'
import { NavigationReducer } from '../reducers/NavigationRedurer'
import { VersionReducer } from '../reducers/VersionReducer'

const applicationReducers = combineReducers({
	AppReducer,
	ServiceListReducer,
	ServiceDetailReducer,
	NavigationReducer,
	VersionReducer
})

const initialState = {}
const store = createStore(
	applicationReducers,
	initialState,
	applyMiddleware(thunk)
)
export default store
