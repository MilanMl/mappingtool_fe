import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

export default function ImportOperationItem(props) {

    return (
        <div className='group-item'> 
            <div className='group-item-col w-80'>{props.operation.operationName}</div>
            <div className='group-item-col w-20 right'>
                <div className="list-actions">
                    <button className="list-action" value={props.operation._id} onClick={props.onShowDetail}><FontAwesomeIcon icon={faEdit} /></button>
                </div>
            </div>
        </div>
    )
}
