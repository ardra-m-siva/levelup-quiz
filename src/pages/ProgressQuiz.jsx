import React, { useContext, useEffect, useRef, useState } from 'react'
import { Button, Modal, ProgressBar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import Winlose from '../components/Winlose';
import { addProgressOfSubject } from '../services/allApi';
import { currentLevelContext, currentTopicContext, isAnswerRightContext } from '../context/subjectContext';

const ProgressQuiz = () => {
    const { level, setLevel } = useContext(currentLevelContext)
    const { cTopic, setCTopic } = useContext(currentTopicContext)
    const [show, setShow] = useState(false);
    const [grade, setGrade] = useState({
        scored: "",
        description: ""
    });
    const { isRight, setIsRight } = useContext(isAnswerRightContext)
    const apiCallDone = useRef(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        handleShow()
    }, [])

    const [isWin, setIsWin] = useState(false)
    const location = useLocation()
    const { questionNo, questions } = location.state //no of correct answer is in the questionNo say 7
    const visibleQuestion = questions.slice(0, questionNo + 1)  // need to visble the current question answer which gone wrong  say 8

    let percent = (isWin ? questionNo + 1 : questionNo) * 10

    useEffect(() => {
        const win = (questionNo == 9) && isRight;
        setIsWin(win);

        console.log("inside useEffect of Progres Quiz, win=",win, typeof win);
        
         if (cTopic && level && typeof win === "boolean" && !apiCallDone.current) {
            apiCallDone.current = true; // Mark API call as done
            console.log("inside useEffect of Progress Quiz, win=", win, typeof win);
            sentProgressData(win);
        }


        const outOfTen = win ? questionNo + 1 : questionNo;

        // Set grade
        if (outOfTen >= 9) setGrade({ scored: "A+", description: "Excellent" });
        else if (outOfTen >= 8) setGrade({ scored: "A", description: "Very Good" });
        else if (outOfTen >= 7) setGrade({ scored: "B", description: "Good" });
        else if (outOfTen >= 6) setGrade({ scored: "C", description: "Average" });
        else if (outOfTen >= 5) setGrade({ scored: "D", description: "Below Average" });
        else setGrade({ scored: "F", description: "Fail" });

    }, [questionNo, isRight, cTopic, level])

    const sentProgressData = async (win) => {
        try {
            let token = sessionStorage.getItem('token')
            const reqHeader = {
                "Authorization": `Bearer ${token}`
            }

            if (!cTopic || !level || typeof win !== "boolean") {
                console.error("Missing required data:", { cTopic, level, win });
                return;
            }

            const reqBody = {
                subject: cTopic,
                level: level,
                isWin: win
            }
            console.log("sentProgressData called", { subject: cTopic, level, isWin });

            const result = await addProgressOfSubject(reqHeader, reqBody)
            if (result.status == 200) {
                console.log(result.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <div>
                {/* restart game & quit game */}
                <div className='container'>
                    <div className='text-light py-2' style={{ backgroundColor: '#11999E' }}>
                        <h2 className='text-center'>{isWin ? <span>Level {level} Completed</span> : <span>Level {level} Failed</span>}</h2>
                        <p className='text-center'>Quiz Information</p>
                    </div>
                    <div className='my-4 d-flex justify-content-evenly'>
                        <div>
                            <p>Correct Answer: {isWin ? questionNo + 1 : questionNo}</p>
                            <p>Total Questions: 10</p>
                            <p>Grade: {grade.scored}</p>
                        </div>
                        <div>
                            <p>Topic: {cTopic.toUpperCase()}</p>
                            <p >Score: <span className={percent > 50 ? 'text-success' : 'text-danger'} style={{ fontWeight: 700 }}>{percent}%</span></p>
                            <p>Description: {grade.description}</p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center my-5'><ProgressBar className='w-50' striped variant="success" now={percent} /></div>
                    <div className='d-flex justify-content-evenly'>
                        <Link onClick={() => sessionStorage.removeItem('claimedReward')} to={'/'} className='btn btn-danger'>Quit</Link>
                        <Link onClick={() => sessionStorage.removeItem('claimedReward')} to={'/dashboard'} className='btn btn-primary'>Restart</Link>
                    </div>
                    <hr className='my-5' />

                    <div>
                        <h3 className='text-center my-5'>Answers</h3>
                        <div>
                            <div className="card-body">
                                <ol>
                                    {
                                        visibleQuestion.length > 0 &&
                                        visibleQuestion.map((item, index) => (
                                            <li key={index}>
                                                <div>
                                                    <h6>{item.question}</h6>
                                                    <p>Correct Answers: <span className='text-success  fw-bolder'>{Object.entries(item.correct_answers).filter(([key, value]) => value === "true").map(([key]) => item.answers[key.replace("_correct", "")]).filter(Boolean).join(", ")}</span> </p>
                                                </div>
                                            </li>
                                        ))
                                    }
                                </ol>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton style={{ backgroundColor: "#11999E" }}>
                    <Modal.Title className='text-center text-white' >Level {level}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Winlose isWin={isWin} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose} style={{ backgroundColor: "#11999E" }}>
                        Ok
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ProgressQuiz