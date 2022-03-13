import React from 'react'
import {Row,Col,Card,Table,UncontrolledCarousel,Button} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Single_component_hide_and_scroll.css'
import Shoe1 from './images/shoe1.jpg'
import Shoe2 from './images/shoe2.jpeg'
import Shoe3 from './images/shoe3.jpeg'
import Shoe7 from './images/shoe7.jpeg' 
import Shoe8 from './images/shoe8.jpeg'
import Shoe10 from './images/shoe10.jpeg'
import Shoe12 from './images/shoe12.jpeg'
import Track from './images/track.jpeg'
import Purse from './images/purse.jpeg'
import Suits from './images/suits.jpeg' 
import Pro from './images/pro.jpeg'

const items = [
    {
      src:
        Shoe1,
      key: "1",
    },
    {
      src:
        Shoe2,
      key: "2",
    },
    {
      src:
        Shoe3,
      key: "3",
    },
  ];


function Single_component_hide_and_scroll() {
  return (
    <div>
        <Row>
            <Col md="8" id='column_scroll'>
           <div id='my-style'>
          <Row id='my-row-style' >
           <Col md="12" >
           <UncontrolledCarousel items={items}  interval={null}/>
          </Col>
         
          </Row>
        <Row id='gallery-row'>
            
            <Col>
            <a href='#'>Gallery</a>
           
            </Col>
            <Col>
            <a href='#'>Description</a>
            </Col>
            <Col>
            <a href='#'>Details</a>
            </Col>
            <Col>
            <a href='#'>Reviews</a>
            </Col>

        </Row>
        <Row id='my-row-style'>
            <Col md="6">
            <h3>VICTOR qUICK SHOES</h3>
            <h5 style={{fontStyle:"italic"}}>RUNNING SHOES FOR SPEED AND STABILITY.</h5>
            <a></a>
            <a>Eliminate the noise. As you push yourself, all you can think about is your movement and your breath.
                 And that you're doing it. The rest falls away. Move fast. Move slow. Just move. And do it in
                  these adidas running shoes. They're lightweight, cushioned and ready to roll.</a>
            </Col>
            <Col md="6">
            <img src={Shoe1}  style={{width:"390px",height:"300px"}}/>
            </Col>
           
        </Row>
        <Row>
            <Col>
            <h3>SPECIFICATIONS</h3>
            </Col>
        </Row>
        <Row id='my-row-style'>
            <Col md="6">
                <ul id='specification'>
                    <li id='my_list'>Regular fit</li><br/>
                    <li id='my_list'>Lace Closure</li>
                    <li id='my_list'>Textile upper</li>
                    <li id='my_list'>Stable</li>
                    <li id='my_list'>Jogging Shoe</li>
                </ul>

            </Col>
            <Col md="6">
            <ul id='specification'>
                <li id='my_list'>Text lining and victor Quick</li>
                <li id='my_list'>Elastic and shock absorber sole</li>
                <li id='my_list'>color:Black</li>
                <li id='my_list'>Product code:FX2343</li>
                
            </ul>
            </Col>
        </Row>
        <Row>
        <Table bordered={true}>
                <thead >
                    <tr>
                        <th className={"w-50"} dark>Attribute</th>
                        <th className={"w-50"}>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Name and Address</td>
                        <td>victor india Marketing Private ltd. 2Nd floor,Building No. 8, Cybersity Phase 3, Gurugram 110022</td>
                    </tr>
                    <tr>
                        <td>Net Quantity</td>
                        <td>2N</td>
                    </tr>
                    <tr>
                        <td>Gender</td>
                        <td>Men</td>
                    </tr>
                    <tr>
                        <td>Country of Origin</td>
                        <td>India</td>
                    </tr>
                </tbody>
            </Table>

        </Row>
        <Row>
            <h4>COMPLETE THE LOOK</h4>
            <Col md="4">
                <div id="img-style">
                    <img src={Track} style={{width:"220px"}} />
                    
                    <a id='overlay-text'>$2999.00 <span style={{textDecoration:'none',color:"red"}}>1499</span> </a>
                    
                </div>
            </Col>
        </Row>

        <div id="text-style-7">
         <h3>YOU MAY ALSO LIKE</h3>
          </div>
        <div id="container">
        <div id="row">
        <div id="card">
      <img src={Suits} />
      <p id="card-text">Woolen Coat<br/> Custom Fit</p>
      <a href='#'>Buy It</a>
       </div>
       <div id="card">
      <img src={Pro} />
      <p id="card-text"> Yellow Top <br/> Cotton</p>
       </div>
      <div id="card">
      <img src={Shoe10} />
      <p id="card-text"> Cream Color Sneaker <br/> Comfortable and Stylish </p>
       </div>
     <div id="card">
      <img src={Purse} />
      <p id="card-text">Stylish Leather Purse</p>
    </div>
    <div id="card">
      <img src={Shoe12} />
      <p id="card-text">Leather Sneakers</p>
    </div>
    <div id="card">
      <img src={Shoe8} />
      <p id="card-text">Colorful Stylish Shoe</p>
    </div>
    <div id="card">
      <img src={Shoe7} />
      <p id="card-text">Leather Brown Shoe</p>
    </div>
    </div>
  </div>
    </div>
    </Col>
    <Col md="4">

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
            
            <a id="button-style" >ADD TO BAG</a>
            </Col>
        </Row>

        
       
    </div>
    </Col>
    </Row>
    </div>
  )
}

export default Single_component_hide_and_scroll