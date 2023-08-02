import { useState } from "react";

function SignupPage() {
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const [nationality, setNationality]= useState("");

    const handleSubmit= (e) =>{
        e.preventDefault()

        setEmail("");
        setPassword("");
        setNationality("");
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="text" name="email" onChange={(e) => setEmail(e.target.value)}/>
                <br/>
                <label>Password</label>
                <input type="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
                <br/>
                <label>Nationality</label>
                <select value= {nationality} onChange={(e) => setNationality(e.target.value)}>
                    <option value="en"> English </option>
                    <option value="fr"> French </option>
                    <option value="de"> German </option>
                </select>
                <br/>
                <button type="submit">Submit</button>
            </form>
            <br/>
            <div>
                {nationality==="en" && <p>Hello</p>}
                {nationality==="fr" && <p>Bonjour</p>}
                {nationality==="de" && <p>Hallo</p>}
                <p>Your email address is: {email}</p>
                <p>Your email adress is correct</p>
            </div>
        </div>
    )
};

export default SignupPage;