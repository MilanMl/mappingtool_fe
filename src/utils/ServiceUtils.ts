import { AppUtils } from './AppUtils'

export const ServiceUtils = (function() {
	return {
		createGroupPathsOptions: function(properties: any, group: string) {
			let pathOptions: any = []

			properties.map((property: any) => {
				if (
					property.group === group &&
					this.isNestingPropertyType(property.propertyType) &&
					!this.existsInPathOptions(pathOptions, property.path)
				) {
					pathOptions.push(
						AppUtils.createComboboxOption(property.path, property.path)
					)
				}
			})

			return pathOptions
		},

		existsInPathOptions: function(paths: any, value: string) {
			return paths.find((path: any) => {
				return path.value === value
			})
		},

		isNestingPropertyType: function(propertyType: string) {
			return propertyType === 'object' || propertyType === 'array'
				? true
				: false
		},

		setPropertyListItems: function(properties: any, subPropsVisible = true) {
			let items = []

			for (let i = 0; i < properties.length; i++) {
				items.push({
					subPropsVisible: this.isNestingPropertyType(
						properties[i].propertyType
					)
						? subPropsVisible
						: null,
					visible: true,
					property: properties[i]
				})
			}

			return items
		},

		findPropertyListItemById: function(properties: any, propertyId: string) {
			return properties.find((pItem: any) => {
				return pItem.property._id === propertyId
			})
		},

		findPropertyById(properties: any, propertyId: string) {
			return properties.find((property: any) => {
				return property._id === propertyId
			})
		}
	}
})()
