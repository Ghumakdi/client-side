import React from 'react'
import MainMenuComponents from './MainMenuComponents'
import RightMenuComponents from './RightMenuComponents'
import Logo from './Logo'

function HeaderComponent() {
  return (
    <div className=' flex justify-between w-[100%] max-h-[10%] mt-1'>
        <div className='logo-place'> 
          <Logo />
        </div>
        <div className='main-place '> 
          <MainMenuComponents />  
         </div>
        <div className='right-place '> 
          <RightMenuComponents />
        </div>
    </div>
  )
}

export default HeaderComponent