import  { useState } from 'react';

function LikeButton(){
     const [likes, setLikes] = useState(0);

    return(
        <div className="Button">
            <button onClick={() => setLikes(likes + 1)}> {likes} Likes </button>
        </div>
    )
}
export default LikeButton;