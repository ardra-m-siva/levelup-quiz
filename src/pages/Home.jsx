import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {


  return (
    <>
     <div className='bg-black text-light'>
        <div className='position-relative min-vh-100 d-flex align-items-center justify-content-center' style={{ backgroundColor: 'rgb(6, 6, 6)' }} >
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
          <div className="position-relative text-center z-1">
            <motion.h1 style={{textShadow: '0px 4px 8px rgba(79, 172, 172, 0.39)',letterSpacing: '3px'}}
              initial={{ opacity: 0, y: -50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1 }}
              className="text-info display-3 fw-bold  text-pop-up-top"
            >
              LEVELUP LEARN
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 1.5 }}
              className="fs-5 mt-2 text-white-50"
            >
              A Game Where Learning Never Stops
            </motion.p>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="mt-4"
            >
              <Link to={'/login'} className=" btn btn-info fw-semibold px-4 py-2 shadow-lg explore-btn">
                Explore More
              </Link>
              {/* <div><Link to={'/login'} className='explore-btn'>Explore more</Link></div> */}

            </motion.div>
          </div>
        </div>
  
        {/* How It Works Section */}
        <div className="container py-5">
          <h2 className="text-center text-info mb-4">How It Works</h2>
          <div className="row text-center">
            <div className="col-md-4">
              <motion.div whileHover={{ scale: 1.1 }} className="p-3 border rounded bg-dark">
                <h4>Pick a Subject</h4>
                <p>Choose from a variety of topics, including programming, science, and more.</p>
              </motion.div>
            </div>
            <div className="col-md-4">
              <motion.div whileHover={{ scale: 1.1 }} className="p-3 border rounded bg-dark">
                <h4>Answer Questions</h4>
                <p>Progress through levels by answering increasingly challenging questions.</p>
              </motion.div>
            </div>
            <div className="col-md-4">
              <motion.div whileHover={{ scale: 1.1 }} className="p-3 border rounded bg-dark">
                <h4>Earn Rewards</h4>
                <p>Win badges and achievements as you improve your skills.</p>
              </motion.div>
            </div>
          </div>
        </div>
  
        {/* Features Section */}
        <div className="container py-5">
          <h2 className="text-center text-info mb-4">Key Features</h2>
          <div className="row text-center">
            <div className="col-md-3">
              <div className="p-3 border rounded bg-dark">
                <h5>Multiplayer Mode</h5>
                <p>Challenge your friends and compete in real-time.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-3 border rounded bg-dark">
                <h5>Daily Challenges</h5>
                <p>Take on new learning challenges every day.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-3 border rounded bg-dark">
                <h5>AI-Powered Questions</h5>
                <p>Get dynamically generated questions for adaptive learning.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-3 border rounded bg-dark">
                <h5>Progress Tracking</h5>
                <p>Monitor your learning journey and see improvements.</p>
              </div>
            </div>
          </div>
      
        
        </div>
  
     </div>
    </>
  )
}

export default Home