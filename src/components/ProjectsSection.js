import React from 'react'
import { Link } from 'react-router-dom'
import PresenterCard from './PresenterCard'

const ProjectsSection = () => {
  return (
     <>

<div className='projects' id="projects">

<div className='d-flex justify-content-between align-items-center classic-container'>
   
   <h2 className='classic-header'>
    Projects we <span className='primary-text'> have completed</span>
    </h2>


    <div className='alternative-header'>

      <Link to="#"
     className='btn btn-outline-success mx-2'>
       Start new project
     </Link>
        
      <a href="https://majasociet.netlify.app/"
      target='_blank'
      rel="noreferrer" 
     className='btn btn-success'>
       See all works
     </a>

    

    </div>

   

    </div>

     <div className='horizontal-scrollable'>

     <PresenterCard
      title="Wesa Academy"       
      imgUrl="https://res.cloudinary.com/dx8t5kvns/image/upload/v1732638758/figma%20designs/pjymhnd4vebkamc6ueuh.jpg"
      width="400px"
      height="300px"
      url="https://wesa-academy.netlify.app/"
     />

     <PresenterCard
      title="PixStream App" 
      imgUrl="https://res.cloudinary.com/dx8t5kvns/image/upload/v1732624419/figma%20designs/raoa7yet84sltpgwceht.png"
      width="300px"
      height="300px"
      url="#"

     />
       <PresenterCard
      title="Live geosharing app" 
      imgUrl="https://res.cloudinary.com/dx8t5kvns/image/upload/v1732642605/figma%20designs/tjvgwec1yovm5tcvml3u.png"
      width="300px"
      height="300px"
      url="#"

     />

     <PresenterCard
      title="Offline cloud data sync app" 
      imgUrl="https://res.cloudinary.com/dx8t5kvns/image/upload/v1732642536/figma%20designs/uw5whkyyz21lidrdnhru.png"
      width="300px"
      height="300px"
      url="#"

     />


     </div>


</div>
     
     </>
  )
}

export default ProjectsSection