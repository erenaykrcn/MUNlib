import React, { Component } from 'react';
import {ReactSVG} from 'react-svg';


import Inner from "./sees/Inner.js";
import Guides from "./sees/Guides.js";
import Pros from "./sees/Pros.js";
import Resos from "./sees/Resos.js";


class Page2 extends Component {
	render() {
	    return (
	    	<div className="page2">

	    		<img src="https://s3-eu-central-1.amazonaws.com/munlib/img/statue.png" className="statue_page2"/>

	    		<div className="rightdiv_page2">

	    			<div className="heading_rightdiv_page2">Documents related to the North American Continent</div>

	    			<div className="content_rightdiv_page2">

	    				<nav className="nav_content_rightdiv_page2">
	    					<div className="nav_inner" onClick={function(e){

	    						document.getElementsByClassName("page1")[0].style.marginTop = "0";
								document.getElementsByClassName("bottom_nav")[0].style.marginTop = "-4%";
								document.getElementsByClassName("as1")[0].style.marginTop = "0";
								document.getElementsByClassName("as2")[0].style.marginTop = "0";
								document.getElementsByClassName("as3")[0].style.marginTop = "0";
								document.getElementsByClassName("as3")[0].style.bottom = "0";
								document.getElementsByClassName("inner_content_rightdiv_page2")[0].style.display = "none";
								document.getElementsByClassName("bottom_nav")[0].style.display = "block";
								document.getElementsByClassName("ball_div")[0].style.display = "block";

								
	    					}}>go to homepage</div>
	    					<div className="nav_inner" onClick={()=>{window.location = "/all"}}>see all the sections</div>
	    					<div className="nav_inner" onClick={function(e){

	    						document.getElementsByClassName("page1")[0].style.marginTop = "-200vh";
								document.getElementsByClassName("bottom_nav")[0].style.marginTop = "-204%";
								document.getElementsByClassName("as1")[0].style.marginTop = "-200vh";
								document.getElementsByClassName("as2")[0].style.marginTop = "-200vh";
								document.getElementsByClassName("as3")[0].style.marginTop = "-200vh";
								document.getElementsByClassName("as3")[0].style.bottom = "200vh";
								document.getElementsByClassName("inner_content_rightdiv_page2")[0].style.display = "none";
								document.getElementsByClassName("inner_content_rightdiv_page2")[1].style.display = "block";
								
	    					}}>next section<i className="fas fa-angle-down"></i></div>	
	    					<div className="nav_inner" onClick={()=>{window.location = "/contact"}}>contact</div>	
	    				</nav>

	    				<Inner/>

	    				<Guides/>

	    				<Pros/>

	    				<Resos/>

	    			</div>
	    		</div>	


	    	</div>
	    );
	}
}

export default Page2;