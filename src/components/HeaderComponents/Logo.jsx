import React from 'react'
import logo from '../../assets/logo.png'

function Logo() {
  return (
    <div className='flex items-center space-x-2 p-1'>
    <img src={logo} alt='logo' className='w-16 h-16' />
    <h1 className='text-xl font-bold text-primaryDark-default'>Ghumakadi</h1>
  </div>
  )
}

export default Logo