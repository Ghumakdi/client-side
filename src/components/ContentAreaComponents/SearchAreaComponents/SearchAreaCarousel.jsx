import axios from 'axios'
import React, { useEffect } from 'react'

function SearchAreaCarousel() {

  const [data, setData] = React.useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
  <>
  </>
  )
}

export default SearchAreaCarousel