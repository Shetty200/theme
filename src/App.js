
import Style from './App.css';
import image from './images/user_1.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
// import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container } from 'react-bootstrap';
import React, { useState } from "react";
import styled from "styled-components";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  
  faFacebook,
  faTwitter,
  faInstagram,
  faGoogle
} from "@fortawesome/free-brands-svg-icons";


const theme = {
  blue: {
    default: "#3f51b5",
    hover: "#283593"
  },
  pink: {
    default: "#e91e63",
    hover: "#ad1457"
  }
};

const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

Button.defaultProps = {
  theme: "blue"
};



function App() {
  return (
    <div>
     <div className="image">
     <img src={image}>
      </img>
      </div>
        <div> 
     <div className="headingtag">
     <div className="Htag">
      <h1  style={Style.jamestag}>James Bond</h1>
      </div>
      </div>
      <div className="headingtag2">
      <div className={Style.Container2} >    
       <p style={Style.paragraph}> Uk,Brighton</p>
      <p>Web Developer with more than <br></br>1 years of experince in python,js,sql,react </p>
</div>
</div>

  
    
      <div className="social-container">
      <a href="https://www.twitter.com"className="twitter social" >
        <FontAwesomeIcon icon={faTwitter} size="2x" /></a>
        </div>
      
  
        <div className="social-container01">
        <div className="socialicons20">   
        <a href="https://www.facebook.com "className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" /></a>
      </div>
      </div>


      <div className="social-container02">
      <div className="socialicons2">   
      <a href="https://www.instagram.com" 
      className="google social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      </div>
      </div>

      <div className="social-container04">
      <div className="socialicons3">   
      <a href="https://www.google.com"
        className="instagram social">
        <FontAwesomeIcon icon={faGoogle} size="2x" />
        </a>
        </div>
        </div>
        </div>
        
        
        <Button onClick={Button}>
  Contact
</Button>
<Button onClick={Button}>
  Share
</Button>

    </div>

   

   
    

   


     

  
  );
}

export default App;
