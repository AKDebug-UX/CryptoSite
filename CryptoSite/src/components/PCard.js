import React from 'react'
import {Link} from 'react-router-dom'
import './PCardStyles.css'
import image from '../assets/btc.png'
import image1 from '../assets/eth.png'
import image2 from '../assets/rpp.png'

const Pricing = () => {
    return (
        <div className='pricing'>
            <h1 className='SubHeading'>Top Crypto Now</h1>
            <br/>
            <div className='card-container'>
                <div className='card'>
                    <h3> Bitcoin </h3>
                    <span className='bar'></span>
                    <img className='btc' src={image} />
                    <p>20,000 USD</p>
                    <Link to='/' className='btn'>Buy Now</Link>
                </div>
                <div className='card'>
                    <h3>Ethereum</h3>
                    <span className='bar'></span>
                    <img className='eth' src={image1} />
                    <p>1,900 USD</p>
                    <Link to='/' className='btn'>Buy Now</Link>
                </div>
                <div className='card'>
                    <h3>Ripple</h3>
                    <span className='bar'></span>
                    <img className='rip' src={image2} />
                    <p>0.56184 USD</p>
                    <Link to='/' className='btn'>Buy Now</Link>
                </div>
            </div>
        </div>
    )
}

export default Pricing
