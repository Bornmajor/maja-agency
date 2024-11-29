import React from 'react'
import PresenterCard from './PresenterCard'
import office1 from '../assets/images/pexels-seven11nash-380768.jpg'
import office2 from '../assets/images/pexels-seven11nash-380769.jpg'

const LocationsSection = () => {
  return (
    <>
       <div className='company-locations py-4' id="locations">

<div className='d-flex justify-content-between classic-container'>
 
<h2 className='classic-header'>
 We are serving in <span className='primary-text'>various countries </span>
</h2>

<p className='alternative-header' style={{width:'350px'}}>
Leverage innovative digital techniques to enhance brand awareness and customer engagement.
</p>

</div>


<div className='horizontal-scrollable' >


<PresenterCard 
 title="Kenya branch"
 imgUrl={office1}
 width="400px"
 height="280px"
/>

<PresenterCard 
 title="Uganda branch"
 imgUrl={office2}
 width="400px"
  height="280px"
/>

<PresenterCard 
 title="South Africa branch"
 imgUrl={office1}
 width="400px"
 height="280px"
/>

<PresenterCard 
 title="Rwanda branch"
 imgUrl={office2}
 width="400px"
  height="280px"
/>






</div>

</div>
    </>
  )
}

export default LocationsSection