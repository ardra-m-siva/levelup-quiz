import React, { useState } from 'react'
import { FloatingLabel, Form, Spinner } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import regImg from '../assets/image2.webp'
import { loginApi, registerApi } from '../services/allApi'

const Auth = ({ isLogin }) => {
  const [loginedToSite, setLoginedToSite] = useState(false)
  const navigate = useNavigate()
  const [userDetails, setUserDetails] = useState({
    username: "", email: "", password: ""
  })
  const handleSubmit = async () => {
    try {
      //  make api call
      if (isLogin) {
        const payload = { email: userDetails.email, password: userDetails.password }
        if (payload.email && payload.password) {
          const result = await loginApi(payload)
          if (result.status == 200) {
            setLoginedToSite(true)
            sessionStorage.setItem("user", JSON.stringify(result.data.user))
            sessionStorage.setItem("token", result.data.token)
            setInterval(() => {
              setUserDetails({ username: "", email: "", password: "" })
              navigate('/dashboard')
              setLoginedToSite(false)
            }, 2000)
          } else {
            alert(result.response.data)
          }
        } else {
          alert("Please fill the form")
        }
      } else {
        if (userDetails.username && userDetails.email && userDetails.password) {
          const result = await registerApi(userDetails)
          setLoginedToSite(true)
          if (result.status == 200) {
            setTimeout(() => {
              setUserDetails({ username: "", email: "", password: "" })
              navigate('/login')
              alert("Registration Success!! Please Login to Continue")
              setLoginedToSite(false)
            }, 1000)
          } else {
            alert("Registration failed. Try again.")
          }
        } else {
          alert("Please fill the form")
        }
      }
    } catch (err) {
      console.log(err);
      alert("Something went wrong. Please try again.")
    }
  }

  return (
    <div>
      <div className='bg-black' style={{ minHeight: '100vh' }}>
        <div className='p-3'>
          <Link to={'/'} className='btn'><i className="fa-solid fa-arrow-left text-white fa-xl "></i></Link>
        </div>
        <div className='d-flex justify-content-center align-items-center mt-5'>
          {/* Registration Form */}
          <div className='d-flex flex-wrap justify-content-between align-items-center' style={{ backgroundColor: '#1D2B3A', color: '#E4F9F5', borderRadius: '20px', padding: '50px 40px', width: '1000px', boxShadow: '0px 4px 20px #000000', transform: 'translateY(0)', animation: 'fadeIn 0.5s ease-in-out' }} >
            <div className="d-flex justify-content-center d-sm-block" style={{ flex: 1 }}>
              <img style={{ width: '100%', maxWidth: '400px' }} src={regImg} className='img-fluid' alt="image" />
            </div>
            <div style={{ flex: 1, minWidth: '400px' }}>
              <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: '40px', marginBottom: '30px', textShadow: '0px 4px 8px rgba(0, 183, 255, 0.5)', letterSpacing: '1px' }} className='text-info text-center fw-bold'>
                {isLogin ? 'Login' : 'Register'}
              </h2>

              {/* username */}
              {!isLogin && <Form.Floating className="mb-3 floating-label-dark">
                <Form.Control value={userDetails.username} onChange={e => setUserDetails({ ...userDetails, username: e.target.value })} id="floatingUsername" type="text" placeholder="username" style={{ backgroundColor: '#1D2B3A', color: '#E4F9F5', border: '1px solid white' }} />
                <label htmlFor="floatingUsername">Username</label>
              </Form.Floating>}

              {/* email */}
              <Form.Floating className="mb-3 floating-label-dark">
                <Form.Control value={userDetails.email} onChange={e => setUserDetails({ ...userDetails, email: e.target.value })} id="floatingEmail" type="email" placeholder="name@example.com" style={{ backgroundColor: '#1D2B3A', color: '#E4F9F5', border: '1px solid white' }} />
                <label htmlFor="floatingEmail">Email address</label>
              </Form.Floating>

              {/* password */}
              <FloatingLabel className=' floating-label-dark mb-3' label="Password">
                <Form.Control value={userDetails.password} onChange={e => setUserDetails({ ...userDetails, password: e.target.value })} id='floatingPassword' type="password" placeholder="Password" style={{ backgroundColor: '#1D2B3A', color: '#E4F9F5', border: '1px solid white' }} />
                <label htmlFor="floatingPassword">Password</label>
              </FloatingLabel>
              {/* submit button */}
              <button onClick={handleSubmit} className="btn w-100 bg-info text-black" style={{ color: '#25374D', borderRadius: '40px', padding: '12px', fontSize: '20px', cursor: 'pointer', transition: '0.3s ease', boxShadow: '0px 4px 10px rgba(48, 191, 227, 0.4)', }} onMouseEnter={(e) => (e.target.style.transform = 'scale(1.02)')} onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')} >
                {isLogin ? 'Login' : 'Register'} {loginedToSite && <Spinner animation="border" variant="dark" size='sm' />}
              </button>

              <div className='mt-4 text-center' >
                {isLogin ? <p>New User? Please <Link to={'/register'}>Register</Link></p> : <p>Already a User? Please <Link to={'/login'}>Login</Link></p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth