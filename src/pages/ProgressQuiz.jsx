import React, { useEffect, useState } from 'react'
import { Button, Modal, ProgressBar } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Winlose from '../components/Winlose';

const ProgressQuiz = () => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        handleShow()
    }, [])

    const [isWin, setIsWin] = useState(false)
    const location = useLocation()
    const { questionNo, level, questions } = location.state
    const visibleQuestion = questions.slice(0, questionNo + 1)

    let percent = (isWin ? questionNo + 1 : questionNo) * 10
    useEffect(() => {
        if (questionNo && (questionNo == 9)) {
            setIsWin(true)
        } else {
            setIsWin(false)
        }

    }, [questionNo])

    return (
        <>
            <div>
                {/* restart game & quit game */}
                <div className='container'>
                    <div className='text-light py-2' style={{ backgroundColor: '#11999E' }}>
                        <h2 className='text-center'>Level {level} Completed</h2>
                        <p className='text-center'>Quiz Information</p>
                    </div>
                    <div className='my-4 d-flex justify-content-evenly'>
                        <div>
                            <p>Correct Answers: {isWin ? questionNo + 1 : questionNo}</p>
                            <p>Total Questions: 10</p>
                            <p>Suggestion:</p>
                        </div>
                        <div>
                            <p>Topic:</p>
                            <p >Score: <span className={percent > 50 ? 'text-success' : 'text-danger'} style={{ fontWeight: 700 }}>{percent}%</span></p>
                            <p>Grade:</p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center my-5'><ProgressBar className='w-50' striped variant="success" now={(isWin ? questionNo + 1 : questionNo) * 10} /></div>
                    <div className='d-flex justify-content-evenly'>
                        <Link to={'/'} className='btn btn-danger'>Quit</Link>
                        <Link to={'/dashboard'} className='btn btn-primary'>Restart</Link>
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