import React, { Component } from 'react';
import resos_back from "./script/resos_back.js"


class Pros extends Component {
	render() {
	    return (
			<div>
						<div className="go_back" onClick={resos_back} id="gb15">go back</div>	
	    				<div className="resos">
	    					<div className="rowhead_nav">
	    						<div className="rowhead">Publish Date</div>
	    						<div className="rowhead">Document Name</div>
	    						<div className="rowhead">Author Name</div>
	    						<div className="rowhead">Conference</div>
	    					</div>	

							<div className="row_nav">
								<div className="row1">08/10/2017</div>
								<div className="row1 howext" onClick={() => 
									{window.open("https://s3-eu-central-1.amazonaws.com/munlib/docs/leg-documents/SRES3675%281956%29%20.pdf")}}>
									Suez Canal Crisis
								</div>
								<div className="row1">UNSC</div>
								<div className="row1">BHMUN'17</div>	    						
							</div> 							

							<div className="row_nav">
								<div className="row1">13/04/2017</div>
								<div className="row1 howext" onClick={() => 
									{window.open("https://s3-eu-central-1.amazonaws.com/munlib/docs/leg-documents/UNHCR%20Resolution.pdf")}}>
									Ending Statelessness
								</div>
								<div className="row1">UNHCR</div>
								<div className="row1">KSBLMUN'17</div>	    						
							</div>  

							<div className="row_nav">
								<div className="row1">19/01/2017</div>
								<div className="row1 howext" onClick={() => 
									{window.open("https://s3-eu-central-1.amazonaws.com/munlib/docs/leg-documents/SOCHUM%20MUNBU%20RESO.pdf")}}>
									Global Eradication of Polio Virus
								</div>
								<div className="row1">GA3/SOCHUM</div>
								<div className="row1">MUNBU'17</div>	    						
							</div>  

							<div className="row_nav">
								<div className="row1">20/08/2017</div>
								<div className="row1 howext" onClick={() => 
									{window.open("https://s3-eu-central-1.amazonaws.com/munlib/docs/leg-documents/Resolution%20on%20the%20Implementation%20of%20the%20Charter%20of%20the%20United%20Nations%20and%20Treaty%20of%20United%20Nations%20Conference%20on%20International%20Organization%2C%20San.pdf")}}>
									Resolution on the Implementation of the Charter of the United Nations 
								</div>
								<div className="row1">San Francisco Conference 1945</div>
								<div className="row1">ANMUN'17</div>	    						
							</div>      

	    									
	    				</div>
					</div>	
	    )
	}
}

export default Pros