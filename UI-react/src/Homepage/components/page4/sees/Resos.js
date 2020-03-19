import React, { Component } from 'react';
import resos_back from "./script/resos_back.js"


class Pros extends Component {
	render() {
	    return (
			<div>
						<div className="go_back" onClick={resos_back} id="gb9">go back</div>	

	    				<div className="resos">
	    					<div className="rowhead_nav">
	    						<div className="rowhead">Publish Date</div>
	    						<div className="rowhead">Document Name</div>
	    						<div className="rowhead">Author Name</div>
	    						<div className="rowhead">Conference</div>
	    					</div>	

							<div className="row_nav">
								<div className="row1 r2">16/06/2018</div>
								<div className="row1 howext r2" onClick={() => 
									{window.open("https://s3-eu-central-1.amazonaws.com/munlib/docs/leg-documents/Annual%20Report%20to%20OSCE%20.pdf")}}>
									Regular Report to the Ministerial Council on Mission in Kosovo
								</div>
								<div className="row1 r2">OSCE</div>
								<div className="row1 r2">MUNAAL'18</div>	    						
							</div>  



							<div className="row_nav">
								<div className="row1 r2">16/06/2018</div>
								<div className="row1 howext r2" onClick={() => 
									{window.open("https://s3-eu-central-1.amazonaws.com/munlib/docs/leg-documents/Decision%20No.1039%20of%20the%20Permanent%20Council.pdf")}}>
									Decision on the OSCE Mission in Kosovo
								</div>
								<div className="row1 r2">OSCE</div>
								<div className="row1 r2">MUNAAL'18</div>	    						
							</div>  


							<div className="row_nav">
								<div className="row1 r2">13/10/2019</div>
								<div className="row1 howext r2" onClick={() => 
									{window.open("https://s3-eu-central-1.amazonaws.com/munlib/docs/leg-documents/EUCO%20Conc%202.pdf")}}>
									Council's Precautions on Brexit
								</div>
								<div className="row1 r2">European Council</div>
								<div className="row1 r2">MUNAAL'19</div>	    						
							</div>  

							<div className="row_nav">
								<div className="row1 r2">18/04/2018</div>
								<div className="row1 howext r2" onClick={() => 
									{window.open("https://s3-eu-central-1.amazonaws.com/munlib/docs/leg-documents/Joint%20Directive%20UK.pdf")}}>
									Admiralty's Directive No.24
								</div>
								<div className="row1 r2">JCC:Allies of the WWII</div>
								<div className="row1 r2">EUROsimA'18</div>	    						
							</div>  


							<div className="row_nav">
								<div className="row1 r2">13/01/2018</div>
								<div className="row1 howext r2" onClick={() => 
									{window.open("https://s3-eu-central-1.amazonaws.com/munlib/docs/leg-documents/NAC%20Directive%20on%20Illegal%20Migration.pdf")}}>
									Illegal Migration in NATO Counctries
								</div>
								<div className="row1 r2">NATO</div>
								<div className="row1 r2">MUNBU'18</div>	    						
							</div>   																					


							<div className="row_nav">
								<div className="row1 r2">10/05/2019</div>
								<div className="row1 howext r2" onClick={() => 
									{window.open("https://s3-eu-central-1.amazonaws.com/munlib/docs/leg-documents/SRES2469%282019%29.pdf")}}>
									Militarisation of the Arctic
								</div>
								<div className="row1 r2">UNSC</div>
								<div className="row1 r2">BESTMUN'19</div>	    						
							</div>  

							<div className="row_nav">
								<div className="row1 r2">13/01/2018</div>
								<div className="row1 howext r2" onClick={() => 
									{window.open("https://s3-eu-central-1.amazonaws.com/munlib/docs/leg-documents/NAC%20Directive%20on%20Gender%20Perspetives.pdf")}}>
									Women and Security in NATO Armed Forces
								</div>
								<div className="row1 r2">NATO</div>
								<div className="row1 r2">MUNBU'18</div>	    						
							</div>  


							<div className="row_nav">
								<div className="row1 r2">19/06/2017</div>
								<div className="row1 howext r2" onClick={() => 
									{window.open("https://s3-eu-central-1.amazonaws.com/munlib/docs/leg-documents/NAC%20COM%20DPRK.pdf")}}>
									NATO's Response to the acts of the DPRK
								</div>
								<div className="row1 r2">NATO</div>
								<div className="row1 r2">NAMUN'17</div>	    						
							</div>  

	    									
	    				</div>
			</div>			
	    )
	}
}

export default Pros