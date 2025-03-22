import React from 'react'
import loseImg from '../assets/pageNotFound.png'
import winImg from '../assets/happyGhost.png'

const Winlose = ({ isWin }) => {
    return (
        <>
            <div className='d-flex justify-content-center align-items-center 'style={{backgroundColor:'#BFEAF5'}}>
                <div className='border rounded d-flex flex-wrap justify-content-evenly align-items-center w-100' style={{  maxWidth: '900px' }}>
                    <img width={'50%'} src={isWin ? winImg : loseImg} alt={isWin ? "Winner celebration" : "Losing game"} className='img-fluid' />
                    <div className='py-3 text-center' style={{ width: '45%' }}>
                        <h2 >{isWin ? " You Win! 🎉" : "You Lose!"}</h2>
                        <p>{isWin ? "Congratulations" : "Better Luck Next Time"}</p>
                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default Winlose