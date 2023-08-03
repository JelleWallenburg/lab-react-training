import { useState } from "react";
import SingleColorPicker from "./SingleColorPicker";



function RGBColorPicker(){
    const [rValue, setRValue]= useState(0);
    const [gValue, setGValue]= useState(0);
    const [bValue, setBValue]= useState(0);
    

    return(
        <div>
            <table>
                <SingleColorPicker color="r" value={rValue} onChange={ (rValue) => setRValue(rValue)}/>
                <tr>
                <SingleColorPicker color="g" value={gValue} onChange={ (gValue) => setGValue(gValue)}/>
                </tr>
                <tr>
                <SingleColorPicker color="b" value={bValue} onChange={ (bValue) => setBValue(bValue)}/>
                </tr>
                <tr>
                    <td style={{backgroundColor:`rgb(${rValue},${gValue},${bValue})`}} width='400px'></td>
                    <td>rgb({rValue},{gValue},{bValue})</td>
                </tr>
            </table>
        </div>
    )
}

export default RGBColorPicker;