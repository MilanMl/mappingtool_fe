import AuthorizedRequest from './AuthorizedRequest'

export const DependencyService = (function() {
	return {
		getDependencyById: function(dependencyId) {
			return AuthorizedRequest({
				url: 'api/dependencies/' + dependencyId,
				method: 'GET'
			})
		},

		addPropertyMapping: function(dependencyId) {
			return AuthorizedRequest({
				url: 'api/dependencies/' + dependencyId + '/properties',
				method: 'POST'
			})
		},

		getPropertyMapping: function(dependencyId, propertyId) {
			return AuthorizedRequest({
				url: 'api/dependencies/' + dependencyId + '/properties/' + propertyId,
				method: 'GET'
			})
		},

		deletePropertyMapping: function(dependencyId, propertyId) {
			return AuthorizedRequest({
				url: 'api/dependencies/' + dependencyId + '/properties/' + propertyId,
				method: 'DELETE'
			})
		}
	}
})()
