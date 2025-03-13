import React, { useEffect, useState } from 'react'
import { Button, Card, Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Profile from './Profile'

const Header = () => {
    const [isLogin, setIsLogin] = useState(false)
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        if (sessionStorage.getItem('user')) {
            setIsLogin(true)
        }
    }, [])
    return (
        <>
            <div className='container d-flex justify-content-between flew-wrap' style={{ background: '#11999E' }}>
                <Link to={'/'} className='p-4 text-light fs-4 fw-bold' style={{ textDecoration: 'none' }}> LevelUp <i class="fa-solid fa-terminal"></i></Link>
                {isLogin ?
                    <div className='d-flex align-items-center me-2'>
                        <Link to={'/dashboard'} className='btn border rounded text-white me-3 fw-bold' >Dasboard</Link>
                        <Button onClick={handleShow} aria-controls="example-collapse-text" aria-expanded={open} variant="link" >
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/048/926/084/small_2x/silver-membership-icon-default-avatar-profile-icon-membership-icon-social-media-user-image-illustration-vector.jpg" alt="Profile" width={'50px'} className='rounded-circle' />
                        </Button>
                        <Offcanvas show={show} onHide={handleClose} placement='end' className="text-white">
                            <Offcanvas.Header closeButton style={{ backgroundColor: "#11999E" }}>
                                <Offcanvas.Title>Profile</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Card>
                                    <Profile />
                                </Card>
                            </Offcanvas.Body>
                        </Offcanvas>

                    </div>

                    :
                    <div>
                        <Link to={'/login'} className='my-4 btn text-white border fw-bold login-btn'>Login</Link>
                        <Link to={'/register'} className='mx-4 btn text-white border fw-bold login-btn'>SignUp</Link>
                    </div>
                }
            </div>
        </>
    )
}

export default Header