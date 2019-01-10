import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

export default function ImportListItem(props) {

    return (
        <div className='group-item'> 
            <div className='group-item-col w-30'>{props.import.wsdlServiceName}</div>
            <div className='group-item-col w-10'>{props.import.version}</div>
            <div className='group-item-col w-20'>{props.import.createDate}</div>
            <div className='group-item-col w-20'>{props.import.operations.length}</div>
            <div className='group-item-col w-20 right'>
                <div className="list-actions">
                    <NavLink to={'/app/imports/' + props.import._id} className='list-action'>
                        <FontAwesomeIcon icon={ faEdit } />
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
