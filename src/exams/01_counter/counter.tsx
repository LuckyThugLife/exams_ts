import React, {useState} from "react";
import {ButInc} from "./butInc";
import {ButReset} from "./butReset";

export const Counter = () => {
    const maxVal = 5
    const minVal = 0

    let [count, setCount] = useState(minVal)
    const onClickHandlerInc = () => {
        if (count < maxVal) {
            setCount(count + 1)
        }
    }
    const onClickHandlerReset = () => {
        setCount(minVal)
    }
    return (
        <div>
            <h1>{count}</h1>
            <ButInc onClickHandlerInc={onClickHandlerInc} count={count} maxVal={maxVal}/>
            <ButReset onClickHandlerReset={onClickHandlerReset} count={count} minVal={minVal}/>
            {/* <button onClick={onClickHandlerInc} disabled={count === maxVal}>Inc</button>*/}
            {/*<button onClick={onClickHandlerReset} disabled={count === minVal}>reset</button>*/}
        </div>
    )
}