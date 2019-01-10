import AuthorizedRequest from './AuthorizedRequest'

export const VersionService = (function() {
	return {
		getVersionList: function(name = null, future = false) {
			return AuthorizedRequest({
				url: 'api/versions',
				method: 'GET'
			})
		}
	}
})()
