import React from 'react'
import { Row, Col } from 'reactstrap'
import './Footer_lowest.css'
import In from './images/in.svg'

function Footer_lowest () {
  return (
    <div>
      <Row>
        <Col md={6}>
          <a> &#169; victor India Marketing Pvt Limited</a>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <ul>
            <li>
              <a href='#'>
                <img src={In} style={{ width: '15px' }} />
                <span> India</span>
              </a>
            </li>

            <li>
              <a href='#'>Privacy Policy</a>
            </li>

            <li>
              <a href='#'>Terms and Conditions</a>
            </li>

            <li>
              <a href='#'>Cookies</a>
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  )
}

export default Footer_lowest
