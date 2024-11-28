import React from 'react'
import { Link } from 'react-router-dom'

const TestimonialCard = ({username,testimony,organization,profileUrl}) => {
  return (
    <div className='testimonial-card'>

      
            <div className='user-details w-100 d-flex align-items-center justify-content-between mb-3' >

                <img src={profileUrl}  />

                <div className='profile-details mx-2'>
                    <p>{username}</p>
                    <p className='text-muted' style={{fontSize:"14px"}}>{organization}</p>
                </div>

               </div>

                <div>
                  <p class="testimony" >{testimony}</p>
                </div>

                <Link className='link'>
                Learn more <i class="fas fa-external-link-alt"></i> 
                </Link>


       
        
    </div>

  )
}

export default TestimonialCard