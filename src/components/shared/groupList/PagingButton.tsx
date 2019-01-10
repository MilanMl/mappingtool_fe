import React from 'react'
import { Button } from '../forms/index'

interface Props {
	pageNumber: number
	onShowNextPage: any
	nextPage?: number
}

const PagingButton: React.SFC<Props> = (props) => (
	<div className='paging-container'>
		{props.pageNumber > 1 && (
			<Button
				name='page-button prev'
				label='<'
				type='button'
				onClick={props.onShowNextPage}
				outerClass='form-input no-margin padded inline'
				buttonClass='blue'
			/>
		)}
		{props.nextPage && (
			<Button
				name='page-button next'
				label='>'
				type='button'
				onClick={props.onShowNextPage}
				outerClass='form-input no-margin padded inline'
				buttonClass='blue'
			/>
		)}
	</div>
)

export default PagingButton
