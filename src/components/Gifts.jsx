import React from 'react'
import { addOnTimeApi } from '../services/allApi';

const Gifts = () => {

    const handleAddOnTime = async() => {
        
    };

    // hint
    const handleReverseTime = () => {
        console.log("Reversed time");
    };

    const handlePauseTime = () => {
        console.log("Paused time");
    };

    const handleSkipQuestion = () => {
        console.log("Skipped question");
    };

    return (
        <>
            <div className='position-fixed bottom-0 w-50 d-flex align-items-center justify-content-evenly text-white' style={{ height: '50px', backgroundColor: '#11999E', zIndex: 20, padding: "10px 0" }}>
                {/* total hints logo */}
                <button onClick={handleAddOnTime} className='btn text-white'><i className="fa-regular fa-clock fa-xl"></i></button>
                <button onClick={handleReverseTime}  className='btn text-white'><i className="fa-solid fa-clock-rotate-left fa-xl"></i></button>
                <button onClick={handlePauseTime}  className='btn text-white'><i className="fa-solid fa-circle-pause fa-xl"></i></button>
                <button onClick={handleSkipQuestion}  className='btn text-white'><i className="fa-solid fa-forward fa-xl"></i></button>
            </div>
        </>
    )
}

export default Gifts