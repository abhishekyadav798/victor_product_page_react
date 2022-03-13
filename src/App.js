import {Row,Col} from 'reactstrap'
import './App.css';
import Bottom_bar from './Bottom_bar';
import Carousel_top from './Carousel_top';
import Column_fixed_and_scroll from './Column_fixed_and_scroll';
import Expand_onclick_div from './Expand_onclick_div';
import Fixed_2 from './Fixed_2';
import Fixed_3 from './Fixed_3';
import Fixed_component from './Fixed_component';
import Footer from './Footer';
import Footer_2nd_top from './Footer_2nd_top';
import Footer_lowest from './Footer_lowest';
import Navbar_top from './Navbar_top';
import Review_and_rating from './Review_and_rating';
// import Navbar1 from './Navbar1';
import Scrollspy_component from './Scrollspy_component';
import Scrollspy_html from './Scrollspy_html';
import Side_component_fixed from './Side_component_fixed';
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
