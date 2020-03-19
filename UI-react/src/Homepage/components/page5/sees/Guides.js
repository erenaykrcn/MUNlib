import React, { Component } from 'react';
import guides_back from "./script/guides_back.js";



class Guides extends Component {

	render() {
	    return (
			<div>
				<div className="go_back" onClick={guides_back} id="gb10">go back</div>
	    		<div className="guides">

	   				<div className="rowhead_nav">
 						<div className="rowhead">Publish Date</div>
	    				<div className="rowhead">Document Name</div>
	    				<div className="rowhead">Author Name</div>
	    				<div className="rowhead">Conference</div>
	    			</div>	

	    			<div className="row_nav">
	    				<div className="row1">12/04/2018</div>
	    				<div className="row1 howext" onClick={()=>{
							window.open("https://s3-eu-central-1.amazonaws.com/munlib/docs/guides/HCRGUIDE%2718.pdf")
						}}
						>UNHCR/Ending Statelessness</div>
	    				<div className="row1">KARACAN, Erenay</div>
	    				<div className="row1">KSBLMUN'18</div>	    					
	    			</div>

	    		

	    		</div>	 
			</div>   	




	    )
	}
}

export default Guides	    	


