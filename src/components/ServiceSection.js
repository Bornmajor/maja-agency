import React from 'react'
import ServiceCard from './ServiceCard'
import { Link } from 'react-router-dom'

const ServiceSection = () => {
  return (
    <>
    
    <div className='services' id="services">
           
           <div className='d-flex justify-content-between align-items-center classic-container'>
             
             <h2 className='classic-header' >
               What we serve <span className='primary-text'> For Your Business</span>
              </h2>
     
              <Link to="#"
              className='btn btn-success alternative-header'
              >
                 See portfolio
               </Link>
     
              </div>
   
              <div className='horizontal-scrollable' >
                <ServiceCard
                 title="UI/UX Design"
                 icon="fas fa-layer-group"
                  desc="Crafting intuitive and visually appealing interfaces that enhance user experiences across web and mobile platforms." />
   
                <ServiceCard
                title="Logo Branding"
                icon="fab fa-joomla"
                desc="Creating unique, memorable logos that define your brand identity and make a lasting impression."
                />
                <ServiceCard 
                title="Illustration"
                icon="fas fa-puzzle-piece"
                desc="Designing custom illustrations that bring your ideas to life with creativity and originality."
                
                />
                <ServiceCard
                title="Web Development"
                icon="fas fa-window-restore"
                desc="Building responsive, scalable, and user-friendly websites tailored to your business needs."
                />
                <ServiceCard
                title="App Development"
                icon="fas fa-mobile"
                desc="Developing high-performance mobile and web applications to engage your audience and drive results." />
               
                <ServiceCard
                title="Motion Design"
                icon="fas fa-wind"
                desc="Producing dynamic animations and motion graphics to captivate and communicate your message effectively."
                />
   
                
              </div>
             
   
   
             
           </div>
    </>
  )
}

export default ServiceSection