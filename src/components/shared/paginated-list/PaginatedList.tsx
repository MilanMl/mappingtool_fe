import React from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import Spinner from '../Spinner'
import ListPlusButton from '../groupList/ListPlusButton'

interface Props {
	addButton: boolean
	onAddAction: any
	headerText: string
	loadNextPage: any
	nextPage?: number | null
}

const PaginatedList: React.SFC<Props> = (props) => (
	<div className='box white'>
		{props.addButton && <ListPlusButton onAddItem={props.onAddAction} />}
		<div className='box-header'>
			<div className='box-header-content'>{props.headerText}</div>
		</div>
		<div className='paginated-list'>
			<InfiniteScroll
				pageStart={0}
				loadMore={props.loadNextPage}
				hasMore={props.nextPage ? true : false}
				loader={<Spinner />}
				useWindow={false}
			>
				{props.children}
			</InfiniteScroll>
		</div>
	</div>
)

export default PaginatedList
