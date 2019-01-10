import React from 'react'

interface Props {
	onAddItem: any
}

const EmptyList: React.SFC<Props> = (props) => (
	<div className='empty-list'>
		<div className='empty-list-message'>
			<button
				className='empty-list-message-button'
				name='add-item'
				type='button'
				onClick={props.onAddItem}
			>
				Add new list item!
			</button>
		</div>
	</div>
)

export default EmptyList
