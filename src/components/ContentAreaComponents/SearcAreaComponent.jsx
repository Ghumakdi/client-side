import React from 'react'
import SearchAreaHeader from './SearchAreaComponents/SearchAreaHeader'
import SearchBar from './SearchAreaComponents/SearchBar'


function SearcAreaComponent() {
  return (
    <div className='search-area-container '>
          <SearchAreaHeader />
          <SearchBar />
          <div className='mt-3'>
            <h1 className='text-xl font-bold'>Recommendation:</h1>
          </div>
    </div>
  )
}

export default SearcAreaComponent