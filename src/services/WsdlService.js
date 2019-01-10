import AuthorizedRequest from './AuthorizedRequest'

export const WsdlService = (function() {
	return {
		getWsdlImportList: function(paging, filter, order, sort) {
			let finalRoute

			if (paging) {
				finalRoute =
					'pageNumber=' + paging.pageNumber + '&pageSize=' + paging.pageSize
			}

			return AuthorizedRequest({
				url: 'api/wsdl-imports/?' + finalRoute,
				method: 'GET'
			})
		},

		getWsdlImportDetail: function(wsdlImportId) {
			return AuthorizedRequest({
				url: 'api/wsdl-imports/' + wsdlImportId,
				method: 'GET'
			})
		},

		getTransformedService: function(wsdlId, operationId) {
			return AuthorizedRequest({
				url:
					'api/wsdl-imports/' +
					wsdlId +
					'/operations/' +
					operationId +
					'/transformed',
				method: 'GET'
			})
		}
	}
})()
