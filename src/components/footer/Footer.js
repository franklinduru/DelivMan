import React from 'react'
import { SiDatabricks } from 'react-icons/si'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import { FiMail, FiFacebook, FiGithub, FiInstagram, FiLinkedin, FiDribbble } from 'react-icons/fi'
import './FooterStyles.css'

import { Link } from 'react-scroll'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <div className="logo-footer">
                        <SiDatabricks className='icon' />
                        <h2>DelivMan.</h2>
                    </div>
                    <Link activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <BsFillArrowUpCircleFill className='icon' />
                    </Link>

                </div>
                <div className="col-container">
                    <div className="col">
                        <h3>Navigation</h3>
                        <p>Home</p>
                        <p>Register</p>
                        <p>About</p>
                        <p>Contact</p>
                    </div>
                    <div className="col">
                        <h3>Partner with Us</h3>
                        <p>Sign up as a driver</p>
                        <p>Sign up as a courier</p>
                        <p>Influencers</p>
                        <p>Franchise</p>
                    </div>
                    <div className="col">
                        <h3>My Account</h3>
                        <p>Blog</p>
                        <p>Data</p>
                        <p>Career</p>
                        <p>Press</p>
                    </div>
                    <div className="col">
                        <h3>Product</h3>
                        <p>Rides</p>
                        <p>Food Delivery</p>
                        <p>Grocery Delivery</p>
                        <p>Car-sharing</p>
                    </div>
                    <form>
                        <h3>Join Our Team</h3>
                        <input type="email" placeholder='Enter your email' />
                        <FiMail className='mail-icon' />
                        <div className="social-group">
                            <FiInstagram className='social-icon' />
                            <FiFacebook className='social-icon' />
                            <FiLinkedin className='social-icon' />
                            <FiDribbble className='social-icon' />
                            <FiGithub className='social-icon' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Footer
