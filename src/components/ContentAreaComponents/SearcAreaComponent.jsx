import React from 'react'
import SearchAreaHeader from './SearchAreaComponents/SearchAreaHeader'
import SearchBar from './SearchAreaComponents/SearchBar'
import SearchAreaCarousel from './SearchAreaComponents/SearchAreaCarousel'


function SearcAreaComponent() {
  return (
    <div className='search-area-container  h-full overflow-auto'>
          <SearchAreaHeader />
          <SearchBar />
          <div className='mt-3'>
            <h1 className='text-xl font-bold'>Recommendation:</h1>
          </div>
          <div className='p-0'>
            <SearchAreaCarousel/>
          </div>
    </div>
  )
}

export default SearcAreaComponent