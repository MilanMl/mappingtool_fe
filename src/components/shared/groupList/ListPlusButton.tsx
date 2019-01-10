import React from 'react'

interface Props {
	onAddItem: any
}

const ListPlusButton: React.SFC<Props> = (props) => (
	<div className='box-list-add-button'>
		<button type='button' onClick={props.onAddItem} className='plus-button'>
			+
		</button>
	</div>
)

export default ListPlusButton
