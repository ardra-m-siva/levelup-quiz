import React from 'react'
import loseImg from '../assets/pageNotFound.png'
import winImg from '../assets/happyGhost.png'

const Winlose = ({ isWin }) => {
    return (
        <>
            <div className='min-vh-100 bg-dark text-white d-flex justify-content-center align-items-center'>
                <div className='border rounded d-flex flex-wrap justify-content-evenly align-items-center p-2' style={{ width: '80%', maxWidth: '900px' }}>
                    <img width={'50%'} src={isWin ? winImg : loseImg} alt={isWin ? "Winner celebration" : "Losing game"} className='img-fluid' />
                    <div className='text-white px-4 py-3 text-center' style={{ width: '45%' }}>
                        <h1 >{isWin ? "🎉 You Win!" : "You Lose!"}</h1>
                        <p>{isWin ? "Congratulations" : "Don't Give Up! Try Again."}</p>
                        <div className='d-flex justify-content-around mt-3'>
                            <button className='btn btn-danger' aria-label="Exit Game">Exit</button>
                            <button className='btn btn-success' aria-label={isWin ? "Next Level" : "Restart Game"}>{isWin ? "Next" : "Restart"}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Winlose