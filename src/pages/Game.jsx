import React from 'react'
import { Link } from 'react-router-dom'
import Timer from '../components/Timer'

const Game = () => {
    return (
        <>
            <div className='bg-dark min-vh-100'>
                <nav style={{ borderRadius: '0px 0px 300px 300px', backgroundColor: '#00FFFF' }} className='text-dark'>
                    {/* back button */}
                    <div className='p-2 d-flex justify-content-between'>
                        <Link to={'/dashboard'} className='btn text-start'><i className="fa-solid fa-arrow-left text-dark fa-xl "></i></Link>
                        {/* help button */}
                        <div className='btn'><i className="fa-solid fa-circle-info fa-2xl text-dark"></i></div>
                    </div>
                    {/* level  */}
                    <h2 className='text-center pb-3 fw-bold'>Level <span>1</span></h2>
                </nav>

                <div className='text-light'>
                    {/* current question number out of total */}
                    <div className="container text-center mt-3">
                        <h2 className="mb-3 ">
                            Question <span style={{ color: "#30e3ca" }}>{6}</span> of{" "}
                            <span style={{ color: "#11999e" }}>{10}</span>
                        </h2>
                        <div className="d-flex justify-content-center gap-2 mt-2">
                            {Array.from({ length: 10 }, (_, index) => (
                                <div key={index} className="dot" style={{ width: "16px", height: "16px", borderRadius: "50%", background: index < 6 ? "#30e3ca" : "#e4f9f5", border: "2px solid #11999e", transition: "background 0.3s ease" }}>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='row mx-3 mt-3'>
                        {/* subject /game name  */}
                        <div className='col ms-4 fs-4'>
                            Subject: <span>JavaScript</span>
                        </div>
                        {/* difficulty level */}
                        <div className='col '>
                            <div  className='text-center' style={{ backgroundColor: '#09585b', padding: '8px' }}>
                                Difficulty Level : <span>HARD</span>
                            </div>
                        </div>
                        {/* timer */}
                        <div className="col">
                            <Timer/>
                        </div>
                    </div>
                </div>
                <div className='border rounded mx-5 mt-4' style={{ height: '200px' }}>
                        {/* question area */}
                    </div>  

                <div className='d-flex justify-content-center'>
                    <div className='position-fixed bottom-0 w-50 d-flex align-items-center justify-content-evenly text-white' style={{ height: '50px', backgroundColor: '#09585b' , zIndex:20,  padding: "10px 0" }}>
                        {/* total hints logo */}
                            <i class="fa-regular fa-clock fa-xl"></i>
                            <i class="fa-solid fa-clock-rotate-left fa-xl"></i>
                            <i class="fa-solid fa-circle-pause fa-xl"></i>
                            <i class="fa-solid fa-forward fa-xl"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Game