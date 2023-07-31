import { useState , useEffect} from 'react';

function Dice() {
    const dice1= require('../assets/images/dice1.png');
    const dice2= require('../assets/images/dice2.png');
    const dice3= require('../assets/images/dice3.png');
    const dice4= require('../assets/images/dice4.png');
    const dice5= require('../assets/images/dice5.png');
    const dice6= require('../assets/images/dice6.png');
    const dice7= require('../assets/images/dice-empty.png');

    const diceArray=[dice1, dice2, dice3, dice4, dice5, dice6,dice7]

    const [randomNumber,setRandomNumber]= useState(Math.floor(Math.random()*(diceArray.length-1)));

    useEffect(() => {
        const id = setTimeout(() => {
            setRandomNumber(Math.floor(Math.random()*diceArray.length));
          }, 1000);
    },[])
    
    return(
        <div>
            <img src={diceArray[randomNumber]} height='100px'
            onClick={()=> {
                setRandomNumber(6);
                setTimeout(() => {setRandomNumber(Math.floor(Math.random()*diceArray.length));}, 1000)}}/>
        </div>
    )
}

export default Dice;