import React, {Component} from "react";

import NA from "./world_components/NA";
import SA from "./world_components/SA";
import EU from "./world_components/EU";
import AF from "./world_components/AF";
import ME from "./world_components/ME";
import AS from "./world_components/AS";


import wi from "./script/wi.js";
import not_wi from "./script/not_wi.js";


class World extends Component {
    componentDidMount(){
        setTimeout(() => {
            document.getElementsByClassName("world")[0].style.opacity = "1";
            document.getElementsByClassName("world")[0].style.marginLeft = "35vw";
            document.getElementsByClassName("NA")[0].style.opacity = "1";

            if (window.innerWidth<1000) {
                document.getElementsByClassName("hoveron")[0].style.height = "20vw";
                document.getElementsByClassName("hoveron")[0].style.width = "20vw";
                document.getElementsByClassName("hoveron")[0].style.fontSize = "1.7vw";
            } else {
                document.getElementsByClassName("hoveron")[0].style.height = "15vw";
                document.getElementsByClassName("hoveron")[0].style.width = "15vw";
                document.getElementsByClassName("hoveron")[0].style.fontSize = "1vw";
            }

        }
    )}       
    render() {
      return (

        <div class="world_main">

            <div className="hoveron" onMouseOver={wi}
                onMouseOut={not_wi}>Hover on the continents to browse through the sections</div>
        
            <img src="https://s3-eu-central-1.amazonaws.com/munlib/svg/world@1000x.png" 
                className="world"></img>

            <NA/>

            <SA/>

            <EU/>

            <AF/>

            <ME/>

            <AS/>


        
        </div>

        );
    }
  }
  
  export default World;  