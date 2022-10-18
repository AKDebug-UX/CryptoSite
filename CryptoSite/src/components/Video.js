import React from 'react'
// import { Link } from 'react-router-dom'
import './VideoStyles.css'
import HeroImage1 from '../components/HeroImage1'

const Video = () => {

    return (
        
        <div className='hero'>
            
            <div className='hero1'>
            <div className='content'>
            <p></p><h1></h1> <p></p><h1></h1> <p></p><h1></h1> <p></p><h1></h1> 
                <p></p><h1></h1> <p></p><h1></h1> <p></p><h1></h1> <p></p><h1></h1> 
                <p></p><h1></h1> <p></p><h1></h1> <p></p><h1></h1> <p></p><h1></h1>

                <h2>Make Your Crypto Transactions Easier</h2>
                <p>Buy and Sell 100+ Cryptocurrencies with 20+
                    fial currencies using bank transfer or credit or debit card
                </p>
                <button className='btn'>Try Free Trial</button>
                <div>
                    {/* <Link to='/training' className='btn'>Training</Link>
                    <Link to='/contact' className='btn btn-light'>Launch</Link> */}
                </div>
            </div>
            <div className='left'>
            
                <p></p><h1></h1> <p></p><h1></h1> <p></p><h1></h1> <p></p><h1></h1> 
                <p></p><h1></h1> <p></p><h1></h1> <p></p><h1></h1> <p></p><h1></h1> 
                <HeroImage1/>
            </div>
            </div>
        </div>
    )
}

export default Video
