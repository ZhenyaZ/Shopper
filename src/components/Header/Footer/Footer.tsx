import React from 'react'
import styles from './Footer.module.css'
function Footer() {
  return (
    <footer className={`${styles['footer']}`}>
        <div className={`${styles['footer-contents']} container`}>
            <div className={`${styles['footer-getStarted']}`}>
                <span className={`${styles['footer-getStarted__title']}`}>Ready to get Started</span>
                <label htmlFor="getStarted">
                    <button>Get Started</button>
                </label>
            </div>
            <hr />
            <div className={`${styles['footer-nav']}`}>
                <div className={`${styles['footer-nav__subscribe']}`}>
                    <label htmlFor="emailAdress">
                        <span>Subscribe to our <p>Website</p></span>
                        <div className={`${styles['footer-nav__subscribe-input']}`}>
                        <input type="email" id="emailAdress" placeholder='Enter your email' />
                        <button>Subscribe</button>
                        </div>
                    </label>
                </div>
                <div className={`${styles['footer-nav__services']}`}>
                    <ul>
                        <li>Services</li>
                        <li>Email Marketing</li>
                        <li>Campagins</li>
                        <li>Branding</li>
                        <li>Offline</li>
                    </ul>
                </div>
                <div className={`${styles['footer-nav__about']}`}>
                    <ul>
                        <li>About</li>
                        <li>Our story</li>
                        <li>Benefits</li>
                        <li>Team</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div className={`${styles['footer-nav__help']}`}>
                    <ul>
                        <li>Help</li>
                        <li>FAQs</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer