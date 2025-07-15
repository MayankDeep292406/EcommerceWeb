import React from "react";
function Card({name, roll}){
    console.log(name,age)
    return(
        <div>
            <div className="border-8 p-4 m-2 rounded">
                <p>Name:{name}</p>
                 <p>Roll:{roll}</p>
            </div>
        </div>
    )
}
export default Card;