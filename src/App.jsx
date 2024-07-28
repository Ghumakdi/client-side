import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderComponent from './components/HeaderComponents/HeaderComponent'
import SearcAreaComponent from './components/ContentAreaComponents/SearcAreaComponent'
import FilterAreaComponent from './components/ContentAreaComponents/FilterAreaComponent'

function App() {
  

  return (
    <>
        <div className='flex h-screen m-0 p-0 box-border mx-auto justify-center flex-col'> 
              <HeaderComponent />
              <div className='flex h-[90%] w-[96%] justify-evenly m-4 p-0'>

                  <div className=' left-content-area  flex flex-col  min-h-[100%] min-w-[42%] justify-around'>
                            <div className = " content p-5 bg-primaryLight-default h-[54%] w-[100%]  rounded-2xl">
                                <SearcAreaComponent />
                            </div>
                            <div className = "content p-5 bg-primaryLight-default h-[44%] w-[100%] rounded-2xl">
                                  <FilterAreaComponent />
                            </div>
                  </div>
                  <div className='map-area bg-primaryLight-default min-h-[100%] min-w-[42%] rounded-xl items-center'>
                                 map area
                  </div>
              </div>

        </div>
    </>
  )
}

export default App
