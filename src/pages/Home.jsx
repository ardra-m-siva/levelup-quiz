import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import mainImg from '../assets/img2.jpg'
import { motion } from 'framer-motion';
import { Button, Card } from 'react-bootstrap';
import Footer from '../components/Footer';

const Home = () => {
  const [isLoginTo, setIsLoginTo] = useState(false)
  useEffect(() => {
    if (sessionStorage.getItem('user')) {
      setIsLoginTo(true)
    }
  }, [])

  const handleSubject = (lesson) => {
    if (!isLoginTo) {
      alert("Please Login")
    } else {
      alert("api")
    }
  }

  const lessons = [
    { title: "JavaScript Basics", description: "Learn the fundamentals of JavaScript.", link: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/640px-Unofficial_JavaScript_logo_2.svg.png" },
    { title: "React Fundamentals", description: "Understand the core concepts of React.", link: "https://miro.medium.com/v2/resize:fit:1400/0*y6IcBe5J1AdALzXw.png" },
    { title: "Advanced CSS", description: "Master flexbox, grid, and animations.", link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrmcw_0JrWn3MbaKxWcXeJLn-92hHBdLHIiQ&s" },
    { title: "Node.js & Express", description: "Explore backend development with Node.js.", link: 'https://lh3.googleusercontent.com/csXm00pBuJvmhsXcI1XauxFGrE66sHBbWI9QyKY0lt2h55a1VaKl6F5TrlH0wBC_aijloKw9lh8a=e14-rj-sc0xffffff-w1270' },
    {
      title: "MongoDB Essentials", description: "Learn how to work with NoSQL databases.", link: "https://mma.prnewswire.com/media/384058/MongoDB_Logo.jpg?p=facebook"
    },
  ];
  return (
    <>
      <div className='text-black min-vh-100'>
        <div style={{ zIndex: 1000, position: 'relative' }}><Header /></div>
        <div className="container ">
          <div className='row align-items-center justify-content-center'>
            <div className="col-lg-6 my-2">
              <motion.h1 style={{ textShadow: '0px 4px 8px rgba(216, 231, 231, 0.39)' }}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="display-3 fw-bold  text-pop-up-top">
                <h1 className="text-dark fw-bold p-1">“Every expert was once a beginner. Keep going!”</h1>
              </motion.h1>
              <p>From critical skills to technical topics, LevelUp supports your professional development.</p>
            </div>
            <div className="col-lg-6  justify-content-center">
              <img src={mainImg} alt="" width={'90%'} />
            </div>
          </div>
        </div>
        <div className="container m-5 py-5 bg-white text-dark">
          <h2 className="text-center mb-4 fw-bold">Start Learning</h2>
          <div className="row gap-5">
            {lessons.map((lesson, index) => (
              <Card key={index} style={{ width: '18rem' }} >
                <Card.Img variant="top" src={lesson.link} height={'230px'} />
                <Card.Body>
                  <Card.Title>{lesson.title}</Card.Title>
                  <Card.Text>
                    {lesson.description}
                  </Card.Text>
                  <Button onClick={() => handleSubject(lesson)} style={{backgroundColor:'#11999E'}}>Start Quizz</Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home