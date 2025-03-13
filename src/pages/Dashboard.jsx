import React from 'react'
import Streak from '../components/Streak'
import Footer from '../components/Footer'
import Header from '../components/Header'
const Dashboard = () => {
    return (
        <div>
            <Header />
            <div className='vh-100 pt-2 text-white'>
                <div className='container rounded py-4'>
                    <Streak />
                </div>
                <div className=" d-flex justify-content-center align-items-center  text-black">
                    <div className="border rounded p-4 text-center" style={{ width: "60%" }}>
                        <h1 className="mb-3">📜 Game Instructions</h1>
                        <ul className="text-start">
                            <li>You have <b>10 seconds</b> for each of the first 9 questions.</li>
                            <li>The <b>last question</b> has only <b>8 seconds</b>!</li>
                            <li>If you answer <b>correctly</b>, the next question appears automatically.</li>
                            <li>If you answer <b>wrongly</b>, the level restarts from <b>Question 1</b>.</li>
                            <li>The game tests your speed and accuracy. Good luck! 🎯</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default Dashboard