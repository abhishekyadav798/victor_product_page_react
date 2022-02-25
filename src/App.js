import {Row,Col} from 'reactstrap'
import './App.css';
import Bottom_bar from './Bottom_bar';

import Column_fixed_and_scroll from './Column_fixed_and_scroll';

import Footer from './Footer';
import Navbar_top from './Navbar_top';
// import Navbar1 from './Navbar1';


function App() {
  return (
    <div >
      
      
      <Row>
        <Col>
        <Column_fixed_and_scroll/>
        </Col>
      </Row>
      <Row>
        <Footer/>
      </Row>
      <Row>
        <Bottom_bar/>
      </Row>
 
    
    </div>
  );
}

export default App;
