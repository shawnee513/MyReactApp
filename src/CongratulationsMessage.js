import React from 'react';

export const CongratulationsMessage = ({numberOfClicks, threshold, onHide }) => {
    return (
        <>
            {numberOfClicks >= threshold
            ? <h1>Congratulations! You've reached {threshold} number of clicks</h1>
            : null}
            <button onClick={onHide}>Hide</button>
        </>
    )
}