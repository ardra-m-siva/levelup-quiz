import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Contact = () => {
    return (
        <>
            <Header />
            <div className='container'>
                <div className='my-5'>
                    <div className="row gy-5 gap-3">
                        <div className="col-lg-8 col-md-12 d-flex flex-column flex-lg-row  shadow p-5 gap-4" >
                            <div>
                                <h2 className='fw-bold text-center text-lg-start'>Learn anywhere, <br />anytime</h2>
                                <p className='text-center text-lg-start'>On the web or on the go, Sololearn is always ready for you and you'll never lose your place.</p>
                                <div>
                                    <h5 className='my-3 text-center text-lg-start' >Get The App Now</h5>
                                    <div className='d-flex flex-column flex-md-row justify-content-center align-items-center'>
                                        <img style={{ maxWidth: '100px' }} className='img-fluid' src="https://www.drupal.org/files/styles/grid-3-2x/public/project-images/googleQRcodes.png?itok=cVevzFXs" alt="" />
                                        <div className='d-flex flex-column justify-content-center align-items-center mt-3 mt-md-0 ms-md-4 w-100' >
                                            <img style={{ maxWidth: '120px' }} className='img-fluid ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Download_on_the_App_Store_RGB_blk.svg/2560px-Download_on_the_App_Store_RGB_blk.svg.png" alt="QR Code" />
                                            <img style={{ maxWidth: '120px' }} className='img-fluid mt-2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img  className='img-fluid ' style={{ width: '100%', maxWidth: '500px' }} src="https://i.pinimg.com/originals/03/c0/38/03c038d16263b1edbd846b4d2cc4ed28.gif" alt="" />
                        </div>
                        <div className="col shadow p-5 text-center">
                            <div className='d-flex align-items-center justify-content-center'>
                                <img className='img-fluid w-75' src="https://cdn.pixabay.com/photo/2017/06/10/07/18/list-2389219_1280.png" alt="" />
                            </div>
                            <h2 className='fw-bold'>More than 20 courses</h2>
                            <p >From Python, through data, to web dev. <br /> <span className='fw-bolder'>We got everything you need.</span></p>
                        </div>
                    </div>
                    <div className='my-5'>
                        <div className="row">
                            <div className="col-lg-6 col-md-12  p-4">
                                <span className='fs-2 fw-bolder py-5' style={{ color: '#11999E' }}>LevelUp <i className="fa-solid fa-terminal"></i></span>
                                <h4 className='mt-3'> Learning to code got simplified.</h4>
                                <p> Learn the latest technology with interactive, hands-on courses. It’s free.</p>
                                <div>
                                    <p >Bite-sized lessons staff actually apply in their roles</p>
                                    <p>Interactive interface for fast, friction-free learning</p>
                                    <p>Custom dashboard to see progress and acquired skills</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 p-4">
                                <form action="" className='border p-5 text-center'>
                                    <h4 className='fw-bolder text-center mb-5'>Let us know what you think</h4>
                                    <input type="text" placeholder='Name' className='form-control' />
                                    <input type="email" placeholder='Email' className='form-control my-4' />
                                    <textarea type="text" placeholder='Message' className='form-control my-4' />
                                    <button style={{ background: '#11999E' }} className='btn text-light '>Submit</button>
                                </form>
                            </div>
                        </div>                       
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact