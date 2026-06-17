import {useState} from 'react'
import { PiAirplaneBold } from "react-icons/pi";


   const reactionArray=[
    "🫘",
    "🥦",
    "🥗",
    "🍞",
    "🥑",
    "🍅",
    "🍎",
    "🍿",
    "🥞",
    "🍔",
    "🍰",
   ];

    function ArrayTask(){
        const[count,setCount]=
        useState(0)

        const handleClick = () => {
            if(count<reactionArray.length-1)
            {
                setCount(count+1);
            }
        };

return(
     <div className="container">
        <h2>Likes: {count}
            {reactionArray[count]}
            </h2>

            <PiAirplaneBold
              size={40}
              onClick={handleClick}
              style={{cursor:"pointer"}} />

     </div>
 );
}   

export default ArrayTask
