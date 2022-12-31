import React from "react";

type PropsType = {
    onClickHandlerInc: () => void
    count: number
    maxVal: number
}

export const ButInc = (props: PropsType) => {

    return (
        <>
            <button onClick={props.onClickHandlerInc} disabled={props.count === props.maxVal}>add</button>
        </>
    )
}