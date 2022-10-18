import React, { Component } from 'react'
import './HeroImageStyles.css'

class HeroImage extends Component {
    render() {
        return (
            <div className='hero-img1'>
                <div className='heading'>
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}

export default HeroImage
