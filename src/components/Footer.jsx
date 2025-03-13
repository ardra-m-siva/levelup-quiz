import React from 'react'

const Footer = () => {
    return (
        <div className='text-white fw-semibold p-5' style={{ backgroundColor: '#11999E' }}>
            <div className="row">
                <div className="col-lg-4">
                    <h2 className='bold'>LevelUp <i class="fa-solid fa-terminal"></i></h2>
                    <p>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</p>
                    <p>Code licensed MIT, docs CC BY 3.0.</p>
                    <p>Currently v5.3.3.</p>
                </div>
                <div className="col">
                    <div className='row'>
                        <div className="col">
                            <h5 className='fw-bolder'>Links</h5>
                            <ul style={{paddingLeft:'0px'}}>
                                <li><a className='item' href="">About</a></li>
                                <li><a className='item' href="">Home </a></li>
                                <li><a className='item' href="">Subjects</a></li>
                                <li><a className='item' href="">Contact Us</a></li>

                            </ul>
                        </div>
                        <div className="col">
                            <h5 className='fw-bolder'>Guides</h5>
                            <ul style={{paddingLeft:'0px'}}>
                                <li><a className='item' href="">Getting started</a></li>
                                <li><a className='item' href="">Instructions </a></li>
                                <li><a className='item' href="">Demo</a></li>
                                <li><a className='item' href="">Blog as Guest</a></li>

                            </ul>
                        </div>
                        <div className="col">
                            <h5 className='fw-bolder'>Discover</h5>
                            <ul style={{paddingLeft:'0px'}}>
                                <li><a className='item' href="">Free Courses</a></li>
                                <li><a className='item' href="">SkillUp sitemap </a></li>
                                <li><a className='item' href="">Resources</a></li>
                            </ul>
                        </div>
                        <div className="col">
                            <h5 className='fw-bolder'>Community</h5>
                            <ul style={{paddingLeft:'0px'}}>
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