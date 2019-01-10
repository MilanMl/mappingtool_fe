export default interface Property {
	_id?: string
	propertyName: string
	group: string
	propertyType: string
	mandatory: boolean
	path: string
	currentChange: string
	description: string
}
