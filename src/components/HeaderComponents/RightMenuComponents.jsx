import React from 'react'
import IconContianer from '../IconContainer'
import { CiHeart } from 'react-icons/ci'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { LuUserCircle } from 'react-icons/lu'

function RightMenuComponents() {
  return (
    <div className='right-menu grid grid-flow-col space-x-2'>
        <IconContianer icon = {<CiHeart />} />
        <IconContianer icon = {<IoMdNotificationsOutline /> } />
        <IconContianer icon = {<LuUserCircle />} />
    </div>
  )
}

export default RightMenuComponents