import React from 'react';
import '../style.css';
import { SlArrowDown } from "react-icons/sl";
import { Link } from 'react-router-dom';
// import Hero17 from '../components/hero17';
import Slideshow from '../components/Slideshow';


function Home() {
  return (
    <div>
      <div className="hero">
        <video className="heroVideo" autoPlay muted loop>
          <source src="./3d.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="heroContent">
          <h1>Welcome to ClixSys</h1>
          <p>Innovative solutions for your business</p>
          <button className="heroButton">Learn More</button>
          {/* scroll text */}
        </div>
        <div className="scrollText">
          <p>
            Scroll down to learn more about our services <br></br>
            <SlArrowDown />
          </p>
        </div>
      </div>
      <div className='container'>
        <div className='home01'>
          <h1>Discover Our Automation Systems</h1>
          <p>Experience the future with our cutting-edge automation systems that enhance convenience and efficiency in your daily life.</p>
          <div>
            <button className="btn01">
              <Link to="/Solutions">Explore More</Link>
            </button>
            <button>
              <Link to="/Services">Shop Smart Products</Link>
            </button>
          </div>
          {/* <Hero17></Hero17> */}
        </div>
      </div>
      <Slideshow direction="left" />
      <Slideshow direction="right" />
    </div>
  );
}

export default Home;