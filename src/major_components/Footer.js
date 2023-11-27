import React from 'react';
import './FooterStyle.css'
import mini_capy from "../assests/footer-img.jpg"



const Footer = () => {
  return <div>
      <footer className='footer-style'>
      <img src={mini_capy} alt='small_capybara' style={{width:"50px"}}/>  
        <p style={{color:"black", fontSize:"10"}}>© 2023 CAPYKID. All Rights Reserved.</p>
              
    </footer>
  </div>;
};

export default Footer;