import React from 'react'

const ContactUs = () => {
  return (
    <div className='contact-us'>

  <div className='inner-container'>
 <h2 className='header'>Got an Awesome Idea? Let's talk</h2>

  <p className='sub-header'>If you are confused or in doubt , you can freely contact us</p>

   <div class="form-setup input-group mb-3">
  <input  type="text" class="form-control" placeholder="Your email address"
   aria-label="Recipient's username" aria-describedby="button-addon2" />
  <button class="btn btn-secondary contact-btn" type="button" id="button-addon2">Submit</button>
   </div>

  </div>
 
        
    </div>
  )
}

export default ContactUs