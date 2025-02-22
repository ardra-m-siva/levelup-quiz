import React from 'react'

const Profile = () => {
  
  return (
    <>
      <div className="bg-dark d-flex flex-column align-items-center text-white">
        <div className="w-100" style={{ height: "90px", backgroundColor: "#30E3CA" }}>
        <h2 className='text-center text-dark fs-6 mt-3 px-3'>First name/username</h2>

        </div>
        {/* profile */}
        <div className="position-relative mt-5 text-center p-4 rounded shadow-lg" style={{ maxWidth: "400px", width: "90%" }}>
          <div className="position-absolute  start-50 translate-middle" style={{ top: "-50px" }}>
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/048/926/084/small_2x/silver-membership-icon-default-avatar-profile-icon-membership-icon-social-media-user-image-illustration-vector.jpg" 
              alt="Profile"
              className="rounded-circle border border-4 border-info"
              style={{ width: "70px", height: "70px" }}
            />
          </div>  

          {/* Profile Details */}
          <div className="mt-1">
            <h2>Full Name</h2>
            <p>email address</p>  
            {/* profile summary if needed */}
            <div className="mt-3 d-flex">
              <button className="btn btn-info me-3"><i className="fa-solid fa-user-pen fa-lg"></i> <br /> Edit Profile</button>
              <button className="btn btn-danger "> <i className="fa-solid fa-arrow-right-from-bracket fa-xl"></i> Logout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile