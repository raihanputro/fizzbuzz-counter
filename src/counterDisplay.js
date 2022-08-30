import React from "react";

function CounterDisplay({count}) {
    if(count === 0){
        return <h1>{count}</h1>
    }

    if(count === 7) {
        return <h1>{count} suuuu</h1>
    }

    if(count%5 === 0 && count%7 === 0) {
        return <h1>{count} fizzbuzz</h1>
    }


    if(count % 5 === 0) {
        return <h1>{count} fizz</h1>
    }

    if(count % 7 === 0) {
        return <h1>{count} buzz</h1>
    }

    
    if(count%2 !== 0) {
        return <h1>{count} ganjil</h1>
    }

    if(count%2 === 0) {
        return <h1>{count} genap</h1>
    }

    return <h1>{count}</h1>;
}

function IncreaseButton ({increase}) {
    return (
        <button onClick={increase}>+ Increase</button>
    )
}

function DecreaseButton ({decrease}) {
    return (
        <button onClick={decrease}>- Decrease</button>
    )
}

function ResetButton ({reset}) {
    return <button onClick={reset}>- Reset</button>
}

export {CounterDisplay, IncreaseButton, DecreaseButton, ResetButton};