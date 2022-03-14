import {Row,Col} from 'reactstrap'
import './App.css';
import Bottom_bar from './Bottom_bar';

import Footer from './Footer';
import Footer_2nd_top from './Footer_2nd_top';
import Footer_lowest from './Footer_lowest';

// import Navbar1 from './Navbar1';

import Single_component_hide_and_scroll from './Single_component_hide_and_scroll';

function App() {
  return (
    <div >
      
      
      <Row>
        <Col>
        <Single_component_hide_and_scroll/>
        </Col>
      </Row>
      <Row>
        <Footer/>
      </Row>
      <Row>
        <Bottom_bar/>
      </Row>
      <Footer_2nd_top/>
      <Footer_lowest/>
      
      <Row>
        
      </Row>
 
    
    </div>
  );
}

export default App;
