import React, { Component } from 'react';
import resos_back from "./script/resos_back.js"


class Pros extends Component {
	render() {
	    return (
			<div>
						<div className="go_back" onClick={resos_back} id="gb18">go back</div>	

	    				<div className="resos">
	    					<div className="rowhead_nav">
	    						<div className="rowhead">Publish Date</div>
	    						<div className="rowhead">Document Name</div>
	    						<div className="rowhead">Author Name</div>
	    						<div className="rowhead">Conference</div>
	    					</div>	


							<div className="row_nav">
								<div className="row1">19/06/2017</div>
								<div className="row1 howext" onClick={() => 
									{window.open("https://s3-eu-central-1.amazonaws.com/munlib/docs/leg-documents/NAC%20COM%20DPRK.pdf")}}>
									NATO's Response to the acts of the DPRK
								</div>
								<div className="row1">NATO</div>
								<div className="row1">NAMUN'17</div>	    						
							</div>  

							<div className="row_nav">
								<div className="row1">10/05/2019</div>
								<div className="row1 howext" onClick={() => 
									{window.open("https://s3-eu-central-1.amazonaws.com/munlib/docs/leg-documents/SRES2469%282019%29.pdf")}}>
									Militarisation of the Arctic
								</div>
								<div className="row1">UNSC</div>
								<div className="row1">BESTMUN'19</div>	    						
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
   

	    									
	    				</div>
					</div>	
	    )
	}
}

export default Pros