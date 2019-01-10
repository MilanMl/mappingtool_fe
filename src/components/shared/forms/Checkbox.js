import React, { Component } from 'react';

export default class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
           current: this.props.checked
        }
        this.onChange = this.onChange.bind(this)
    }

    onChange(e) {
        e.target.value = e.target.checked
        this.props.onChange(e)
    }

    componentWillReceiveProps(nextProps) {
        let boolean
        (nextProps.checked === 'true') ? boolean = true : boolean = false
        this.setState({current: boolean})
    }

    getBoolean(value) {
        let boolean;
        (typeof(value) !== boolean) ? boolean = true : boolean = false
        this.setState({current: boolean})
        return boolean
    }

    render () {

        const {
            name,
            label,
            checked = false,
            disabled = false
        } = this.props

        return (
            <div className="form-input">
                <label className="checkbox-container">{label}
                    <input 
                        type="checkbox" 
                        name={name} 
                        defaultChecked={checked}
                        disabled={disabled} 
                        onChange={this.onChange} 
                    />
                    <div className="error-message"></div>
                    <span className="checkmark"></span>
                </label>
            </div>
        )
    }
}