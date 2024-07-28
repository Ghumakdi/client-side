import { useEffect } from 'react'
import './App.css'
import HeaderComponent from './components/HeaderComponents/HeaderComponent'
import SearcAreaComponent from './components/ContentAreaComponents/SearcAreaComponent'
import FilterAreaComponent from './components/ContentAreaComponents/FilterAreaComponent'
import useLocation from './hooks/useLocation'
import { useDispatch, useSelector } from 'react-redux'
import { updateLocation } from './store/usersSlice'
import MapComponent from './components/MapAreaComponents/MapComponent'

function App() {
  const {location , error} = useLocation();
  const dispatch = useDispatch(); 
  
  const userData = useSelector((state)=>state.users);


  useEffect(()=>{
    if(location.latitude && location.longitude){
      console.log('location',location)
      dispatch(updateLocation({lat:location.latitude,long:location.longitude}))
    }
    else{
      console.log('error',error)
    }
  },[location,dispatch,error])


  return (
    <>
        <div className='flex h-screen m-0 p-0 box-border mx-auto justify-center flex-col'> 
              <HeaderComponent />
              <div className='flex h-[90%] w-[96%] max-w-[96%] justify-evenly m-4 p-0'>

                  <div className=' left-content-area  flex flex-col  min-h-[100%] min-w-[42%] max-w-[42%] max-h-[100%] justify-around'>
                            <div className = " content p-5 bg-primaryLight-default h-[54%] w-[100%]  rounded-2xl">
                                <SearcAreaComponent />
                            </div>
                            <div className = "content p-5 bg-primaryLight-default h-[44%] w-[100%] rounded-2xl">
                                  <FilterAreaComponent />
                            </div>
                  </div>
                  <div className='map-area bg-primaryLight-default min-h-[100%] min-w-[42%] max-w-[42%] rounded-xl items-center'>
                             <MapComponent />
                                
                  </div>
              </div>

        </div>
    </>
  )
}

export default App
