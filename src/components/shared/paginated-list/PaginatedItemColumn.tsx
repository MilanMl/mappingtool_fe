import React from 'react'

interface Props {
	width: number
	actions?: any
}

const PaginatedItemColumn: React.SFC<Props> = function(props) {
	const widthStyle = props.width ? 'w-' + props.width : ''
	const actions = props.actions ? 'actions' : ''
	const cssClass = 'item-col ' + widthStyle + ' ' + actions

	return <div className={cssClass}>{props.children}</div>
}

export default PaginatedItemColumn
