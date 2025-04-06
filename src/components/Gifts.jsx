import React, { useEffect, useState } from 'react'
import { getAllGiftsApi, removeAddTimeGiftsApi, removeHintGiftsApi, removePauseGiftsApi, removeSkipGiftsApi } from '../services/allApi';

const Gifts = ({ setTimeLeft, setCurrentQuestionIndex, handleNavigation, handleTheHints }) => {
    const [reqHeaders, setRequestHeaders] = useState({})

    const [gifts, setGifts] = useState({
        extraTime: 0,
        hints: 0,
        pause: 0,
        skip: 0
    });

    useEffect(() => {
        let token = sessionStorage.getItem('token')
        const reqHeader = {
            "Authorization": `Bearer ${token}`
        }
        setRequestHeaders(reqHeader)
        getAllGifts(reqHeader)
    }, [])

    const getAllGifts = async (reqHeader) => {
        try {
            const result = await getAllGiftsApi(reqHeader)
            console.log(result.data);
            setGifts({
                extraTime: result.data.addOnTime,
                hints: result.data.hint,
                pause: result.data.pauseTime,
                skip: result.data.skipQuestion
            })
        } catch (err) {
            console.log(err);
        }
    }

    const handleAddOnTime = async () => {
        if (gifts.extraTime > 0) {
            try {
                const result = await removeAddTimeGiftsApi(reqHeaders)
                console.log(result.data);
                if (result.status == 200) {
                    getAllGifts(reqHeaders)
                    setTimeLeft(prevTime => {
                        return prevTime + 10;
                    })
                }
            } catch (err) {
                console.log(err);
            }
        } else {
            console.log("No extra time gifts available!");
        }
    };


    const handleHints = async () => {
        if (gifts.hints > 0) {
            try {
                const result = await removeHintGiftsApi(reqHeaders)
                if (result.status == 200) {
                    // handle the hint
                    getAllGifts(reqHeaders)
                    handleTheHints()
                }
            } catch (err) {
                console.log(err);
            }
        } else {
            console.log("No hints gifts available!");
        }
    };

    const handlePauseTime = async () => {
        if (gifts.pause > 0) {
            try {
                const result = await removePauseGiftsApi(reqHeaders)
                if (result.status == 200) {
                    // handle the pause
                    getAllGifts(reqHeaders)
                    

                }
            } catch (err) {
                console.log(err);
            }
        } else {
            console.log("No pause gifts available!");
        }
    };

    const handleSkipQuestion = async () => {
        if (gifts.skip > 0) {
            try {
                const result = await removeSkipGiftsApi(reqHeaders)
                if (result.status == 200) {
                    // handle the skip
                    getAllGifts(reqHeaders)
                    setCurrentQuestionIndex(prevQuestion => {
                        if (prevQuestion == 9) {
                            handleNavigation()
                        } else {
                            return prevQuestion + 1;
                        }
                    })
                }
            } catch (err) {
                console.log(err);
            }
        } else {
            console.log("No skip gifts available!");
        }
    };

    return (
        <>
            <div className='position-fixed bottom-0 mt-auto w-50 d-flex align-items-center justify-content-evenly text-white' style={{ height: '60px', backgroundColor: '#11999E', zIndex: 20, padding: "10px 0" }}>
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