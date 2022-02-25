import React from 'react'
import {Row,Col} from 'reactstrap'
import Scrollspy_component from './Scrollspy_component'
import Side_component_fixed from './Side_component_fixed'
import './Column_fixed_and_scroll.css'

function Column_fixed_and_scroll() {
  return (
    <div>
        <Row>
            <Col md="8" id='column_scroll'>
              <Scrollspy_component/>
            </Col>
            <Col md="4">
              <Side_component_fixed/>
            </Col>
        </Row>
        <Row>
         
          
          
        </Row>

    </div>
  )
}

export default Column_fixed_and_scroll