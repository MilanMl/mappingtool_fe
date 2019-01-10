export const AppUtils = (function() {
	return {
		createComboboxOption: function(name, value) {
			return {
				name: name,
				value: value
			}
		},

		createOptionsFromObject: function(optionsObject) {
			let options = []

			for (let optionName in optionsObject) {
				options.push({
					name: optionsObject[optionName],
					value: optionsObject[optionName]
				})
			}

			return options
		},

		createOptionsFromArray: function(optionsArray) {
			let options = []

			options = optionsArray.map((option) => {
				return {
					name: option,
					value: option
				}
			})

			return options
		},

		createNavigationTree: function(category, detail, subcategory) {
			return {
				category: category,
				detail: detail,
				subcategory: subcategory
			}
		},

		createComboboxVersionsOptions: function(versionsResponse) {
			return versionsResponse.map((version) => {
				return this.createComboboxOption(version.name, version._id)
			})
		}
	}
})()
