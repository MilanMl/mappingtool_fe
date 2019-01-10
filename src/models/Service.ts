import Property from './Property'
import { Version } from '.'

export default interface Service {
	_id: string
	active: boolean
	serviceName: string
	serviceType: string
	createdAt: string
	lastModifiedAt: string
	userDefined: boolean
	properties: Property[]
	version: Version
}
