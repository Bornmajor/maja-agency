import React, { useContext, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import TopBar from '../components/TopBar'
import MyContext from '../context/context'
import AppLoader from '../components/AppLoader'



const Root = () => {
  const {isAppLoading,setIsAppLoading} = useContext(MyContext);
  const location = useLocation();

  useEffect(()=>{

       // Your code to run when the route changes
       console.log('Route changed:', location.pathname);
       setTimeout(() => {
       setIsAppLoading(false)  
       }, 800);

  },[location])
  
  return (
    <>
       {isAppLoading ?
   <div className='d-flex justify-content-center align-items-center vh-100'>
    <AppLoader /> 
    </div>
    :
    <>
<TopBar />
<Outlet />
    </>
    
       }
    </>
  )
}

export default Root