import { useEffect, useState } from 'react';
import axios from "axios";


import React from 'react'

const Fetch = () => {
    const BASE_URL = "http://127.0.0.1:8000/api/capybara_list/";
    // State to hold fetched data
    // Default of CapyList is array
    const [CapyList, setCapyList] = useState([]);

    useEffect(() => {

        // Function of Fetch data using async/await with Axios
        const fetch_list = async () => {
            const { data } = await axios.get(`${ BASE_URL }?limit=2&offset=1`);
            setCapyList(data.results); // Set the fetched data
        };
        // Run the function
            fetch_list();
    }, []);//no component mounted so it only run once
    return (
        <div className="container">
          <h1>Capybara List</h1>
          <ul>
            {CapyList.map((capybara) => (
              <li key={capybara.id}>
                <h2>{capybara.name}</h2>
                <p><strong>Gender:</strong> {capybara.gender}</p>
                <img src={capybara.image_url} alt={capybara.name} style={{ maxWidth: '100%', height: 'auto' }} />
                
              </li>
            ))}
          </ul>
        </div>
      );
    };

export default Fetch