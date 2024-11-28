import React from 'react'
import { Link } from 'react-router-dom'

const ServiceCard = ({icon,title,desc,type}) => {
  return (
    <div className='service-card'>

        <div className='icon my-2'>
        <i className={`${icon} primary-text`}></i>
        </div>

        <p className='header'>
        {title}
        </p>

        <p className='desc'>
         {desc}
        </p>

        <Link className='link'>Learn more <i class="fas fa-external-link-alt"></i> </Link>
    
        
    </div>
  )
}

export default ServiceCard