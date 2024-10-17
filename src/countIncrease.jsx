import React, {useState} from "react";

function CountIncrease(){
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    }
    return(
        <>
            <h1>{count}</h1>
            <button onClick={increase}>클릭</button>
        </>
    )
}

export default CountIncrease;