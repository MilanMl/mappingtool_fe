import React, { Component } from 'react';
import GroupListContainer from '../../shared/groupList/GroupListContainer';
import GroupList from '../../shared/groupList/GroupList';
import ImportOperationItem from './ImportOperationItem';

class ImportDetail extends Component {
  render() {

    const items = this.props.import.operations.map((operation, index) => {
      return <ImportOperationItem operation={operation} key={index} onShowDetail={this.props.onShowDetail} />
    })

    return (
      <div className="import-detail">
        <GroupListContainer>
          <GroupList
            withHeader={false}
          >
          {items}
          </GroupList>
        </GroupListContainer>
      </div>
    )
  }
}

export default ImportDetail
