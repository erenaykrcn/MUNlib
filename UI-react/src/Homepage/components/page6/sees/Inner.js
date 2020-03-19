import React, { Component } from 'react';


import seeguides_ny from "./script/guides.js";
import seepros_ny from "./script/pros.js";
import seeresos_ny from "./script/resos.js";


class Inner extends Component {
	render() {
	    return (
				<div className="inner_content_rightdiv_page2" id="meinner">
	    			<div className="tab1" onClick={seeguides_ny}>
	    				<i class="w3-animate-bottom fas fa-book icone"></i>
	   					<p className="tabin1">See the Study Guides</p>
					</div>
					<div className="tab1" onClick={seepros_ny}>
	    				<i class="w3-animate-bottom far fa-file-alt icone"></i>
	  					<p className="tabin1">See Procedures</p>
   					</div>
	    			<div className="tab1" onClick={seeresos_ny}>
	    				<i class="w3-animate-bottom fas fa-file-pdf icone"></i>
	   					<p className="tabin1">See Legislative Documents</p>
 					</div>
 				</div>		    	
	    )
	}
}

export default Inner