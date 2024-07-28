import React, { useState } from 'react'
import TextButtonContainer from '../../TextButtonContainer'
import useCurrentDate from '../../../hooks/usCurrentDate'

function SearchAreaHeader() {
const [activeTab , setActivetab] = useState('hotels')
const formattedDate = useCurrentDate();

const tabs = [{name:'Hotels' , key: 'hotels'},{name:'Places' , key:'places'},{name:'Restaurants', key:'restaurants'}]


const handleOnClick = (key)=>{
  setActivetab(key);  
}

  return (
    <div className='flex justify-between items-center'>
            <div className='left-header-area flex justify-evenly space-x-1'> 
                {tabs.map((tab,index)=>(
                  <TextButtonContainer key={index} text={tab.name} isActive={activeTab === tab.key} onClick={()=>handleOnClick(tab.key)} />
                ))}

            </div>
            <div className='right-date-area '>
                Today : {formattedDate}
            </div>
    </div>
  )
}

export default SearchAreaHeader