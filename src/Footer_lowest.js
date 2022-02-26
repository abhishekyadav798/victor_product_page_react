import React from 'react'
import './Footer_lowest.css'
import In from './images/in.svg'

function Footer_lowest() {
  return (
    <div id='footer-lowest'>
        <ul>
        <li>
        <a href='#'>
            <img src={In} style={{width:"15px"}}/>
            <span>   India</span>
        </a>
        </li>

        <li>
        <a href='#'> 
            <span> Privacy Policy</span>
        </a>
        </li>

        <li>
        <a href='#'> 
            <span>   Terms and Conditions</span>
        </a>
        </li>

        <li>
        <a href='#'>
            <span>  Cookies</span>
        </a>
        </li>
        </ul>
        <div>&#169; victor India Marketing Pvt Limited</div>
    </div>
  )
}

export default Footer_lowest