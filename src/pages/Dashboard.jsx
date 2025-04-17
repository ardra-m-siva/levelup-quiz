import React, { useState } from 'react'
import Streak from '../components/Streak'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate()
    const [subjectInfo, setSubjectInfo] = useState({ subject: "", title: "", difficulty: "easy" })
    function handleSubjectSelection() {
        navigate('/game', { state: subjectInfo })
    }

    return (
        <div>
            <Header />
            <div className='min-vh-100 pt-2 text-white' >
                <div className='container rounded py-4'>
                    <Streak />
                </div>
                <div className='container'>
                    <div className='row g-4 align-items-center' >
                        <div className='col-lg-6 d-flex flex-column justify-content-center align-items-center text-black'>
                            <div className='border rounded m-4 p-4 text-center w-100' >
                                <h3 className="fw-bold">Start Learning</h3>
                                <select value={subjectInfo.subject} onChange={e => setSubjectInfo({ ...subjectInfo, subject: e.target.value })} name="subject" id="" className='form-select my-3' >
                                    <option value="" disabled selected >Select Subject</option>
                                    {[  "Linux", "Bash", "Docker", "React", "NodeJs", "Next.Js", "VueJs", "MySQL", "HTML", "JavaScript", "Python", "Django" ].map((subject, index) => (
                                        <option key={index} value={subject.toLowerCase()}>
                                            {subject}
                                        </option>
                                    ))}
                                </select>
                                <select onChange={e => setSubjectInfo({ ...subjectInfo, difficulty: e.target.value })} name="difficulty" id="" className='form-select my-3 '>
                                    <option value="" selected disabled>Select Difficulty</option>
                                    <option value="easy">Easy</option>
                                    <option value="medium">Medium</option>
                                    <option value="hard">Hard</option>
                                </select>
                                <button onClick={handleSubjectSelection} className='btn w-25 text-light fw-bold' style={{ backgroundColor: '#11999E' }}>Start</button>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center align-items-center text-black">
                            <div className="border rounded p-4 text-center w-100">
                                <h1 className="fw-bold mb-3">📜 Game Instructions</h1>
                                <ul className="text-start">
                                    <li>You have <b>15 seconds</b> for each of the questions.</li>
                                    <li>If you answer <b>correctly</b>, the next question appears automatically.</li>
                                    <li>If you answer <b>wrongly</b> game over, the level restarts from <b>Question 1</b>.</li>
                                    <li>The game tests your speed and accuracy. Good luck!</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />

        </div>
    )
}

export default Dashboard