import React from 'react'
import { Link } from 'react-router-dom'

const Game = () => {
    return (
        <>
            <div className='bg-dark min-vh-100'>
                <nav style={{ borderRadius: '0px 0px 300px 300px', backgroundColor: '#00FFFF' }} className=' text-dark'>
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
                                <div key={index} className="dot" style={{ width: "16px",height: "16px", borderRadius: "50%", background: index < 6 ? "#30e3ca" : "#e4f9f5",   border: "2px solid #11999e", transition: "background 0.3s ease"}}>
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* left end */}
                    {/* subjet /game name  */}

                    {/* middle  */}
                    {/* timer */}
                    {/* difficulty level */}

                    {/* right end  */}
                    {/* clear button */}
                </div>
                <div>
                    {/* question area */}

                </div>
                <div>
                    {/* previous */}
                    {/* <button
                            className="btn mt-4 px-4 py-2 fw-bold"
                            style={{
                                background: "linear-gradient(90deg, #30e3ca, #11999e)",
                                color: "white",
                                borderRadius: "30px",
                                border: "none",
                            }}
                            onClick={7}
                            disabled={8 === 10}
                        >
                            Previous Question
                        </button> */}
                    {/* next button */}
                    {/* <button
                            className="btn mt-4 px-4 py-2 fw-bold"
                            style={{
                                background: "linear-gradient(90deg, #30e3ca, #11999e)",
                                color: "white",
                                borderRadius: "30px",
                                border: "none",
                            }}
                            onClick={9}
                            disabled={8 === 10}
                        >
                            Next Question
                        </button> */}
                </div>
                <div>
                    {/* total hints logo */}
                </div>
            </div>
        </>
    )
}

export default Game