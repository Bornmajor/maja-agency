import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const PresenterCard = ({width,height,title,url,desc,imgUrl}) => {
 

  return (
    <a className='presenter-card' href={url?url:'#'}>

       {/* <div className='external-link'>
         <a href={ url? url: '#'}>n
          <i class="fas fa-external-link-alt"></i>    
         </a>
       
       </div> */}
      

        <img id="presenter-img" src={imgUrl} width={width ? width : '100%'} height={height ? height : ''}/>

   
         <div className='desc'>
            <p className='header'>{title}</p>
            
         </div>

        
    </a>
  )
}

export default PresenterCard