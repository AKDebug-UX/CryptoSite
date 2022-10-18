import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import Form from '../components/Form'

const Login = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='LOGIN.' text='Login Your Upraise Crypto Account' />
            <Form />
            <Footer/>
        </div>
    )
}

export default Login
