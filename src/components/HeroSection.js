import React from 'react'
import profileIcons from '../assets/images/group-icons.png'
import professions from '../assets/images/professions3.png'

const HeroSection = () => {
  return (
    <>
      <div className='hero d-flex justify-content-center my-3' id="hero">

<div className='hero-text-content'>

     <div className='d-flex align-items-center justify-content-center'>
      <img src={profileIcons} width="80px" alt="Clients"/>
      <p className='mx-2 my-2 bond-normal'>50K+ satisfied clients</p>   
     </div>

     <div className='my-2'>

         <p className='bg-hero-text'>
         Your ideas, Our design,
         <span className='primary-text'>their impact</span>  
         </p>

         <p className='sm-hero-text'>
         We design and develop elegant applications, websites, and digital products.
         </p>
   
        
     </div>
     
 


 </div>

 </div>


 <div className='d-flex justify-content-center'>
    <img src={professions} width="60%" alt="profeesions posing" /> 
 </div>
 
    </>
  )
}

export default HeroSection