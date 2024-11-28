import React from 'react'
import appLogo from '../assets/images/maja-agency-logo.png'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className='footer'>

      <div className='footer-app-logo-section my-3'>
      <img src={appLogo} alt='App logo' width={80} />
   
     </div>

     
<h2 className='header'>Got an Awesome Idea? Let's talk</h2>

<div className='contact-us'>

<form class="d-flex my-3 align-items-center form-setup lg-form-setup">
  <input type="email" class="form-control input-setup" 
  id="exampleFormControlInput1" 
  placeholder="Your email address"
  required
  />
  <a className='btn btn-success submit-btn mx-2'>Get started</a>
</form>

<form class="sm-form-setup input-group ">
  <input type="text" class="form-control input-setup" placeholder="Email address" 
  aria-label="Recipient's username" aria-describedby="button-addon2" />
  <button class="btn btn-success submit-btn" type="button" id="button-addon2">Button</button>
</form>


</div>

   
     

<div className='pages'>

  <Link className='link' to="#">Home</Link>
  <Link className='link' to="#">Service</Link>
  <Link className='link' to="#">Projects</Link>
  <Link className='link' to="#">Our Team</Link>

</div>

<div className='social-icons'>

<i className="fab fa-dribbble fa-lg icon" ></i>
<i className="fab fa-instagram fa-lg icon"  ></i>
<i className="fab fa-linkedin-in fa-lg icon"  ></i>
<i className="fab fa-behance fa-lg icon" ></i>

</div>

 


    

   
   
        
    </div>
  )
}

export default Footer