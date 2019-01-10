export default interface Paging<T> {
	pageNumber: number
	pageSize: number
	nextPage?: number | undefined
	count: number
	items: Array<T>
}
