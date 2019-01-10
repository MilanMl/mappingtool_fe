import React from 'react';
import GroupListContainer from '../../shared/groupList/GroupListContainer';
import GroupList from '../../shared/groupList/GroupList';
import ImportListItem from './ImportListItem';
import APP_CONFIG from '../../../../config/appConfig'

export default function ImportList(props) {

  const { loading, items } = props;

  const importListItem = items.map((item, index) => {
    return (
      <ImportListItem
        key={index}
        import={item}
        actions={APP_CONFIG.IMPORT_LIST_ACTIONS.IMPORT_LIST_ITEM_ACTIONS}
        onEdit={props.onEdit}
      />
    )
  })

  return (

    <GroupListContainer className={'import-list'} loading={loading} actions={APP_CONFIG.IMPORT_LIST_ACTIONS.IMPORT_LIST_GROUP_CONTAINER_ACTIONS}>
      <GroupList
        showHideButton={false}
        groupName={'Imports'}
        withHeader={true}
      >
        {importListItem}
      </GroupList>
    </GroupListContainer>

  )
}
