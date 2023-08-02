import { useState } from "react";

function Carousel(props){
    const {images} = props;

    const [imgDisplay, setImgDisplay] = useState(0);

    const nextImage = () => {
        if (imgDisplay < images.length - 1){
        setImgDisplay(imgDisplay + 1)
        }
        else (setImgDisplay(0))
       };

    const previousImage = () => {
        if (imgDisplay > 0){
        setImgDisplay(imgDisplay - 1)
        }
        else (setImgDisplay(images.length -1))
       };

    return(
        <div>
            <img src={images[imgDisplay]} alt='profile'/>
            <br/>
             <button onClick={() => previousImage()}>Left</button>
            <button onClick={()=> nextImage()}>Right</button>
        </div>

    )
};

export default Carousel;