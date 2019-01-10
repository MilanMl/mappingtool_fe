import AuthorizedRequest from './AuthorizedRequest'

export const ServiceOperationService = (function() {
	return {
		getServiceList: function(paging, filter, order, sort) {
			let finalRoute

			if (paging) {
				finalRoute =
					'pageNumber=' + paging.pageNumber + '&pageSize=' + paging.pageSize
			}

			if (filter) {
				finalRoute = finalRoute + '&name=' + filter.name
			}

			return AuthorizedRequest({
				url: 'api/services?' + finalRoute,
				method: 'GET'
			})
		},

		addService: function(service) {
			return AuthorizedRequest({
				url: 'api/services',
				method: 'POST',
				data: service
			})
		},

		updateService: function(service) {
			return AuthorizedRequest({
				url: 'api/services/' + service._id,
				method: 'PUT',
				data: service
			})
		},

		getServiceDetailById: function(serviceId) {
			return AuthorizedRequest({
				url: 'api/services/' + serviceId,
				method: 'GET'
			})
		},

		getServiceMappingList: function(serviceId) {
			return AuthorizedRequest({
				url: 'api/services/' + serviceId + '/mappings',
				method: 'GET'
			})
		},

		addServiceMapping: function(serviceId, mapping) {
			return AuthorizedRequest({
				url: 'api/services/' + serviceId + '/mappings',
				method: 'POST',
				data: mapping
			})
		},

		cloneServiceMapping: function(serviceId, mapping, mappingId) {
			return AuthorizedRequest({
				url: 'api/services/' + serviceId + '/mappings/' + mappingId + '/clone',
				method: 'POST',
				data: mapping
			})
		},

		updateServiceMapping: function(serviceId, mapping) {
			return AuthorizedRequest({
				url: 'api/services/' + serviceId + '/mappings/' + mapping._id,
				method: 'PUT',
				data: mapping
			})
		},

		addMappingDependency: function(serviceId, mappingId, dependencyServiceId) {
			const dependencyService = {
				service: dependencyServiceId
			}

			return AuthorizedRequest({
				url:
					'api/services/' +
					serviceId +
					'/mappings/' +
					mappingId +
					'/dependencies',
				method: 'POST',
				data: dependencyService
			})
		},

		importProperties: function(serviceId, importObject) {
			try {
				importObject.exampleObject = JSON.parse(importObject.exampleObject)
			} catch (e) {
				console.log('Le fu')
			}

			return AuthorizedRequest({
				url: 'api/services/' + serviceId + '/properties/import',
				method: 'POST',
				data: importObject
			})
		},

		addServiceProperty: function(serviceId, property) {
			return AuthorizedRequest({
				url: 'api/services/' + serviceId + '/properties',
				method: 'POST',
				data: property
			})
		},

		editServiceProperty: function(serviceId, property) {
			return AuthorizedRequest({
				url: 'api/services/' + serviceId + '/properties/' + property._id,
				method: 'PUT',
				data: property
			})
		},

		deleteServiceProperty: function(serviceId, propertyId) {
			return AuthorizedRequest({
				url: 'api/services/' + serviceId + '/properties/' + propertyId,
				method: 'DELETE'
			})
		},

		unmarkPropertyChanges: function(serviceId, propertyId) {
			return AuthorizedRequest({
				url:
					'api/services/' + serviceId + '/properties/' + propertyId + '/unmark',
				method: 'PUT'
			})
		}
	}
})()
