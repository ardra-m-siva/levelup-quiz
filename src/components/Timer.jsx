import React, { useEffect, useRef } from 'react'

const Timer = ({ start, handleTimeUp, timeLeft, setTimeLeft }) => {
    const intervalRef = useRef(null);
    useEffect(() => {
        if (start) {
            // Clear existing interval, just to be safe
            clearInterval(intervalRef.current);

            intervalRef.current = setInterval(() => {
                setTimeLeft(prev => {
                    if (prev <= 1) {
                        clearInterval(intervalRef.current);
                        handleTimeUp();
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => clearInterval(intervalRef.current);
    }, [start,setTimeLeft]);
    
    return (
        <div className='d-flex justify-content-end align-items-center me-4'>
            <div className='border border-black rounded p-2 shagow-lg text-center' style={{ minWidth: "100px" }}>
                <span style={{ color: timeLeft <= 5 ? "red" : "inherit" }} className='fw-bold fs-4'>{timeLeft > 0 ? timeLeft : "⏳ Time's Up!"}</span>
            </div>
        </div>
    )
}

export default Timer