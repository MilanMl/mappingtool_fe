import React, { Component } from 'react';
import DICTIONARY from '../../../../config/dictionary';
import SearchInput from '../../shared/SearchInput';

export default class ImportListFilters extends Component {
    constructor(props) {
        super(props);
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    handleSearchChange(search) {
        console.log(search)
    }

    render() {
        return (
            <div className='import-list-filters'>
                <SearchInput placeholder={DICTIONARY.EN.INPUTS.SEARCH_INPUT} onSearch={this.handleSearchChange}/>
            </div>
        )
    }
}