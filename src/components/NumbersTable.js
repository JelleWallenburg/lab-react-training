function NumbersTable({limit}){
    let list= [];
    for(let i=1; i <= limit; i++){
        list.push(i);
    }

    return(
        <div>
            <ul style={{display:"flex",flexDirection:"row"}}>
            {list.map((number) => {

                return(
                    number%2===0?<li className="liTable" style={{backgroundColor:'red'}}>{number}</li> : <li className="liTable" style={{backgroundColor:'white'}}>{number}</li>
                )
            })}
            </ul>
        </div>
    )
};

export default NumbersTable;