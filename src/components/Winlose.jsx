import React, { useState } from 'react'
import loseImg from '../assets/pageNotFound.png'
import winImg from '../assets/happyGhost.png'
import { addOnTimeApi, getHintApi, pauseTimeApi, skipGiftApi } from '../services/allApi';

const gifts = [
    { name: "⏭️ Skip Question", api: skipGiftApi },
    { name: "⏳ Extra Time (10s)", api: addOnTimeApi },
    { name: "⏸️ Pause Time", api: pauseTimeApi },
    { name: "💡 Hint", api: getHintApi }
];
const Winlose = ({ isWin }) => {
    const [rewardClaimed, setRewardClaimed] = useState(false);
    const [gift, setGift] = useState(null);

    const handleClaimReward = async () => {
        const randomGift = gifts[Math.floor(Math.random() * gifts.length)];
        setGift(randomGift.name);
        setRewardClaimed(true);

        try {
            if(sessionStorage.getItem('token')){
                let token =sessionStorage.getItem('token')
                console.log(token);
                const reqHeaders={
                    "Authorization":`Bearer ${token}`
                }
               let result= await randomGift.api(reqHeaders);
               console.log(result);
               
            console.log(`Reward "${randomGift.name}" successfully saved to database!`);
            }
            // Call the API function dynamically
            
        } catch (error) {
            console.error(`Error saving reward: ${randomGift.name}`, error);
        }
    };
    return (
        <>
            <div className='d-flex justify-content-center align-items-center ' style={{ backgroundColor: '#BFEAF5' }}>
                <div className='border rounded d-flex flex-wrap justify-content-evenly align-items-center w-100' style={{ maxWidth: '900px' }}>
                    <img width={'50%'} src={isWin ? winImg : loseImg} alt={isWin ? "Winner celebration" : "Losing game"} className='img-fluid' />
                    <div className='py-3 text-center' style={{ width: '45%' }}>
                        <h2 >{isWin ? " You Win! 🎉" : "You Lose!"}</h2>
                        <p>{isWin ? "Congratulations" : "Better Luck Next Time"}</p>
                        {isWin && !rewardClaimed && (
                            <button onClick={handleClaimReward} className='btn  mt-3'>
                                <span ><img width={'130px'} src="https://assets-v2.lottiefiles.com/a/e53c307c-eb5e-11ef-8459-332c6d8a4e78/g8g1PBKIJY.gif" alt="" /></span><br /> Claim Your Reward
                            </button>
                        )}

                        {rewardClaimed && (
                            <div className="d-flex flex-column align-items-center mt-3 back-img" >
                                <p className="text-success mt-3">🎉 You won: <strong>{gift}</strong>!</p>
                            </div>
                        )}
                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default Winlose