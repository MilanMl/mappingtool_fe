import axios from 'axios'
import ENV_CONFIG from '../config/envConfig'
import store from '../store/configureStore'
import { sendGlobalError } from '../actions/appActions'

const AuthorizedRequest = function(options) {
	// const token = getToken();
	const client = axios.create({
		baseURL: ENV_CONFIG.DEV.HOST
		//     headers: {'Authorization': 'Bearer '+ token}
	})

	const onSuccess = function(response) {
		return response.data
	}

	const onError = function(error) {
		console.error('Request Failed:', error.config)
		if (error.response) {
			console.error('Status:', error.response.status)
			console.error('Data:', error.response.data)
			console.error('Headers:', error.response.headers)

			store.dispatch(sendGlobalError(error.response.data.message))
		} else {
			console.error('Error Message:', error.message)
		}

		return Promise.reject(error.response || error.message)
	}

	return client(options)
		.then(onSuccess)
		.catch(onError)
}

export default AuthorizedRequest
