import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'
import image1 from '../assets/PS.png'
import image2 from '../assets/AS.png'


const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                <div className='phone'>
                        <h4><FaPhone size={20} style={{ color: '#ffffff', marginRight: '2rem' }} /> +234-708-141-8052</h4>
                    </div>
                    <div className='email'>
                        <h4><FaMailBulk size={20} style={{ color: '#ffffff', marginRight: '2rem' }} /> upraise@crypto.com</h4>
                    </div>
                    <br/><br/><br/>
                <div className='social'>
                        <FaFacebook size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                        <FaTwitter size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                        <FaLinkedin size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                       
                    </div>
                 </div>

                <div className='right'>
                <img className='DL' src={image1} />
                <br/>
                <img className='DL' src={image2} />
                </div>

            </div>
        </div>
    )
}

export default Footer
