function SingleColorPicker(props){
    const {color, value, onChange} = props;
    console.log("test", color, value, onChange);
    return(
        <tr>
            {color==='r' &&<td style={{backgroundColor:`rgb(${value},0,0)`}} width='30px'></td>}
            {color==='g' &&<td style={{backgroundColor:`rgb(0,${value},0)`}} width='30px'></td>}
            {color==='b' &&<td style={{backgroundColor:`rgb(0,0,${value})`}} width='30px'></td>}
            <td>{color.toUpperCase()}:<input onChange={(e) => onChange(e.target.value)}/></td>
        </tr>
    )
};

export default SingleColorPicker;