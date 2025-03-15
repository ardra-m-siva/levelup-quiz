import React, { useEffect, useState } from 'react'
import { Button, Modal, ProgressBar } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Winlose from '../components/Winlose';

const ProgressQuiz = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        handleShow()
    }, [])

    const [isWin, setIsWin] = useState(false)
    const location = useLocation()
    const { questionNo, level } = location.state
    console.log(questionNo);


    useEffect(() => {
        if (questionNo && (questionNo == 9)) {
            setIsWin(true)
        } else {
            setIsWin(false)
        }
    }, [questionNo])

    useEffect(() => {

    }, [])
    return (
        <>
            <div>
                {/* restart game & quit game */}
                <div className=''>
                    <ProgressBar className='w-50' striped variant="success" now={40} />
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