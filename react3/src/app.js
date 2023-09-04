import React from "react";

export default function App(){
    const [count, setCount] = React.useState(0);

    function add(){
        setCount(count + 1);
    }

    function subtract(){
        if(count !=0){ 
            setCount(count - 1);
        }
    }

    function reset(){
        setCount(0);
    }
    return(
        <div className = "counter">
            <button className = "addButton" onClick={add}> Increase </button>
            <span className = "displayCounter"> {count}</span>
            <button className = "minusButton" onClick={subtract}> Decrease </button> <br></br>
            <button className = "resetButton" onClick= {reset}> Reset </button>
        </div>
    )
}