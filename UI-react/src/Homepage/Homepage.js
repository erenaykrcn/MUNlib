import React, { Component } from 'react';

import Page1 from "./components/page1/Page1";
import Page2 from "./components/page2/Page2"; 
import Page3 from "./components/page3/Page3";
import Page4 from "./components/page4/Page4"; 
import Page5 from "./components/page5/Page5";
import Page6 from "./components/page6/Page6"; 
import Page7 from "./components/page7/Page7";




class Homepage extends Component {
  render() {
    return (
    	<div className="window">
			<Page1/>
        	<Page2/>
        	<Page3/>
        	<Page4/>
        	<Page5/>
        	<Page6/>
        	<Page7/>
        </div>
    );
  }
}

export default Homepage;
