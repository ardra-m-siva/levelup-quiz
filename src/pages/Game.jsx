import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Timer from '../components/Timer'
import { fetchQuestionsApi, getProgressOfSubject } from '../services/allApi';
import { Spinner } from 'react-bootstrap';
import Gifts from '../components/Gifts';
import { currentLevelContext, currentTopicContext, isAnswerRightContext } from '../context/subjectContext';

const Game = () => {
    const [questions, setQuestions] = useState([]); // Store fetched questions
    const [isLoaded, setIsLoaded] = useState(false); // true if the questions loaded
    const [selectedAnswer, setSelectedAnswer] = useState("")
    const [correctAnswer, setCorrectAnswer] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState(15);
    const [isPaused, setIsPaused] = useState(false);


    // for hints in the gifts
    const [hint, setHint] = useState("")
    const [hintClicked, setHintClicked] = useState(false);
    const navigate = useNavigate()
    const didFetch = useRef(false)
    const location = useLocation()
    const [isCorrect, setIsCorrect] = useState(false)

    const { subject, title, difficulty } = location.state
    const [progressData, setProgressData] = useState({ questionNo: 0, questions: "" })
    const { cTopic, setCTopic } = useContext(currentTopicContext)
    const { level, setLevel } = useContext(currentLevelContext)
    const { isRight, setIsRight } = useContext(isAnswerRightContext)


    useEffect(() => {
        const fetchProgress = async () => {
            let token = sessionStorage.getItem('token')
            const reqHeader = {
                "Authorization": `Bearer ${token}`
            }
            const result = await getProgressOfSubject(reqHeader, subject)
            if (result.status == 200) {
                setLevel(result.data.level)
            }
        }
        fetchProgress()
    }, [subject])

    useEffect(() => {
        setTimeLeft(15); //Reset timer to initial value when the question changes
    }, [currentQuestionIndex]);

    useEffect(() => {
        if (!didFetch.current) {
            didFetch.current = true;
            fetchQuestions();
        }
        setCTopic(subject)
    }, []);

    const fetchQuestions = async () => {
        try {
            const response = await fetchQuestionsApi(difficulty, subject)
            setQuestions(response.data);
            setProgressData({ ...progressData, questions: response.data })
            setIsLoaded(true);
        } catch (error) {
            console.error("Error fetching questions:", error);
        }
    };

    const handleAnswer = async (selectedKey) => {
        setHint("")
        const currentQuestion = questions[currentQuestionIndex]
        const correctAns = Object.entries(currentQuestion.correct_answers).filter(([key, value]) => value == "true").map(([key]) => key.replace("_correct", ""))
        setCorrectAnswer(correctAns)
        const isCorrectAnswer = correctAns.includes(selectedKey);
        setSelectedAnswer(selectedKey);
        setIsCorrect(isCorrectAnswer);
        setIsRight(isCorrectAnswer);

        setTimeout(async () => {
            if (isCorrectAnswer) {
                if (currentQuestionIndex < questions.length - 1) {
                    setCurrentQuestionIndex(currentQuestionIndex + 1);
                    setCorrectAnswer("");
                    setProgressData({ ...progressData, questionNo: currentQuestionIndex + 1 })

                } else {
                    navigate('/progress', { state: progressData })
                    setCurrentQuestionIndex(0)
                }
            } else {
                navigate('/progress', { state: progressData })
                setCurrentQuestionIndex(0);
            }
            // Reset answer state
            setSelectedAnswer("");
            setIsCorrect(false);

        }, 1000);
    }

    const handleTimeUp = () => {
        navigate('/progress', { state: progressData });
        setCurrentQuestionIndex(0);
    };

    const handleNavigation = () => {
        navigate('/progress', { state: progressData })
    }

    const handleTheHints = () => {
        setHintClicked(true)
        const currentHint = questions[currentQuestionIndex].tip;
        if (currentHint && currentHint.trim() !== "") {
            setHint(currentHint);
        } else {
            setHint(""); // no hint
        }
    }

    return (
        <>
            <div className=' min-vh-100' style={{ paddingBottom: '80px' }}>
                <nav style={{ borderRadius: '0px 0px 300px 300px', backgroundColor: '#09585b' }} className='text-dark'>
                    {/* back button */}
                    <div className='p-2 d-flex justify-content-between'>
                        <Link to={'/dashboard'} className='btn text-start'><i className="fa-solid fa-arrow-left text-light fa-xl "></i></Link>
                        {/* help button */}
                        <Link to={'/about'} className='btn'><i className="fa-solid fa-circle-info fa-2xl text-light"></i></Link>
                    </div>
                    {/* level  */}
                    <h2 className='text-center text-light pb-3 fw-bold'>Level <span>{level}</span></h2>
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
                            Subject: <span>{title ? title : (subject ? subject : "General")}</span>
                        </div>
                        {/* difficulty level */}
                        <div className='col '>
                            <div className='text-center text-white' style={{ backgroundColor: '#11999E', padding: '8px' }}>
                                Difficulty Level : <span>{difficulty.toUpperCase()}</span>
                            </div>
                        </div>
                        {/* timer */}
                        <div className="col">
                            <Timer start={isLoaded} handleTimeUp={handleTimeUp} timeLeft={timeLeft} setTimeLeft={setTimeLeft} key={currentQuestionIndex} isPaused={isPaused} />
                        </div>
                    </div>
                </div>
                <div className='border border-dark rounded mx-5 mt-4 '>
                    {/* question area */}
                    {
                        isLoaded ? (
                            questions?.length > 0 ? (
                                <>
                                    <h4 className='my-4'>Q. {questions[currentQuestionIndex].question}</h4>
                                    {/* Answer choices */}
                                    <div className='row justify-content-center'>
                                        <div style={{ width: '70%' }} className="my-4 col-md-10 col-12">
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
                                                            color: selectedAnswer === key || (!isCorrect && correctAnswer.includes(key)) ? "white" : "inherit",
                                                            transition: "background 0.3s ease"
                                                        }}
                                                        disabled={selectedAnswer != ""} >
                                                        {value}
                                                    </button>
                                                ))}
                                        </div>
                                    </div>
                                </>
                            ) : <p className="text-center">No questions available Please Restart Game</p>
                        ) :
                            <div className="d-flex justify-content-center align-items-center m-5">
                                <Spinner animation="border" variant="dark" />
                            </div>
                    }
                </div>

                {hintClicked && (
                    <div className='my-4 text-center'>
                        {hint ? (
                            <h5>Tip: <span className='text-success'>{hint}</span></h5>
                        ) : (
                            <h5 className='text-danger'>Tip is not present. Better luck next time!</h5>
                        )}
                    </div>
                )}

                <div className='d-flex justify-content-center'>
                    <Gifts setTimeLeft={setTimeLeft} setCurrentQuestionIndex={setCurrentQuestionIndex} handleNavigation={handleNavigation} handleTheHints={handleTheHints} setIsPaused={setIsPaused} />
                </div>
            </div>
        </>
    )
}

export default Game