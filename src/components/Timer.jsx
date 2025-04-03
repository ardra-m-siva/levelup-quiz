import React, { useEffect } from 'react'

const Timer = ({ start, handleTimeUp, timeLeft, setTimeLeft }) => {
    useEffect(() => {
        if (!start || timeLeft <= 0) {
            if (timeLeft === 0) handleTimeUp();
            return;
        }
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000)

        return () => clearInterval(timer)

    }, [start, timeLeft, handleTimeUp])
    return (
        <div className='d-flex justify-content-end align-items-center me-4'>
            <div className='border border-black rounded p-2 shagow-lg text-center' style={{ minWidth: "100px" }}>
                <span style={{ color: timeLeft <= 5 ? "red" : "inherit" }} className='fw-bold fs-4'>{timeLeft > 0 ? timeLeft : "⏳ Time's Up!"}</span>
            </div>
        </div>
    )
}

export default Timer