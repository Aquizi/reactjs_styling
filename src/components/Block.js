import React from "react";

function Block(){

    let colorCount=React.useState(0);

    const fillColorsList=["red","blue","green"];
    const borderColorsList=["blue","green","red"];

    const changeColor=()=>{
        colorCount++
        if(colorCount>2){
            colorCount=0
        }
    }

    let style={
        height:"100px",
        width:"100px",
        border:"solid",
        borderWidth:"2px",
        margin:"10px",
        backgroundColor:fillColorsList[colorCount],
        borderColor:borderColorsList[colorCount]
    }

    return(
        <div style={style} onClick={changeColor}>
        </div>
    )
}

export default Block;