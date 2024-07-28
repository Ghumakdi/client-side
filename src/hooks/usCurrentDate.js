import { useState , useEffect } from "react";


const useCurrentDate = () => {
    const [formattedDate, setFormattedDate] = useState('');


    useEffect(() => {
      const today = new Date();
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const dateStr = today.toLocaleDateString('en-US', options);
      setFormattedDate(dateStr);
    }, []);
  
    return formattedDate;
}

export default useCurrentDate;