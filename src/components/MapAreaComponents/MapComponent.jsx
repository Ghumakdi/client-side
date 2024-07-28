import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';




function MapComponent() {
  const userData = useSelector((state)=>state.users);


  return(
      <div className='w-full max-w-full h-full max-h-full rounded-2xl'>
          <iframe
           className='w-full h-full rounded-2xl' 
            title="map"
            src={`https://maps.google.com/maps?q=${userData.lat},${userData.long}&z=15&output=embed`}
          >
          </iframe>
      </div>
  );


}

export default MapComponent;
