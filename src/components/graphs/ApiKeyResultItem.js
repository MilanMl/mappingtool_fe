import React, { Component } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import APP_CONFIG from '../../../config/appConfig'

export default class ApiKeyResultItem extends Component {

    render() {
        const {
            apiKey,
            onAddToGraph,
            onRemove,
            actions
        } = this.props

        let itemActions = actions.map((action) => {

            let icon = null
            let propFunction = null

            switch(action) {
                case APP_CONFIG.ACTION_TYPES.ADD: 
                    icon = faPlus
                    propFunction = onAddToGraph
                break
                case APP_CONFIG.ACTION_TYPES.DELETE: 
                    icon = faTrash
                    propFunction = onRemove
                break
            }

            return <button className="list-action" value={apiKey.id} onClick={propFunction}><FontAwesomeIcon icon={icon} /></button>
        })

        return (
            <div className='group-item'> 
                <div className='group-item-col w-80'><strong>{apiKey.name}</strong> {apiKey.apiKey}</div>
                <div className='group-item-col w-20 right'>
                    <div className="list-actions">
                        {itemActions}
                    </div>
                </div>
            </div>
        )
    }
}