var search = {
	'search': 'my rest',
	'types': 'apiKey',
	'states': 'all',
	limit: 50,
	found: 3,
	'result': [{
			apiKey: {
				'id': 'seqgnxddzziqqhgjxgkqzjsvdf',
				'apiKey': '189bccfb-22e4-445f-a613-a992d52c90fb',
				'name': 'my rest',
				'validFrom': 1488495600000,
				softQuota: 18000,
				'hardQuota': 20000,
				useSignature: false,
				'state': 'ENABLED',
				mocking: false,
				'channel': 'UNKNOWN_CODEBOOK_VALUE_CDM',
				clientIpUsed: false,
				clientIpEnforced: false,
				tags: []
			},
			'role': 'PRIMARYOWNER'
		},
		{
			apiKey: {
				'id': 'bucyleikpjjpfbewxumjykurhc',
				'apiKey': 'be976be3-c53b-48eb-9580-6f0dc76bbdae',
				'name': 'ales rest',
				'validFrom': 1489017600000,
				softQuota: 18000,
				hardQuota: 20000,
				useSignature: false,
				'state': 'ENABLED',
				mocking: false,
				'channel': 'UNKNOWN_CODEBOOK_VALUE_CDM',
				'clientIpUsed': false,
				clientIpEnforced: false,
				'tags': []
			},
			'role': 'PRIMARYOWNER'
		},
		{
			apiKey: {
				'id': 'wicimctrdyidjpwqsopxwztuab',
				'apiKey': 'a3711ba9-a6ed-488f-918a-1ea5d2bfd5d0',
				'name': 'mira rest',
				'validFrom': 1488841200000,
				softQuota: 18000,
				hardQuota: 20000,
				useSignature: false,
				'state': 'ENABLED',
				mocking: false,
				'channel': 'UNKNOWN_CODEBOOK_VALUE_CDM',
				clientIpUsed: false,
				clientIpEnforced: false,
				tags: []
			},
			'role': 'PRIMARYOWNER'
		}
	]
}

