import React from 'react'
import TestimonialCard from './TestimonialCard'
import { Link } from 'react-router-dom'
import user1 from '../assets/images/user1.jpg'
import user2 from '../assets/images/user2.jpg'
import user3 from '../assets/images/user3.jpg'
import user4 from '../assets/images/user4.jpg'

const TestimonialSection = () => {
  return (
    <div className='testimonial'>

    <div className='d-flex justify-content-between align-items-center' style={{padding:'30px'}}>
       
       <h2 className='classic-header'>
        What Our  <span className='primary-text'>Satisfied Client Say</span>
        </h2>


        <div>


          <Link to="#"
         className='btn btn-success alternative-header'>
          Contact Us Now
         </Link>

        

        </div>

       

    </div>

    <div className='horizontal-scrollable' style={{paddingLeft:'30px'}}>

     <TestimonialCard
     profileUrl={user1}
      username="Sarah M"
      organization="Product Manager at FlowApp"
      testimony="The team completely transformed our app’s interface! The new design is sleek, intuitive, and user-friendly. We've seen a significant increase in user engagement since the revamp"
     />

    <TestimonialCard
     profileUrl={user2}
      username="Emily R"
      organization="Marketing Director at Bright Ideas Co"
      testimony="The custom illustrations they created for our marketing campaign were stunning! They added a unique touch that made our brand stand out from competitors."
     />

     <TestimonialCard
     profileUrl={user4}
      username="Lisa T"
      organization="CTO of FitLife Solutions"
      testimony="Our app launch was a huge success, thanks to the seamless development process. The features work flawlessly, and the team ensured the app performs well on all devices."
     />

     <TestimonialCard
     profileUrl={user3}
      username="Michael P."
      organization="CEO at AdVision Agency"
      testimony="The motion graphics they produced for our social media ads were fantastic! They captured attention immediately and helped us boost our conversions by 30%."
     />

    </div>



    </div>
  )
}

export default TestimonialSection