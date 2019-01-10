import React from 'react'

const PaginatedItem: React.SFC<{}> = (props) => (
	<div className='paginated-list-item'>{props.children}</div>
)

export default PaginatedItem
