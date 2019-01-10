import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../../shared/Spinner';

export default class ServiceMappingPropertyDetail extends Component {

    static propTypes = {
        property: PropTypes.object,
        loading: PropTypes.bool.isRequired
    }

    render () {

        const { 
            property, 
            loading 
        } = this.props

        return (
            <div className='service-mapping-property-detail'>
                <div className='box white'>
                    <div className='box-header'>
                        {property.path} <strong>{property.propertyName}</strong>
                    </div>
                    <div className='box-content'>
                        {
                            (loading) ? <Spinner /> : "666" 
                        }
                    </div>
                </div>
            </div>
        )
    }
}