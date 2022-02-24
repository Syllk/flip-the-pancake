import React, { useEffect, useState } from 'react';
import './MainView.css';


const firstSideFryingTime = 50;
const otherSideFryingTime = 25;
export const MainView = () => {
    let [timerIsRunning, setTimerIsRunning] = useState(false);
    let [remainingTime, setRemainingTime] = useState(0);
       useEffect(() => {
        let newTimerId = setInterval(tickTimer, 1000);
        return () => clearInterval(newTimerId);

    }, [timerIsRunning])
    const startTimer = () => {
        setRemainingTime(firstSideFryingTime);
        setTimerIsRunning(true)

    }
    const flipPancake = () => {
        setRemainingTime(otherSideFryingTime);
        setTimerIsRunning(true)
    }
    const tickTimer = () => {
        if (!timerIsRunning) return;
        setRemainingTime(prevTime => {
            const newTime = prevTime - 1;
            if (newTime === 0) {
                setTimerIsRunning(false);
            }
            return newTime;

        });

    }

    const reset = () => {
        setTimerIsRunning(false);
        setRemainingTime(0);

    }
    return (
        <>
            <p>Licznik Nalesników</p>
            <button onClick={startTimer}>Start</button>
            <button onClick={flipPancake}>Next</button>
            <button onClick={reset}>Reset</button>
            <p>{remainingTime}</p>
        </>
    );
}


