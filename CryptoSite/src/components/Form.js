import React from 'react'
import './FormStyles.css'

const Form = () => {
    return (
        <div className='form'>
            <form>
                {/* <label>Subject</label>
                <input type='text'></input>
                <label>Details</label> 
                <textarea rows='6' placeholder='Type a short message here' />*/}


                
                <label>Email</label>
                <input type='email'></input>

                <label>Password</label>
                <input type='password'></input>
                
                
                <button className='btn'>Submit</button>
            </form>
        </div>
    )
}

export default Form
