import React, { useEffect, useState } from 'react'
import { getAllGiftsApi } from '../services/allApi';

const Gifts = () => {

    const [gifts, setGifts] = useState({
        extraTime: 0,  // Example: User has 2 extra time gifts
        hints: 0,      // Example: 3 hints available
        pause: 0,      // Example: 1 pause time
        skip: 0        // Example: 2 skip question gifts
    });

    useEffect(() => {
        getAllGifts()
    }, [])

    const getAllGifts = async () => {
        try {
            let token = sessionStorage.getItem('token')
            const reqHeaders = {
                "Authorization": `Bearer ${token}`
            }
            const result = await getAllGiftsApi(reqHeaders)
            console.log(result.data);
            setGifts({
                ...gifts,
                extraTime:result.data.addOnTime,
                hints:result.data.hint,
                pause:result.data.pauseTime,
                skip:result.data.skipQuestion
            })
        } catch (err) {
            console.log(err);
        }
    }

    const handleAddOnTime = async () => {

    };

    // hint
    const handleHints = () => {
        console.log("Hints if available time");
    };

    const handlePauseTime = () => {
        console.log("Paused time");
    };

    const handleSkipQuestion = () => {
        console.log("Skipped question");
    };

    return (
        <>
            <div className='position-fixed bottom-0 w-50 d-flex align-items-center justify-content-evenly text-white' style={{ height: '60px', backgroundColor: '#11999E', zIndex: 20, padding: "10px 0" }}>
                {/* total hints logo */}
                <button onClick={handleAddOnTime} className='btn text-white position-relative'>
                    <i className="fa-regular fa-clock fa-xl"></i>
                    {gifts.extraTime > 0 && <span className="badge bg-danger position-absolute top-0 start-100 translate-middle"> {gifts.extraTime} </span>}
                </button>
                <button onClick={handleHints} className='btn text-white position-relative'>
                    <i className="fa-solid fa-lightbulb fa-xl"></i>
                    {gifts.hints > 0 && <span className="badge bg-danger position-absolute top-0 start-100 translate-middle"> {gifts.hints} </span>}
                </button>
                <button onClick={handlePauseTime} className='btn text-white position-relative'>
                    <i className="fa-solid fa-circle-pause fa-xl"></i>
                    {gifts.pause > 0 && <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">{gifts.pause}</span>}
                </button>
                <button onClick={handleSkipQuestion} className='btn text-white position-relative'>
                    <i className="fa-solid fa-forward fa-xl"></i>
                    {gifts.skip > 0 && <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">{gifts.skip}</span>}
                </button>
            </div>
        </>
    )
}

export default Gifts