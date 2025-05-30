import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import userProfileImg from '../assets/userProfile.jpg'
import profileUpload from '../assets/uploadProfile.png'
import { editProfileApi } from '../services/allApi'
import serverUrl from '../services/serverUrl'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

const Profile = () => {
  const [updateProfile, setUpdateProfile] = useState({
    username: "", email: "", password: "", profilePic: ""
  })
  const [preview, setPreview] = useState("")
  const [existingProfilePic, setExistingProfilePic] = useState("")
  const [player, setPlayer] = useState({})
  const [show, setShow] = useState(false);
  const navigate = useNavigate()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    if (sessionStorage.getItem('user')) {
      const playerDetails = (JSON.parse(sessionStorage.getItem("user")))
      setPlayer(playerDetails)
      setUpdateProfile({ ...updateProfile, username: playerDetails.username, email: playerDetails.email, password: playerDetails.password })
      setExistingProfilePic(playerDetails.profilePic)
      setPreview("")
    }
  }, [])

  useEffect(() => {
    if (updateProfile.profilePic) {
      setPreview(URL.createObjectURL(updateProfile.profilePic))
    } else {
      setPreview("")
    }
  }, [updateProfile.profilePic])


  const handleEdit = async () => {
    const { username, email, password, profilePic } = updateProfile

    if (username && profilePic) {
      const reqBody = new FormData()
      reqBody.append("username", username)
      reqBody.append("email", email)
      reqBody.append("password", password)
      preview ? reqBody.append("profilePic", profilePic) : reqBody.append("profilePic", existingProfilePic)
      const token = sessionStorage.getItem('token')
      if (token) {
        const reqHeaders = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }
        try {
          const result = await editProfileApi(reqBody, reqHeaders)
          if (result.status == 200) {
            sessionStorage.setItem("user", JSON.stringify(result.data))
            setPlayer(result.data);
          }
        } catch (err) {
          console.log(err);

        }
      }
      handleClose()
    } else {
      toast.warn("Please fill the form.",{ autoClose: 2000})
    }
  }

  const handleLogout = () => {
    sessionStorage.clear()
    // Show feedback
    toast.warn("You have been logging out.", { autoClose: 1200,className:'custom-toast'});

    // Delay navigation to allow toast to be seen
    setTimeout(() => {
      navigate('/');
    }, 1100);
  }
  return (
    <>
      <div className="d-flex flex-column align-items-center text-dark ">
        <div className="w-100 rounded" style={{ height: "100px", backgroundColor: '#BFEAF5' }}>
          <h2 className='text-center fs-5 mt-3 px-3 text-dark' >{player.username?.split(" ")[0]}</h2>
        </div>
        {/* profile */}
        <div className="position-relative mt-5 mb-4 text-center p-4 rounded shadow-lg" style={{ maxWidth: "400px", width: "90%" }}>
          <div className="position-absolute  start-50 translate-middle" style={{ top: "-50px" }}>
            {/* profile image is here */}
            {
              existingProfilePic == "" ?
                <img src={preview ? preview : userProfileImg} alt="Profile picture" className="rounded-circle " style={{ width: "100px", height: "100px", border: '5px solid #2C3E50 ' }} />
                :
                <img className="rounded-circle " style={{ width: "100px", height: "100px", border: '5px solid #2C3E50 ' }} src={preview ? preview : `${serverUrl}/uploads/${existingProfilePic}`} alt="Profile picture" />
            }
          </div>

          {/* Profile Details */}
          <div className="mt-1">
            <h2>{player?.username}</h2>
            <p>{player?.email}</p>
            {/* profile summary if needed */}
            <div className="mt-3 d-flex">
              <button onClick={handleShow} className="btn btn-warning me-3"><i className="fa-solid fa-user-pen fa-lg"></i> <br /> Edit Profile</button>
              <button onClick={handleLogout} className="btn btn-danger "> <i className="fa-solid fa-arrow-right-from-bracket fa-xl"></i> Logout</button>
            </div>
          </div>
        </div>
      </div>
      <Modal centered show={show} onHide={handleClose} backdrop="static" keyboard={false} style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Modal backdrop color
      }}>
        <Modal.Header closeButton style={{ backgroundColor: "#11999E", color: "white", borderBottom: "none" }}>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ color: "#40514E", fontSize: "18px" }}>
          <div className='d-flex justify-content-between align-items-center'>
            <label htmlFor='inputImg'>
              {/* image upload here */}
              <img src={preview ? preview : profileUpload} width={'250px'} alt="no image" />
              <input onChange={e => setUpdateProfile({ ...updateProfile, profilePic: e.target.files[0] })} id='inputImg' className='d-none' type="file" />
            </label>
            <div>
              <input value={player?.email} type="text" className='form-control ms-2' disabled />
              <input onChange={e => setUpdateProfile({ ...updateProfile, username: e.target.value })} type="text" className='form-control ms-2  mt-2' placeholder='Enter  Username' />
            </div>
          </div>
          <ToastContainer theme="colored" position="top-center" />
        </Modal.Body>
        <Modal.Footer style={{ borderTop: "none" }}>
          <Button variant="secondary" onClick={handleClose} style={{ backgroundColor: "#40514E", border: "none" }}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit} style={{ backgroundColor: "#11999E", border: "none" }}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer theme="colored" position="top-center" />
    </>
  )
}

export default Profile