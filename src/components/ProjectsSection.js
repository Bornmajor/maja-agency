import React from 'react'
import { Link } from 'react-router-dom'
import PresenterCard from './PresenterCard'

const ProjectsSection = () => {
  return (
     <>

<div className='projects'>

<div className='d-flex justify-content-between align-items-center' style={{padding:'30px'}}>
   
   <h2 className='classic-header'>
    Projects we <span className='primary-text'> have completed</span>
    </h2>


    <div className='alternative-header'>

      <Link to="#"
     className='btn btn-outline-success mx-2'>
       Start new project
     </Link>

      <Link to="#"
     className='btn btn-success'>
       See all works
     </Link>

    

    </div>

   

    </div>

     <div className='horizontal-scrollable' style={{paddingLeft:'30px'}}>

     <PresenterCard
      title="Wesa Academy"       
      imgUrl="https://res.cloudinary.com/dx8t5kvns/image/upload/v1732638758/figma%20designs/pjymhnd4vebkamc6ueuh.jpg"
      width="400px"
      height="300px"
     />

     <PresenterCard
      title="PixStream App" 
      imgUrl="https://res.cloudinary.com/dx8t5kvns/image/upload/v1732624419/figma%20designs/raoa7yet84sltpgwceht.png"
      width="300px"
      height="300px"

     />
       <PresenterCard
      title="Live geosharing app" 
      imgUrl="https://res.cloudinary.com/dx8t5kvns/image/upload/v1732642605/figma%20designs/tjvgwec1yovm5tcvml3u.png"
      width="300px"
      height="300px"

     />

     <PresenterCard
      title="Wesa Academy" 
      desc="Wesa Academy is a school landing page designed to provide visitors with essential information about the school, including details about the institution, career opportunities, and ways to get in touch. The application is built using React, which ensures a fast, interactive, and seamless user experience."
      imgUrl="https://res.cloudinary.com/dx8t5kvns/image/upload/v1732638758/figma%20designs/pjymhnd4vebkamc6ueuh.jpg"
      width="300px"
      height="300px"

     />


     </div>


</div>
     
     </>
  )
}

export default ProjectsSection