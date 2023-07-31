import { useState } from "react";

function ClickablePicture(props){
    const {img, imgClicked} = props;
    const img1 = require(`../assets/images/${img}`)
    const img2 = require(`../assets/images/${imgClicked}`)

    const [clicked, setClicked] = useState(false)
  
    return(
        <div>
            <img onClick={() => setClicked(previous=> !previous)}
            src= {clicked ? img2 : img1} height='150px'/>
        </div>
    )
}

export default ClickablePicture;