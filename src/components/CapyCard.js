import React, {useState,useEffect} from 'react'
import ReactPaginate from 'react-paginate';
import axios from "axios";
import { IoIosFemale } from "react-icons/io";
import { IoIosMale } from "react-icons/io";

import "./CapyCardStyle.css"

function CapyCard() {
  const [currentPage, setcurrentPage] = useState(0);
  const handlePageClick = async (data) => {

    setcurrentPage(data.selected)

  };
  const [CapyList, setCapyList] = useState([]);

  const [pageCount, setpageCount] = useState(0);

  let limit = 3;

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
    <>
    
      <div class="container">
        <div class="card__container">

          {CapyList.map((capybara) => (
            <article class="card__article">
              <img src={capybara.image_url} alt="image" class="card__img"/>
              <div class="card__data">
                <span class="card__description">{ capybara.summary}</span>
                {capybara.gender==="female" ?(<IoIosFemale/> ) :(<IoIosMale/>)}
                <span class="card__title">{capybara.name}</span>
                  <a class="card__button">Adopt Me</a>
               </div>
          </article>
              //name location gender summary    
             
            ))}
            
        </div>
        <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={'pagination justify-content-center'}
        pageClassName={'page-item'}
        pageLinkClassName={"page-link"}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
/>
        


    </div>
    


    
      

   

    </>

    
  );
}

export default CapyCard;