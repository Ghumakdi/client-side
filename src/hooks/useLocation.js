import { useEffect , useState } from "react";


const useLocation = () => {

    const [location,setLocation] = useState({latitude:null,longitude:null});
    const [error,setError] = useState(null);

    useEffect(()=>{
        try{
            if(!navigator.geolocation){
                setError('Geolocation is not supported by your browser');
                return;
            }

            const success = (position)=>{
                setLocation({
                    latitude:position.coords.latitude,
                    longitude:position.coords.longitude
                });
            }

            const error = ()=>{
                setError('Unable to retrieve your location');
            }

            navigator.geolocation.getCurrentPosition(success,error,{enableHighAccuracy:true});


        }
        catch(error){
            setError(error);
        }

    },[])

    return {location,error};

}


export default useLocation;