import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import regImg from '../assets/image2.webp'

const Auth = ({ isLogin }) => {
  return (
    <div>
      <div className='d-flex justify-content-center align-items-center bg-black' style={{ minHeight: '100vh' }}>
        {/* Registration Form */}
        <div className='d-flex flex-wrap justify-content-between align-items-center' style={{ backgroundColor: '#1D2B3A', color: '#E4F9F5', borderRadius: '20px', padding: '50px 40px', width: '1000px', boxShadow: '0px 4px 20px #000000', transform: 'translateY(0)', animation: 'fadeIn 0.5s ease-in-out' }} >
          <div  className="d-none d-md-block" style={{ flex: 1 }}>
            <img style={{ width: '100%',maxWidth: '400px' }} src={regImg} className='img-fluid' alt="" />
          </div>
          <div style={{ flex: 1, minWidth: '400px' }}>
            <h2 style={{ color: '#00FFFF', fontFamily: "'Poppins', sans-serif", fontSize: '40px', textAlign: 'center', marginBottom: '30px', textShadow: '0px 4px 8px rgba(0, 255, 255, 0.5)', fontWeight: '600', letterSpacing: '1px' }} >
              {isLogin ? 'Login' : 'Register'}
            </h2>

            {/* username */}
            {!isLogin && <Form.Floating className="mb-3 floating-label-dark">
              <Form.Control id="floatingUsername" type="text" placeholder="username" style={{ backgroundColor: '#1D2B3A', color: '#E4F9F5', border: '1px solid white' }} />
              <label htmlFor="floatingUsername">Username</label>
            </Form.Floating>}

            {/* email */}
            <Form.Floating className="mb-3 floating-label-dark">
              <Form.Control id="floatingEmail" type="email" placeholder="name@example.com" style={{ backgroundColor: '#1D2B3A', color: '#E4F9F5', border: '1px solid white' }} />
              <label htmlFor="floatingEmail">Email address</label>
            </Form.Floating>

            {/* password */}
            <FloatingLabel className=' floating-label-dark mb-3' label="Password">
              <Form.Control id='floatingPassword' type="password" placeholder="Password" style={{ backgroundColor: '#1D2B3A', color: '#E4F9F5', border: '1px solid white' }} />
              <label htmlFor="floatingPassword">Password</label>
            </FloatingLabel>
            {/* submit button */}
            <button
              className="btn w-100"
              style={{
                backgroundColor: '#30E3CA ',
                color: '#25374D',
                borderRadius: '40px',
                padding: '12px',
                fontSize: '20px',
                cursor: 'pointer',
                transition: '0.3s ease',
                boxShadow: '0px 4px 10px rgba(48, 227, 202, 0.4)',
              }}
              onMouseEnter={(e) => (e.target.style.transform = 'scale(1.02)')}
              onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
            >
              {isLogin ? 'Login' : 'Register'}
            </button>
            <div className='mt-4 text-center' >
              {isLogin ? <p>New User? Please <Link to={'/register'}>Register</Link></p> : <p>Already a User? Please <Link to={'/login'}>Login</Link></p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth