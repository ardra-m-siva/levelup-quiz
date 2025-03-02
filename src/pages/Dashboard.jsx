import React, { useState } from 'react'
import { Button, Card, Collapse } from 'react-bootstrap';
import Profile from '../../components/Profile';
import Streak from '../../components/Streak';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='bg-dark vh-100 pt-2 text-white'>
            <nav className='d-flex justify-content-between m-4'>
                <Link style={{ textDecoration: 'none' }} to={'/'}><h3 style={{ color: '#00FFFF' }} className='fw-bolder'>LevelUp Learn</h3></Link>
                <div className='position-relative'>
                    <Button onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open} variant="dark" className="border-0 p-0">
                        <div className='d-flex justify-content-end'>
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/048/926/084/small_2x/silver-membership-icon-default-avatar-profile-icon-membership-icon-social-media-user-image-illustration-vector.jpg" alt="Profile" className="rounded-circle shadow-lg"  height="50" width="50" border="2px solid white" />
                        </div>
                    </Button>
                    <Collapse in={open} style={{ zIndex: 1000 }}>
                        <div id="example-collapse-text" className='position-absolute mt-3 end-0'>
                            <Card className='bg-dark' body style={{ width: '370px', border: '1px solid #00FFFF' }}>
                                <Profile />
                            </Card>
                        </div>
                    </Collapse>
                </div>
            </nav>

            {/* streak section 🔥 */}
            <div className='container rounded py-4'>
                <Streak />
            </div>


            {/* course section */} 

            {/* Total Quizz Attempted */}
            {/*  Quizzes Completed*/}
            {/* Level progress */}

            {/* ongoing quizes */}
            {/* recomented quizes */}
        </div>
    )
}

export default Dashboard