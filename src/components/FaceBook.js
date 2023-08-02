import profiles from '../data/berlin.json'
import { useState } from 'react'

const countryList= []
profiles.map((profile) => {
    if(!countryList.includes(profile.country)){
        countryList.push(profile.country)
    }
})

function FaceBook(){
    const [country, setCountry] = useState('All');

    return(
        <div>
            {countryList.map((countrySelect) => {
                return(
                    <button onClick={() => setCountry(countrySelect)}>
                        {countrySelect}
                    </button>
                );
            })
            }

            {profiles.map((profile) => {
                return(
                <div style= {profile.country===country ? {backgroundColor:'blue'}: {backgroundColor:'white'}}>
                    <img src= {profile.img} height='100px' alt='profile'/>
                    <h3>First Name: {profile.firstName}</h3>
                    <h3>Last Name: {profile.lastName}</h3>
                    <h3>Country Name: {profile.country}</h3>
                    <h3>Type: {profile.isStudent? 'Student': 'Teacher'}</h3>
                </div>
                )
            })}
        </div>
    )
}

export default FaceBook;