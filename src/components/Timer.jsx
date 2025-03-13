import React, { useEffect, useState } from 'react'

const Timer = ({start}) => {
    const [timeLeft, setTimeLeft] = useState(15)
    useEffect(() => {
        if (!start|| timeLeft <= 0) return;
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1)
        }, 1000)
        return () => clearInterval(timer)
    }, [start,timeLeft])
    return (
        <div className='d-flex justify-content-end align-items-center me-4'>
            <div className='border border-black rounded p-2 shagow-lg text-center' style={{ minWidth: "100px"}}>
                <span style={{color:timeLeft<=5 ? "red" : "inherit"}} className='fw-bold fs-4'>{timeLeft > 0 ? timeLeft : "⏳ Time's Up!"}</span>
            </div>
        </div>
    )
}

export default Timer