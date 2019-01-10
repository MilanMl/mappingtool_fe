import React, { Component } from 'react'

interface Props {
	count: number
	orderBy: string
	onChangeSort: any
}

const ListSortOptions: React.SFC<Props> = (props) => (
	<div className='list-sort-options'>
		<span>[{props.count}] - </span>
		<span className='order'>
			<p className='bold-option'>ŘADIT PODLE:</p> {props.orderBy} |
		</span>
		<span>
			<button type='button' onClick={(sort) => props.onChangeSort('asc')}>
				<span className='glyphicon glyphicon-triangle-top' />
			</button>
		</span>
		<span>
			<button type='button' onClick={(sort) => props.onChangeSort('desc')}>
				<span className='glyphicon glyphicon-triangle-bottom' />
			</button>
		</span>
	</div>
)

export default ListSortOptions
