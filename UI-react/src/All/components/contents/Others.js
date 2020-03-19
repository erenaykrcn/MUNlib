import React, { Component } from 'react';


class Others extends Component {
    render() {
      return (
          <div className="all-others" id="others">
              <div className="rowhead_nav">
	    					<div className="rowhead">Publish Date</div>
	    					<div className="rowhead">Document Name</div>
	    					<div className="rowhead">Author Name</div>
	    					<div className="rowhead">Conference</div>
	    				</div>	

              <div className="row_nav">
			    		  <div className="row1">10/01/2018</div>
								<div className="row1 howext" onClick={() => 
									{window.open("https://s3-eu-central-1.amazonaws.com/munlib/docs/other/Position Paper of the Hellenic Republic.pdf")}}>
									Position Paper of the Hellenic Republic
								</div>
			    			<div className="row1">KARACAN, Erenay</div>
			    			<div className="row1">MUNBU'18</div>	    						
			    		</div>

              <div className="row_nav">
			    		  <div className="row1">10/05/2019</div>
								<div className="row1 howext" onClick={() => 
									{window.open("https://s3-eu-central-1.amazonaws.com/munlib/docs/other/Order Paper-UNSC.pdf")}}>
									Order Paper n.002
								</div>
			    			<div className="row1">KARACAN, Erenay</div>
			    			<div className="row1">BESTMUN'19</div>	    						
			    		</div>  

              <div className="row_nav">
			    		  <div className="row1">10/01/2020</div>
								<div className="row1 howext" onClick={() => 
									{window.open("https://s3-eu-central-1.amazonaws.com/munlib/docs/other/Order Paper.pdf")}}>
									Order Paper n.003
								</div>
			    			<div className="row1">KARACAN, Erenay</div>
			    			<div className="row1">GCMUN'20</div>	    						
			    		</div>                            			              
         </div>
      )
    }
}

export default Others