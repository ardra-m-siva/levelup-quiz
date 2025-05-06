import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import mainImg from '../assets/img2.jpg'
import { motion } from 'framer-motion';
import { Button, Card } from 'react-bootstrap';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { getAllTestimonialApi } from '../services/allApi';

const Home = () => {
  const [allTestimonials, setAllTestimonials] = useState([])
  const navigate = useNavigate()
  const [isLoginTo, setIsLoginTo] = useState(false)
  useEffect(() => {
    if (sessionStorage.getItem('user')) {
      setIsLoginTo(true)
    }
    getAllTestimonialsInHome()
  }, [])


  const getAllTestimonialsInHome = async () => {
    try {
      const result = await getAllTestimonialApi()
      if (result.status == 200) {
        console.log(result.data);
        setAllTestimonials(result.data)
      }
    } catch (err) {
      console.log(err);
    }
  }

  const handleSubject = async (sub, title) => {
    const subjectInfo = {
      difficulty: "easy",
      subject: sub,
      title
    }
    if (!isLoginTo) {
      alert("Please Login")
    } else {
      navigate('/game', { state: subjectInfo })
    }
  }

  const lessons = [
    { id: 'javascript', title: "JavaScript Basics", description: "Learn the fundamentals of JavaScript.", link: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/640px-Unofficial_JavaScript_logo_2.svg.png" },
    { id: 'react', title: "React Fundamentals", description: "Understand the core concepts of React.", link: "https://miro.medium.com/v2/resize:fit:1400/0*y6IcBe5J1AdALzXw.png" },
    { id: 'python', title: "Python Programming", description: "Master Python for web development and data science.", link: "https://i0.wp.com/junilearning.com/wp-content/uploads/2020/06/python-programming-language.webp?fit=800%2C800&ssl=1" },
    { id: 'nodejs', title: "Node.js & Express", description: "Explore backend development with Node.js.", link: 'https://lh3.googleusercontent.com/csXm00pBuJvmhsXcI1XauxFGrE66sHBbWI9QyKY0lt2h55a1VaKl6F5TrlH0wBC_aijloKw9lh8a=e14-rj-sc0xffffff-w1270' },
    { id: 'sql', title: "SQL Essentials", description: "Learn how to work with relational databases.", link: "https://datacreative.com/wp-content/uploads/2023/08/datacreative-sql.webp" },
    { id: 'nextjs', title: "Next.js Framework", description: "Build optimized and scalable React applications.", link: "https://images.ctfassets.net/c63hsprlvlya/IacLLeOBR5WCvdCPqKuff/6860b5cc464c4f54703a2befa3f706b4/nextjs3.webp" },
    { id: 'django', title: "Django Framework", description: "Learn backend development with Python's Django framework.", link: "https://storage.caktusgroup.com/media/blog-images/django-logo.gif" },
    { id: 'ubuntu', title: "Ubuntu Basics", description: "Learn the fundamentals of Ubuntu, Linux commands, and system administration.", link: "https://cdn.neowin.com/news/images/uploaded/2022/03/1647455145_new-ubuntu-logo_story.jpg" }
  ];
  return (
    <>
      <div className='text-black min-vh-100'>
        <div style={{ zIndex: 1000, position: 'relative' }}><Header /></div>
        <div className="container ">
          <div className='row align-items-center justify-content-center text-center text-lg-start'>
            <div className="col-lg-6 col-md-8 my-3">
              <motion.h1 style={{ textShadow: '0px 4px 8px rgba(216, 231, 231, 0.39)' }}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="fw-bold text-pop-up-top">
                <p className="text-dark fw-bold p-1">“Every expert was once a beginner. Keep going!”</p>
              </motion.h1>
              <p>From critical skills to technical topics, LevelUp supports your professional development.</p>
            </div>
            <div className="col-lg-6 col-md-8">
              <img src={mainImg} alt="" className="img-fluid " />
            </div>
          </div>
        </div>
        <div className="container mt-5 ">
          <h2 className="text-center fw-bold">Start Learning</h2>
          <div className="row my-5 justify-content-center">
            {lessons.map((lesson, index) => (
              <div className='col-lg-3 col-md-6 col-sm-12 mb-4 d-flex justify-content-center' key={index}>
                <Card id='quiz-box' style={{ width: '18rem' }} className='shadow' >
                  <Card.Img variant="top" src={lesson.link} height={'220px'} />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{lesson.title}</Card.Title>
                    <Card.Text>
                      {lesson.description}
                    </Card.Text>
                    <Button onClick={() => handleSubject(lesson.id, lesson.title)} className='mt-auto' style={{ backgroundColor: '#11999E' }}>Start Quizz</Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <div className="container my-5">
          <h2 className="text-center fw-bold mb-4">Testimonials</h2>
          <div  className="d-flex flex-nowrap mx-2 px-2 py-2 gap-2  hide-scrollbar" 
          style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch',overflowY:'hidden'}}>
            {
              allTestimonials?.length > 0 ?
                allTestimonials.map(item => (
                  <div key={item?._id} className="flex-shrink-0" style={{
                    width: '240px',
                    scrollSnapAlign: 'start'
                  }}>
                    <Card className="h-100 shadow-sm border-0 rounded-4">
                      <Card.Header className="fw-semibold py-2 px-3 bg-light border-0">💬 Testimonial</Card.Header>
                      <Card.Body className="py-3 px-3">
                        <blockquote className="blockquote mb-0" style={{ fontSize: '0.9rem' }}>
                          <p className="mb-2">
                            {item.message}
                          </p>
                          <footer className="blockquote-footer my-1">
                            Quaoted by <cite title="Source Title">{item.name}</cite>
                          </footer>
                        </blockquote>
                      </Card.Body>
                    </Card>
                  </div>

                ))
                :
                <div className='text-center fw-bolder'>
                  Testimonials Not Available
                </div>
            }

          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home