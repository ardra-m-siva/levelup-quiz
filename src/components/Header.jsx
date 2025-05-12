import React, { useEffect, useState } from 'react'
import { Button, Card, Offcanvas } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import Profile from './Profile'
import userProfileImg from '../assets/userProfile.jpg'
import serverUrl from '../services/serverUrl'



const Header = () => {
    const [isLogin, setIsLogin] = useState(false)
    const [show, setShow] = useState(false);
    const [updatedProfileImg, setUpdatedProfileImg] = useState("")
    const location = useLocation()

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        const data = JSON.parse(sessionStorage.getItem('user'))
        if (data) {
            setIsLogin(true)
            setUpdatedProfileImg(data.profilePic)
        }
    }, [])

    return (
        <>
            <div className='container d-flex justify-content-between flex-wrap' style={{ background: '#11999E' }}>
                <Link to={'/'} className='p-4 text-light fs-4 fw-bold text-decoration-none'> LevelUp <i className="fa-solid fa-terminal"></i></Link>
                { isLogin ?
                    <div className='d-flex flex-wrap align-items-center justify-content-end gap-1'>
                        <Link to={'/about'} className='btn btn-outline-light me-3 fw-bold'>About</Link>
                        <Link to={'/contact'} className='btn btn-outline-light me-3 fw-bold'>Contact</Link>
                        {/* <Link to={'/dashboard'} className='btn btn-outline-light me-3 fw-bold' >Dasboard</Link> */}
                        {location.pathname !== "/dashboard" && (
                            <Link to={'/dashboard'} className='btn btn-outline-light me-3 fw-bold'>Dashboard</Link>
                        )}
                        {location.pathname !== "/" && (
                            <Link to={'/'} className='btn btn-outline-light me-3 fw-bold'>Home</Link>
                        )}
                        <Button onClick={handleShow} aria-controls="example-collapse-text" aria-expanded={open} variant="link" className='px-0' >
                            <img src={updatedProfileImg ? `${serverUrl}/uploads/${updatedProfileImg}` : userProfileImg} alt="Profile" width={'50px'} className='rounded-circle' style={{ cursor: 'pointer', border: '3px solid white' }} />
                        </Button>
                        <Offcanvas show={show} onHide={handleClose} placement='end' className="text-white">
                            <Offcanvas.Header closeButton style={{ backgroundColor: "#11999E" }}>
                                <Offcanvas.Title>Profile</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Card>
                                    <Profile />
                                </Card>
                                <div className='text-dark rounded text-center mx-4' >
                                    <Link to={'/history'} className='btn btn-secondary my-3 py-2 w-100'><h6>Track Progress <i className="fa-solid fa-chart-simple"></i></h6></Link>
                                </div>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </div>

                    :

                    <div className='d-flex flex-wrap justify-content-end gap-2'>
                        <Link to={'/about'} className='btn btn-outline-light me-3 my-4 fw-bold'>About</Link>
                        <Link to={'/contact'} className='btn btn-outline-light me-3 my-4 fw-bold'>Contact</Link>
                        <Link to={'/login'} className='my-4 btn btn-outline-light fw-bold login-btn'>Login</Link>
                        <Link to={'/register'} className='my-4 mx-3 btn btn-outline-light fw-bold login-btn'>SignUp</Link>
                    </div>
                }
            </div>
        </>
    )
}

export default Header