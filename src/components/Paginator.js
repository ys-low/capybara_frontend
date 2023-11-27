import React, {useState,useEffect} from 'react'

import axios from "axios";
import CapyCard from "./CapyCard"
import TopImage from "./TopImage"

const Paginator = () => {

  const [currentPage, setcurrentPage] = useState(0);

  const handlePageClick = async (data) => {

    setcurrentPage(data.selected)

  };

  const [CapyList, setCapyList] = useState([]);

  const [pageCount, setpageCount] = useState(0);

  let limit = 2;

  const BASE_URL = "http://127.0.0.1:8000/api/capybara_list/";
  

  useEffect(() => {
    //

      // Function of Fetch data using async/await with Axios
      const fetch_list = async () => {
        const { data } = await axios.get(`${BASE_URL}?limit=${limit}&offset=${(currentPage) * limit}`);
        console.log(data)
        setCapyList(data.results); // Set the fetched data
        
        setpageCount(Math.ceil(data.count / limit));
    };
    
      // Run the function
    fetch_list();
    

  }, [currentPage,limit]);



  return (
    <div>
      
      <TopImage route="my_capybaras" />
      <CapyCard/>
      
      
       
         
       
      
    
    
  </div>
  )
}

export default Paginator