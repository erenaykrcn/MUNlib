import React, { Component } from 'react';
import pros_back from "./script/pros_back.js"


class Pros extends Component {
	render() {
	    return (
			<div>
						<div className="go_back" onClick={pros_back} id="gb14">go back</div>

	    				<div className="pros">
	    					<div className="rowhead_nav">
	    						<div className="rowhead">Publish Date</div>
	    						<div className="rowhead">Document Name</div>
	    						<div className="rowhead">Author Name</div>
	    						<div className="rowhead">Conference</div>
	    					</div>		


			    			<div className="row_nav">
			    				<div className="row1">10/05/2019</div>
								<div className="row1 howext" onClick={() => 
									{window.open("https://s3-eu-central-1.amazonaws.com/munlib/docs/procedures/Treatise%20on%20Provisional%20Rules%20of%20the%20Security%20Council.pdf")}}>
									Treatise on Provisional Rules of the Security Council
								</div>
			    				<div className="row1">KARACAN, Erenay</div>
			    				<div className="row1">-</div>	    						
			    			</div>					

			    			<div className="row_nav">
			    				<div className="row1">14/03/2018</div>
								<div className="row1 howext" onClick={() => 
									{window.open("https://s3-eu-central-1.amazonaws.com/munlib/docs/procedures/Rules%20and%20Traditions%20of%20the%20Parliament%20of%20the%20United%20Kingdom.pdf")}}>
									Rules and Traditions of the Parliement of the United Kingdom
								</div>
			    				<div className="row1">KARACAN, Erenay</div>
			    				<div className="row1">CRIsimA</div>	    						
			    			</div>


			    			<div className="row_nav">
			    				<div className="row1">14/03/2018</div>
								<div className="row1 howext" onClick={() => 
									{window.open("https://s3-eu-central-1.amazonaws.com/munlib/docs/procedures/Rules%20on%20Practice%20and%20Laws%20of%20the%20Convention.pdf")}}>
									Rules on Practice and Laws of the National Convention
								</div>
			    				<div className="row1">KARACAN, Erenay</div>
			    				<div className="row1">CRsimA</div>	    						
			    			</div>										


			    			<div className="row_nav">
			    				<div className="row1">12/04/2018</div>
								<div className="row1 howext" onClick={() => 
									{window.open("https://s3-eu-central-1.amazonaws.com/munlib/docs/procedures/HCRRoP.pdf")}}>
									Procedure/HCR
								</div>
			    				<div className="row1">KARACAN, Erenay</div>
			    				<div className="row1">KSBLMUN'18</div>	    						
			    			</div>


			    			<div className="row_nav">
			    				<div className="row1">10/08/2018</div>
								<div className="row1 howext" onClick={() => 
									{window.open("https://s3-eu-central-1.amazonaws.com/munlib/docs/procedures/JCCROP.pdf")}}>
									Procedure/JCC
								</div>
			    				<div className="row1">KARACAN, Erenay</div>
			    				<div className="row1">OZYMUN'18</div>	    						
			    			</div>

	    					

	    				</div>
					</div>	
	    )
	}
}

export default Pros