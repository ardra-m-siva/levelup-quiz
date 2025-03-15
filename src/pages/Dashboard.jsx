import React, { useState } from 'react'
import Streak from '../components/Streak'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom';


const subjects = ["Math", "Science", "History", "Programming", "English"];
const difficultyLevels = ["Easy", "Medium", "Hard"];

const Dashboard = () => {

    const [selectedSubject, setSelectedSubject] = useState(null);
    const [selectedDifficulty, setSelectedDifficulty] = useState(null);
    const navigate = useNavigate();

    const handleStartQuiz = () => {
        if (selectedSubject && selectedDifficulty) {
            // navigate(`/quiz?subject=${selectedSubject}&difficulty=${selectedDifficulty}`);
        } else {
            alert("Please select both subject and difficulty level!");
        }
    };
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

            {/* <div className="dashboard-container text-center p-4">
                <h2 className="fw-bold mb-4">Select a Subject</h2>
                <div className="d-flex flex-wrap justify-content-center">
                    {subjects.map((subject, index) => (
                        <button
                            key={index}
                            className={`subject-card m-2 p-3 ${selectedSubject === subject ? "selected" : ""}`}
                            onClick={() => setSelectedSubject(subject)}
                        >
                            {subject}
                        </button>
                    ))}
                </div>

                <h3 className="fw-bold mt-4">Select Difficulty</h3>
                <div className="d-flex justify-content-center mt-2">
                    {difficultyLevels.map((level, index) => (
                        <button
                            key={index}
                            className={`difficulty-btn m-2 p-2 ${selectedDifficulty === level ? "selected" : ""}`}
                            onClick={() => setSelectedDifficulty(level)}
                        >
                            {level}
                        </button>
                    ))}
                </div>

                <button className="start-btn mt-4 p-3" onClick={handleStartQuiz}>
                    Start Quiz
                </button>

                <style>
                    {`
          .subject-card, .difficulty-btn {
            border: none;
            background: #30E3CA;
            color: white;
            font-size: 18px;
            border-radius: 10px;
            cursor: pointer;
            transition: 0.3s;
          }
          .subject-card:hover, .difficulty-btn:hover, .selected {
            background: #11999E;
          }
          .start-btn {
            background: #25374D;
            color: white;
            font-size: 20px;
            border-radius: 15px;
            cursor: pointer;
            transition: 0.3s;
          }
          .start-btn:hover {
            opacity: 0.9;
          }
        `}
                </style>
            </div> */}
            <Footer />

        </div>
    )
}

export default Dashboard