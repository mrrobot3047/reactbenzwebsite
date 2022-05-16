import React from 'react'
import Slider from '/Users/VIVEK/mercedesbenz/src/Images/benz3048.jpg'
import '../Contact/Contact.css'

function Contact() {
  return (
    <div className='contact'  >
        <div className='leftSide'  style={{backgroundImage:`url(${Slider})`}} ></div>
        <div className='rightSide'>
            <h1>Contact Us</h1>
            <form id="contact-form" method='POST'>
                <label htmlFor='name'  >Full Name</label>
                <input name="name" placeholder='Enter your name' type="text"/>
                <label htmlFor='email'  >E-mail</label>
                <input name="email" placeholder='Enter your email' type="text"/>
                <label htmlFor='message'>Message</label>
                <textarea rows="6" placeholder='Enter message...' name="message" required></textarea>
                <button type='submit'>Submit</button>

            </form>
        </div>
    </div>
  )
}

export default Contact