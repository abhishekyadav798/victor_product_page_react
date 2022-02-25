import React from 'react'
import {Row,Col,Button} from 'reactstrap'
import './Side_component_fixed.css'

function Side_component_fixed() {
  return (
    <div id='right'>
        <Row>
            <Col>
            <a>Men Running</a>
            </Col>
        </Row>
        <Row>
            <Col>
            <h4>VICTOR qUICK SHOES</h4>
            <a style={{color:"grey"}}> MRP: $ <span style={{textDecoration:"line-through"}}>4999.00</span></a>
            <a style={{fontWeight:"600",color:"red"}}>  2499.50</a><br/>
            <a style={{color:"grey"}}>(Inclusive of all taxes)</a>
            </Col>
        </Row>
        <Row>
            <Col>
            <h6>Available sizes</h6>
            {' '}
            <Button outline>
             6
            </Button>{' '}
            <Button outline>
             7
            </Button>{' '}
            <Button outline>
             8
            </Button>{' '}
            <Button outline>
             9
            </Button>{' '}
            <Button outline>
             10
            </Button>{' '}
            <Button outline>
             11
            </Button>{' '}
            </Col>
        </Row>
        <br/>
        <Row>
            <Col>
            {/* <Button color="primary" > Add to Cart </Button> */}
            <a id="button-style" >ADD TO BAG</a>
            </Col>
        </Row>


    </div>
  )
}

export default Side_component_fixed