import React, { Component } from 'react';
import Combobox from '../../shared/forms/Combobox';

export default class ServiceMappingFilter extends Component {

    constructor(props) {
        super(props) 
        this.getServiceMappingListOptions = this.getServiceMappingListOptions.bind(this)
        this.getDependencyServiceListOptions = this.getDependencyServiceListOptions.bind(this)
        this.handleShowDependencyService = this.handleShowDependencyService.bind(this)
    }

    state = {
        mappingList: this.props.mappings,
        currentMappingId: '',
        currentDependencyServiceId: '',
        currentDependencyServiceList: null,
        mappingListOptions: this.getServiceMappingListOptions(),
        dependencyServiceListOptions: []
    }

    getDependencyServiceListOptions(e) {
        const mappingId = e.target.value
        const mapping = this.state.mappingList.find((mapping) => {
            return mapping._id === mappingId
        })

        const options = mapping.dependencyServices.map((dependencyService) => {
            return {
                name: dependencyService.service.serviceName,
                value: dependencyService._id
            }
        })

        this.setState({
            dependencyServiceListOptions: options,
            currentMappingId: mappingId
        })
    }

    handleShowDependencyService(e) {
        const dependencyId = e.target.value
        this.props.onShowMappingDetail(dependencyId)
        this.setState({
            currentDependencyServiceId: dependencyId
        })
    }

    getServiceMappingListOptions() {
        let list = this.props.mappings.map((mapping) => {
            return {
                name: mapping.mappingName,
                value: mapping._id
            }
        })

        return list
    }

    render() {
        return (
            <div className='service-mapping-filter'>
                <Combobox 
                    outerClass={'form-input inline'} 
                    name='mapping-list' 
                    label='Mapping list'
                    value={this.state.currentMappingId} 
                    options={this.state.mappingListOptions} 
                    onChange={this.getDependencyServiceListOptions} 
                />
                <Combobox 
                    outerClass={'form-input inline'} 
                    name='dependency-service-list' 
                    label='Dependency services' 
                    value={this.state.currentDependencyServiceId}
                    options={this.state.dependencyServiceListOptions} 
                    onChange={this.handleShowDependencyService} 
                />
            </div>
        )
    }
}