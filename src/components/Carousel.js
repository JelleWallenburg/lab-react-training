import { useState } from "react";

function Carousel(props){
    const {img} = props;
    const img1= img[0];
    const img2= img[1];
    const img3= img[2];
    const img4= img[3];

    const [imgDisplay, setImgDisplay] = useState[0]

    

    return(
        <div>
            <img/>
            <button>Left</button>
            <button>Right</button>
        </div>

    )
};

export default Carousel;