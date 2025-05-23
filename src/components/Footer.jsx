import React from 'react'

const Footer = () => {
    return (
        <div className='text-white fw-semibold p-5 mt-2' style={{ backgroundColor: '#11999E' }}>
            <div className="row gy-4">
                <div className="col-12 col-lg-4">
                    <h2 className='bold'>LevelUp <i className="fa-solid fa-terminal"></i></h2>
                    <p>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</p>
                    <p>Code licensed MIT, docs CC BY 3.0.</p>
                    <p>Currently v5.3.3.</p>
                </div>
                <div className="col-12 col-lg-8">
                    <div className='row gy-4'>
                        <div className="col-6 col-md-3">
                            <h5 className='fw-bolder'>Links</h5>
                            <ul className='list-unstyled' >
                                <li><a className='item' href="/about">About</a></li>
                                <li><a className='item' href="/">Home </a></li>
                                <li><a className='item' href="/dashboard">Subjects</a></li>
                                <li><a className='item' href="/contact">Contact Us</a></li>

                            </ul>
                        </div>
                        <div className="col-6 col-md-3">
                            <h5 className='fw-bolder'>Guides</h5>
                            <ul className='list-unstyled' >
                                <li><a className='item' href="/login">Getting started</a></li>
                                <li><a className='item' href="">Instructions </a></li>
                                <li><a className='item' href="">Demo</a></li>
                                <li><a className='item' href="">Blog as Guest</a></li>

                            </ul>
                        </div>
                        <div className="col-6 col-md-3">
                            <h5 className='fw-bolder'>Discover</h5>
                            <ul className='list-unstyled'>
                                <li><a className='item' href="">Free Courses</a></li>
                                <li><a className='item' href="">SkillUp sitemap </a></li>
                                <li><a className='item' href="">Resources</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-3">
                            <h5 className='fw-bolder'>Community</h5>
                            <ul className='list-unstyled'>
                                <li><a className='item' href="">Issues</a></li>
                                <li><a className='item' href="">Discussions </a></li>
                                <li><a className='item'  href="">Corporate Training</a></li>
                                <li><a className='item'  href="">Guaranteed to run classes</a></li>
                                <li><a className='item'  href="">Learn Hub</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer