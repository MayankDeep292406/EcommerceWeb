import React from "react";
import Card from "./Card";
function Props(){
    const Students = [{
        name:"Asish",
        Roll:"12"
    },
{
    name:"Ram",
    Roll:55
},
{
    name:"Ananya",
    Roll:5
}]
    return(
        <div>
         {Students.map((item,index =>
            <Card key={index} name={item.name} roll={item.Roll}/>
         ))}
        </div>
    );
    
};
export default Props;