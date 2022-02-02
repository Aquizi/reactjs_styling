import React from "react";

function Block(props){

    const [backColor, setBackColor] = React.useState(props.data.backColor);
    const [borderColor, setBorderColor]= React.useState(props.data.borderColor);

    let changeColor = () =>{
        setBackColor("Green")
        setBorderColor("Red")
    }

    let style=
        {
            height:"100px",
            width:"100px",
            border:"solid",
            borderWidth:"2px",
            margin:"10px",
            backgroundColor:backColor,
            borderColor:borderColor
    }


    return(
        <span>
            <div style={style} onClick={() => changeColor()}>
            </div>
        </span>
    )
}

export default Block;