import React from 'react'
import "./TopImageStyle.css";

const TopImage = ({ route }) => {
  const ImageSource = (route) => {
    switch (route) {
      case "home":
        return require("../assests/home-TopImage.jpg");
      case "capybaras":
        return require("../assests/capybaras-TopImage.jpg");
      case "my_capybaras":
        return require("../assests/my_capybaras-TopImage.jpg");
      case "steps":
          return require("../assests/steps-TopImage.jpg");
      case "contact":
        return require("../assests/contact-TopImage.jpg");
      default:
        return require("../assests/home-TopImage.jpg");
    }
  };

  return (
    <div className="mask">
      <img className="top-image" src={ImageSource(route)} alt={route} />
    </div>
  )
}

export default TopImage