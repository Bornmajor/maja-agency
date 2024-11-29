import React, { useContext,useState } from 'react'
import appLogo from '../assets/images/maja-agency-logo.png'
import { Link } from 'react-router-dom'
import MyContext from '../context/context'


const Footer = () => {
  const {successFeedback,contextHolder} = useContext(MyContext);
  const [email,setEmail] = useState('');
  const [isSubmit,setIsSubmit] = useState(false);

  const submitForm = (e) =>{
    e.preventDefault();
    successFeedback('We have sent you an email');
    setEmail('');
    setIsSubmit(true);

    setTimeout(() => {
      setIsSubmit(false);
    }, 3000);
  }
  return (
    <div className='footer'>
      {contextHolder}
      <div className='footer-app-logo-section my-3'>
      <img src={appLogo} alt='App logo' width={80} />
      <span className='title'>Maja Agency</span>
   
     </div>

     
<h2 className='header'>Your next big idea starts here. Let's chat.</h2>

<div className='contact-us' id="contact-us">

<form class="d-flex my-3 align-items-center form-setup lg-form-setup" onSubmit={submitForm}>
  <input type="email" class="form-control input-setup" 
  id="exampleFormControlInput1" 
  placeholder="Your email address"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
  />
  <button type='submit' className='btn btn-success submit-btn mx-2' >Get started</button>
</form>

<form class="sm-form-setup input-group" onSubmit={submitForm}>
  <input type="email"
   class="form-control input-setup"
   placeholder="Email address" 
  aria-label="Recipient's username" aria-describedby="button-addon2"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required/>
  <button type='submit' class="btn btn-success submit-btn" id="button-addon2">
    {isSubmit ? (
      <>
      <i class="fas fa-check"></i> Sent
      </>

    )
   
    :
    'Submit'
     }
    
    </button>
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