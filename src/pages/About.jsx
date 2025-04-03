import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const About = () => {
    return (
        <>
            <Header />
            <div className='container'>
                <h1 className='text-center my-5 fw-bolder'>The perfect platform to boost
                    <br /> your technical skills</h1>
                <div className="row gap-4 text-center m-5">
                    <div className="col-lg p-5">
                        <img className='img-fluid' src="https://img.freepik.com/free-photo/young-woman-attend-courses-girl-student-studying-holding-notebooks-showing-thumb-up-approval-recommending-company-standing-blue-background_1258-70145.jpg?semt=ais_hybrid" alt="" height={'440px'} />
                        <h5 className='fw-bolder my-3'>Students</h5>
                        <p className='p-3'>Prepping for the big test or want to ace your first interview? Use LevelUp's real-world practice to reinforce what you've learned and get you ready for that big moment.</p>
                    </div>
                    <div className="col-lg p-5">
                        <img className='img-fluid' src="https://img.freepik.com/free-photo/latin-confident-professionals-suit-standing-against-isolated-background_662251-330.jpg" alt="" height={'440px'} />
                        <h5 className='fw-bolder my-3'>Professionals</h5>
                        <p className='p-3'>You can learn something totally new to advance your career. Or maybe you just want to knock off the rust. Try LevelUp to get a ccess to a variety of courses, from machine learning to web development.</p>
                    </div>
                </div>

               

                <div className='text-center my-5' >
                    <h2 className='fw-bolder'>Features</h2>
                    <div className="row gap-4 mt-5">
                        <div className="col border p-2">
                            <img height={'300px'} width={'100%'} src="https://media.istockphoto.com/id/1365576235/vector/take-small-steps-to-achieve-big-goal-growing-wisely-slow-and-steady-to-reach-target-and.jpg?s=612x612&w=0&k=20&c=nCAD4XVLHMWZE2mA6tJjisjIx8x66zv2HS3b_KuGWL8=" alt="" />
                            <h5 className='my-3 fw-bold'> Bite-sized</h5>
                            <p className='p-2'>Go step-by-step through our unique courses. Access what you've learned with in-lesson quizzes, and gradually advance your skills with practice.</p>
                        </div>

                        <div className="col border p-2">
                            <img height={'300px'} width={'100%'} src="https://img.freepik.com/premium-vector/motivation-concept-hard-work-like-pushing-boulder-uphill-burden-obstacle-business-difficulty_178888-1778.jpg?w=360" alt="" />
                            <h5 className='my-3 fw-bold'>Tailored for you</h5>
                            <p className='p-2'>No matter your experience level, you'll be writing real, functional code within minutes of starting your first course.</p>
                        </div>

                        <div className="col border p-2">
                            <img height={'300px'} width={'100%'} src="https://media.licdn.com/dms/image/v2/D5612AQFRn-Km672JPQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1659640074035?e=2147483647&v=beta&t=2NZugeUJEYgkqEqhpNwFU6oW-zqzyJNzRk4VdpQ1h-E" alt="" />
                            <h5 className='my-3 fw-bold'>Get proof</h5>
                            <p className='p-2'>Validate your newly acquired skills. Post it on social for others to see.</p>
                        </div>
                    </div>
                </div>

                <div className='container m-5'>
                    <h2 className='text-center fw-bolder mt-4'>About Game Rules</h2>
                    <h5 className='text-center'>Why employees learn tech skills more effectively</h5>
                    <div className="row my-5 gap-3">
                        <div className="col">
                            <div className="p-2 my-5">
                                <div>
                                    <h5 className='fs-4'>Lessons in under 5 mins, Progress Tracking</h5>
                                    <p className='py-2' style={{textAlign:'justify'}}>Don't block your staff all day in training. Our 5-minute lessons can be done anytime, from anywhere, fitting perfectly into breaks, commutes, and other free time. Tracks daily challenges, achievements, and question-answer accuracy.</p>
                                </div>
                                <div>
                                    <h5 className='fs-4'>Restart on Failure and Rewards & Achievements</h5>
                                    <p className='py-2' style={{textAlign:'justify'}}>If a player gets a question wrong, they restart from the beginning. Players earn points, rewards, and hints for progressing.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <img className='img-fluid' src="https://www.japantimes.co.jp/uploads/imported_images/uploads/2022/04/np_file_153993.jpeg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About