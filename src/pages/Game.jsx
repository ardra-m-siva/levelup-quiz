import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Timer from '../components/Timer'
import { fetchQuestionsApi } from '../services/allApi';
import { Spinner } from 'react-bootstrap';
import Gifts from '../components/Gifts';

const Game = () => {
    const navigate=useNavigate()
    const [currentLevel, setCurrentLevel] = useState(1)
    const [progressData,setProgressData]=useState({questionNo:0,level:currentLevel,questions:""})
    const [questions, setQuestions] = useState([]); // Store fetched questions
    const [isLoaded, setIsLoaded] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false)
    const [selectedAnswer, setSelectedAnswer] = useState("")
    const [correctAnswer, setCorrectAnswer] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Track current question
    const didFetch=useRef(false)    

    const location = useLocation()
    const { subject ,title , difficulty} = location.state


    useEffect(() => {
        if ( !didFetch.current) {
            didFetch.current = true;
            fetchQuestions();
        }
    }, []);

    const fetchQuestions = async () => {
        try {
            const response = await fetchQuestionsApi(difficulty, subject)
            setQuestions(response.data);
            console.log(response.data);
            
            setProgressData({...progressData,questions:response.data})
            setIsLoaded(true);
        } catch (error) {
            console.error("Error fetching questions:", error);
        }
    };

    const handleAnswer = async (selectedKey) => {
        const currentQuestion = questions[currentQuestionIndex]
        // const correctAns= currentQuestion.correct_answer
        const correctAns = Object.entries(currentQuestion.correct_answers).filter(([key, value]) => value == "true").map(([key]) => key.replace("_correct", ""))
        setCorrectAnswer(correctAns)
        const isCorrectAnswer = correctAns.includes(selectedKey);
        setSelectedAnswer(selectedKey);
        setIsCorrect(isCorrectAnswer);

        setTimeout(async () => {
            if (isCorrectAnswer) {
                if (currentQuestionIndex < questions.length - 1) {
                    setCurrentQuestionIndex(currentQuestionIndex + 1);
                    setCorrectAnswer("");
                    setProgressData({...progressData,questionNo:currentQuestionIndex+1})
                       
                } else {
                    setCurrentLevel(currentLevel + 1)
                    // await fetchQuestions()
                    navigate('/progress',{state:progressData})
                    setCurrentQuestionIndex(0)
                }
            } else {
                navigate('/progress',{state:progressData})
                // await fetchQuestions()
                setCurrentQuestionIndex(0);
            }
            // Reset answer state
            setSelectedAnswer("");
            setIsCorrect(false);

        }, 1000);
    }

    const handleTimeUp = () => {
        // Handle time-up scenario (e.g., navigate to progress page)
        navigate('/progress' , {state:progressData}); 
        setCurrentQuestionIndex(0);
    };
    
    return (
        <>
            <div className=' min-vh-100'>
                <nav style={{ borderRadius: '0px 0px 300px 300px', backgroundColor: '#09585b' }} className='text-dark'>
                    {/* back button */}
                    <div className='p-2 d-flex justify-content-between'>
                        <Link to={'/dashboard'} className='btn text-start'><i className="fa-solid fa-arrow-left text-light fa-xl "></i></Link>
                        {/* help button */}
                        <div className='btn'><i className="fa-solid fa-circle-info fa-2xl text-light"></i></div>
                    </div>
                    {/* level  */}
                    <h2 className='text-center text-light pb-3 fw-bold'>Level <span>{currentLevel}</span></h2>
                </nav>

                <div >
                    {/* current question number out of total */}
                    <div className="container text-center mt-3">
                        <h2 className="mb-3 ">
                            Question <span style={{ color: "#30e3ca" }}>{currentQuestionIndex + 1}</span> of{" "}
                            <span style={{ color: "#09585b" }}>{10}</span>
                        </h2>
                        <div className="d-flex justify-content-center gap-2 mt-2">
                            {Array.from({ length: 10 }, (_, index) => (
                                <div key={index} className="dot" style={{ width: "16px", height: "16px", borderRadius: "50%", background: index < currentQuestionIndex + 1 ? "#30e3ca" : "#e4f9f5", border: "2px solid #11999e", transition: "background 0.3s ease" }}>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='row mx-3 mt-3'>
                        {/* subject /game name  */}
                        <div className='col ms-4 fs-4'>
                            Subject: <span>{title ? title : (subject?subject: "General")}</span>
                        </div>
                        {/* difficulty level */}
                        <div className='col '>
                            <div className='text-center text-white' style={{ backgroundColor: '#11999E', padding: '8px' }}>
                                Difficulty Level : <span>{difficulty.toUpperCase()}</span>
                            </div>
                        </div>
                        {/* timer */}
                        <div className="col">
                            <Timer start={isLoaded} handleTimeUp={handleTimeUp}  key={currentQuestionIndex} />
                        </div>
                    </div>
                </div>
                <div className='border border-dark rounded mx-5 mt-4 '>
                    {/* question area */}
                    {
                        isLoaded ? (
                            questions?.length > 0 ? (
                                <>
                                    <h4 className='m-4'>Q. {questions[currentQuestionIndex].question}</h4>
                                    {/* Answer choices */}
                                    <div style={{ width: '100%' }} className="my-4 ">
                                        {Object.entries(questions[currentQuestionIndex].answers)
                                            .filter(([key, value]) => value) //removes null values
                                            .map(([key, value]) => (
                                                <button
                                                    key={key}
                                                    onClick={() => handleAnswer(key)}
                                                    className="btn btn-outline-dark d-block mx-auto my-3"
                                                    style={{
                                                        width: '90%',
                                                        backgroundColor: selectedAnswer === key ? (isCorrect ? "green" : "red") : (!isCorrect && correctAnswer.includes(key) ? "green" : "transparent"), 
                                                        color: selectedAnswer === key || (!isCorrect && correctAnswer.includes(key))? "white" : "inherit",
                                                        transition: "background 0.3s ease"
                                                    }}
                                                    disabled={selectedAnswer != ""} >
                                                    {value}
                                                </button>
                                            ))}
                                    </div>
                                </>
                            ) : <p className="text-center">No questions available</p> 
                        ) :
                            <div className="d-flex justify-content-center align-items-center m-5">
                                <Spinner animation="border" variant="dark" />
                            </div>
                    }
                </div>

                <div className='d-flex justify-content-center'>
                    <Gifts/>
                </div>
            </div>
        </>
    )
}

export default Game