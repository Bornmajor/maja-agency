import React, { useEffect } from 'react'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import LocationsSection from '../components/LocationsSection'
import ServiceSection from '../components/ServiceSection'
import ProjectsSection from '../components/ProjectsSection'
import TestimonialSection from '../components/TestimonialSection'

const Home = () => {

 
  return (
    <div class="main-container">

     <HeroSection />
     

       <div className='container-stats-locations-services'>
        <LocationsSection />
        <ServiceSection />
       </div>

      <ProjectsSection />
      <TestimonialSection />

       <Footer />
        
    </div>
  )
}

export default Home