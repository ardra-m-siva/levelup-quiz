import React from 'react'
import { Container, Row, Col, Card, Button, ProgressBar } from 'react-bootstrap';

const Dashboard = () => {
    return (
        <div style={{ minHeight: '100vh' }} className='bg-dark'>
            <div className='d-flex justify-content-center align-items-center pt-5'>
                <img height={'100px'} width={'100px'} className='rounded-circle' src="https://i.pinimg.com/736x/15/ba/35/15ba35a7267854a10b9bb0e7bef75571.jpg" alt="" />
                <h4 className='text-white ms-3'>Name</h4>
            </div>



            <Container className='pt-4' >
                {/* Overview Section */}
                <Row className="mb-4">
                    <Col md={4}>
                        <Card className="text-center p-3">
                            <h5>Total Quizzes Attempted</h5>
                            <h2>12</h2>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="text-center p-3">
                            <h5>Quizzes Completed</h5>
                            <h2>8</h2>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="text-center p-3">
                            <h5>Current Streak</h5>
                            <h2>5 Days</h2>
                        </Card>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col>
                        <Card className="p-3">
                            <h5>Level Progress</h5>
                            <ProgressBar now={60} label={`60%`} />
                        </Card>
                    </Col>
                </Row>

                {/* Active & Suggested Quizzes */}
                <Row>
                    <Col md={6}>
                        <Card className="p-3">
                            <h5>Ongoing Quiz</h5>
                            <p>Category: Science</p>
                            <Button variant="primary">Resume</Button>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="p-3">
                            <h5>Recommended Quiz</h5>
                            <p>Category: History</p>
                            <Button variant="success">Start Now</Button>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Dashboard