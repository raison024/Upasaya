import React from 'react';
import './Contact.css';
import Logo from '../../Assets/upasaya.png';
import { Link } from 'react-router-dom';

function Contact() {
    return (
        <div className='Contact'>
            <div className='Contact-nav'>
                <img src={Logo} className='Contact-logo' alt='UpasayaLogo'/>
                <Link to="/" className='Home-button'>Home</Link>
            </div>
            
            <div class="container">  
  <form id="contact" action="" method="post" className='Contact-form'>
    <h3>Contact Form</h3>
    <h4>Contact us to know more!</h4>
    <fieldset>
      <input placeholder="Your name" type="text" tabindex="1" required autofocus />
    </fieldset>
    <fieldset>
      <input placeholder="Your Email Address" type="email" tabindex="2" required />
    </fieldset>
    <fieldset>
      <input placeholder="Your Phone Number" type="tel" tabindex="3" required />
    </fieldset>
    <fieldset>
      <textarea placeholder="Type your Message Here...." tabindex="5" required></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
  </form>
 
  
</div>

        </div>
    )
}

export default Contact
