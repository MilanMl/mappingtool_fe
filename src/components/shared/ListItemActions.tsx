import React from 'react'
import { NavLink } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export function ListItemAction(props: any) {
    return(
        <button name={props.name} value={props.value} className='list-action' onClick={props.onClick}>
            <FontAwesomeIcon icon={props.icon} />
        </button>
    )
}

export function ListItemRedirectAction(props: any) {
    return(
        <NavLink to={props.link} className='list-action'>
            <FontAwesomeIcon icon={props.icon} />
        </NavLink>
    )
}

