import React, { Component } from 'react';
import resos_back from "./script/resos_back.js"


class Pros extends Component {
	render() {
	    return (
				<div>
					<div className="go_back" onClick={resos_back} id="gb3">go back</div>

	    				<div className="resos">
	    					<div className="rowhead_nav">
	    						<div className="rowhead">Publish Date</div>
	    						<div className="rowhead">Document Name</div>
	    						<div className="rowhead">Committee</div>
	    						<div className="rowhead">Conference</div>
	    					</div>	


							<div className="row_nav">
								<div className="row1 r3">10/05/2019</div>
								<div className="row1 howext r3" onClick={() => 
									{window.open("https://s3-eu-central-1.amazonaws.com/munlib/docs/leg-documents/SRES2469%282019%29.pdf")}}>
									Militarisation of the Arctic
								</div>
								<div className="row1 r3">UNSC</div>
								<div className="row1 r3">BESTMUN'19</div>	    						
							</div>  

							<div className="row_nav">
								<div className="row1 r3">13/01/2018</div>
								<div className="row1 howext r3" onClick={() => 
									{window.open("https://s3-eu-central-1.amazonaws.com/munlib/docs/leg-documents/NAC%20Directive%20on%20Gender%20Perspetives.pdf")}}>
									Women and Security in NATO Armed Forces
								</div>
								<div className="row1 r3">NATO</div>
								<div className="row1 r3">MUNBU'18</div>	    						
							</div>  


							<div className="row_nav">
								<div className="row1 r3">19/06/2017</div>
								<div className="row1 howext r3" onClick={() => 
									{window.open("https://s3-eu-central-1.amazonaws.com/munlib/docs/leg-documents/NAC%20COM%20DPRK.pdf")}}>
									NATO's Response to the acts of the DPRK
								</div>
								<div className="row1 r3">NATO</div>
								<div className="row1 r3">NAMUN'17</div>	    						
							</div>  


							<div className="row_nav">
								<div className="row1 r3">19/01/2017</div>
								<div className="row1 howext r3" onClick={() => 
									{window.open("https://s3-eu-central-1.amazonaws.com/munlib/docs/leg-documents/SOCHUM%20MUNBU%20RESO.pdf")}}>
									Global Eradication of Polio Virus
								</div>
								<div className="row1 r3">GA3/SOCHUM</div>
								<div className="row1 r3">MUNBU'17</div>	    						
							</div>  

							<div className="row_nav">
								<div className="row1 r3">20/08/2017</div>
								<div className="row1 howext r3" onClick={() => 
									{window.open("https://s3-eu-central-1.amazonaws.com/munlib/docs/leg-documents/Resolution%20on%20the%20Implementation%20of%20the%20Charter%20of%20the%20United%20Nations%20and%20Treaty%20of%20United%20Nations%20Conference%20on%20International%20Organization%2C%20San.pdf")}}>
									Resolution on the Implementation of the Charter of the United Nations 
								</div>
								<div className="row1 r3">San Francisco Conference 1945</div>
								<div className="row1 r3">ANMUN'17</div>	    						
							</div>  							 
										
	    				</div>
					</div>
	    )
	}
}

export default Pros