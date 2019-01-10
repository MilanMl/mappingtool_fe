import React, { Component } from 'react'
import {
    Diagram,
    store as diagramStore,
    setEntities,
    setConfig,
    diagramOn,
  } from 'react-flow-diagram'

import model from './model-example'
import { config, customEntities } from './config-example'


export default class MappingFlow extends Component {
    render() {
        return <Diagram customEntities={customEntities} />
    }
}