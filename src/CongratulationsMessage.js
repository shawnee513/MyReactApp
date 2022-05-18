import React from 'react';

export const CongratulationsMessage = ({numberOfClicks, threshold }) => {
    return numberOfClicks >= threshold
    ? <h1>Congratulations! You've reached {threshold} number of clicks</h1>
    : null;
}