var apiKeyDetail = [
	{
		'person': {
			'id': 'ysuumkknbdyqfhfvdxafnadphd',
			'state': 'ENABLED',
			'alias': 'MilanMladek',
			'corsEnabled': false,
			'email': 'mmladek@csas.cz',
			'firstName': 'Milan',
			'lastName': 'Mládek'
		},
		'role': 'PRIMARYOWNER',
		'link': 'PRIMARYOWNER'
	},
	{
		'backend': {
			'id': 'awdfohmhfljhe1rlc2hljwdvad',
			'name': 'Calculators',
			'baseUrl': 'calculators',
			'version': 'v1',
			'serviceUrl': 'http://uat1-inet-admin.vs.csin.cz/calculator-apps-1/',
			altUrls: [],
			'publishUris': [
				'/v1/calculators'
			],
			'idpId': 'di4kmbzujdjqtityco1fcknx5g',
			'state': 'ENABLED',
			'tags': [],
			'issues': {
				'mockUrl': 'Mock URL is empty.'
			}
		},
		'role': 'POWERUSER'
	},
	{
		backend: {
			'id': '101',
			'name': 'Exchange and Gold rates',
			'baseUrl': 'rates',
			'version': 'v1',
			'serviceUrl': 'http://uat1-inet-extservices.vs.csin.cz/exchangerates-public-1/api',
			'altUrls': [],
			'publishUris': [
				'/v1/rates'
			],
			'docUrl': 'http://docs.ext0csasrates.apiary.io/#',
			'state': 'ENABLED',
			tags: [],
			'issues': {
				'mockUrl': 'Mock URL is empty.'
			}
		},
		'role': 'POWERUSER'
	},
	{
		'backend': {
			'id': 'g3f3fxaszvisqjlau2bmfx2211',
			'name': 'MID Data scenarios - event',
			'baseUrl': 'scenarios',
			'version': 'v1',
			'serviceUrl': 'http://uat1-inet-services-s1.vs.csin.cz:5001/scenarios-1/api/scenarios',
			altUrls: [],
			'publishUris': [
				'/v1/scenarios'
			],
			'docUrl': 'http://docs.ext0csasscenarioseventsv1.apiary.io/#',
			'idpId': '1',
			'state': 'ENABLED',
			tags: [],
			'mockUrl': 'http://private-9f566-ext0csasscenarioseventsv1.apiary-mock.com/webapi/api/'
		},
		'role': 'POWERUSER'
	},
	{
		'backend': {
			'id': 'esbyvyr24vibtimg1gqkjypo45',
			'name': 'OHYPO-FES',
			'baseUrl': 'mortgages',
			'version': 'v1',
			'serviceUrl': 'http://brasil-int.csint.cz/ohypo-fes-war/api/mortgages',
			'altUrls': [],
			'publishUris': [
				'/v1/mortgages'
			],
			'docUrl': 'http://docs.ext0csasmortgages.apiary.io/',
			'idpId': '1',
			'state': 'ENABLED',
			'tags': [],
			issues: {
				'mockUrl': 'Mock URL is empty.'
			}
		},
		'role': 'POWERUSER'
	},
	{
		'backend': {
			'id': '110',
			'name': 'Online Loans',
			'baseUrl': 'onlineloans',
			'version': 'v2',
			'serviceUrl': 'http://uat1-inet-extservices.vs.csin.cz/onlineloans-2/api',
			altUrls: [],
			'publishUris': [
				'/v2/onlineloans'
			],
			'docUrl': 'http://docs.restauraceext.apiary.io/#onlineloans',
			'state': 'ENABLED',
			tags: [],
			issues: {
				'mockUrl': 'Mock URL is empty.'
			}
		},
		'role': 'POWERUSER'
	},
	{
		'backend': {
			'id': '107',
			'name': 'Places v2',
			'baseUrl': 'places',
			'version': 'v2',
			'serviceUrl': 'http://uat1-inet-extservices.vs.csin.cz/places-2/api',
			altUrls: [],
			'publishUris': [
				'/v2/places'
			],
			'docUrl': 'http://docs.restauraceext.apiary.io/#places',
			'state': 'ENABLED',
			tags: [],
			'issues': {
				'mockUrl': 'Mock URL is empty.'
			}
		},
		'role': 'POWERUSER'
	},
	{
		'backend': {
			'id': '102',
			'name': 'Transparent Accounts',
			'baseUrl': 'transparentAccounts',
			'version': 'v2',
			'serviceUrl': 'http://uat1-inet-extservices.vs.csin.cz/transparentaccounts-2/api',
			altUrls: [],
			'publishUris': [
				'/v2/transparentAccounts'
			],
			'docUrl': 'http://docs.restauraceext.apiary.io/#transparentaccounts',
			'state': 'ENABLED',
			'tags': [],
			'issues': {
				'mockUrl': 'Mock URL is empty.'
			}
		},
		'role': 'POWERUSER'
	},
	{
		'backend': {
			'id': '131',
			'name': 'bondrates',
			'baseUrl': 'bondrates',
			'version': 'v1',
			'serviceUrl': 'http://uat1-inet-extservices.vs.csin.cz/bondrates-1/api',
			'altUrls': [],
			'publishUris': [
				'/v1/bondrates'
			],
			'docUrl': 'http://docs.ext0csasrates.apiary.io/#reference/bond-rates/gets-list-of-all-bonds',
			'state': 'ENABLED',
			'tags': [],
			issues: {
				'mockUrl': 'Mock URL is empty.'
			}
		},
		'role': 'POWERUSER'
	},
	{
		'backend': {
			'id': 'e4atnwjxo2jnfi4uvhuanykznq',
			'name': 'cms v2',
			'baseUrl': 'cms',
			'version': 'v2',
			'serviceUrl': 'http://uat1-inet-extservices.vs.csin.cz/contents-ext-2/api',
			'altUrls': [],
			'publishUris': [
				'/v2/cms'
			],
			'docUrl': 'https://ext0csascontentv2.docs.apiary.io',
			'idpId': '1',
			'state': 'ENABLED',
			tags: [],
			issues: {
				'mockUrl': 'Mock URL is empty.'
			}
		},
		'role': 'POWERUSER'
	},
	{
		'backend': {
			'id': 'aj5jqrei0qj40lbiwxfufpkpek',
			'name': 'cmsi v2',
			'baseUrl': 'cmsi',
			'version': 'v2',
			'serviceUrl': 'http://uat1-inet-intservices.vs.csin.cz/contents-int-2/api',
			'altUrls': [],
			'publishUris': [
				'/v2/cmsi'
			],
			'docUrl': 'http://int1csascontentv2.docs.apiary.io ',
			'idpId': '1',
			'state': 'ENABLED',
			'tags': [],
			'issues': {
				'mockUrl': 'Mock URL is empty.'
			}
		},
		'role': 'POWERUSER'
	},
	{
		'backend': {
			'id': '132',
			'name': 'downloads',
			'baseUrl': 'downloads',
			'version': 'v1',
			'serviceUrl': 'http://uat1-inet-extservices.vs.csin.cz/downloads-1/api',
			'altUrls': [],
			'publishUris': [
				'/v1/downloads'
			],
			'docUrl': 'http://docs.ext1csascontent.apiary.io/#reference/downloads',
			'state': 'ENABLED',
			'tags': [],
			issues: {
				'mockUrl': 'Mock URL is empty.'
			}
		},
		'role': 'POWERUSER'
	},
	{
		'backend': {
			'id': '126',
			'name': 'pension',
			'baseUrl': 'pension',
			'version': 'v1',
			'serviceUrl': 'http://uat1-inet-inet.vs.csin.cz/pension-1/api',
			'altUrls': [],
			'publishUris': [
				'/v1/pension'
			],
			'docUrl': 'http://docs.ext1csascalculators.apiary.io/#reference/pension-funds-base-services',
			'idpId': 'di4kmbzujdjqtityco1fcknx5g',
			'state': 'ENABLED',
			tags: [],
			issues: {
				'mockUrl': 'Mock URL is empty.'
			}
		},
		'role': 'POWERUSER'
	},
	{
		'backend': {
			'id': 'auidkulnzrilt000s4gc4supt2',
			'name': 'qmatic_v2',
			'baseUrl': 'qmatic',
			'version': 'v2',
			'serviceUrl': 'http://uat1-inet-extservices.vs.csin.cz/queuing-1/api/qmatic',
			'altUrls': [],
			'publishUris': [
				'/v2/qmatic'
			],
			'docUrl': 'http://docs.csaswebapi.apiary.io/#qmatic',
			'state': 'ENABLED',
			tags: [],
			'issues': {
				'mockUrl': 'Mock URL is empty.'
			}
		},
		'role': 'POWERUSER'
	},
	{
		'backend': {
			'id': 'ae2flbeg51isnlpcjy2vqci4nb',
			'name': 'uniform V3',
			'baseUrl': 'uniform',
			'version': 'v3',
			'serviceUrl': 'http://uat1-inet-extservices.vs.csin.cz/uniform-3/api',
			'altUrls': [],
			'publishUris': [
				'/v3/uniform'
			],
			'state': 'ENABLED',
			tags: [],
			issues: {
				'mockUrl': 'Mock URL is empty.'
			}
		},
		'role': 'POWERUSER'
	}
]

export const WebapiService = (function() {
	return {
		searchApiKey: function(searchQuery) {
			return search
		},

		getApiKeyLinks: function(apiKeyId) {
			return apiKeyDetail
		},

		getBackendDetail: function(backendId) {
			return 666
		}
	}
})()
