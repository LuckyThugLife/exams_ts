import React from "react";

type PropsType = {
    onClickHandlerReset: () => void
    count: number
    minVal: number
}

export const ButReset = (props: PropsType) => {

    return (
        <>
            <button onClick={props.onClickHandlerReset} disabled={props.count === props.minVal}>reset</button>
        </>
    )
}