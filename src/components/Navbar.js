import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo01.png';
import '../style.css';
import { gsap } from 'gsap';

function Navbar() {
  const linkRefs = useRef([]);
  const [showNavbar, setShowNavbar] = useState(false);

  // GSAP hover animations for links
  useEffect(() => {
    linkRefs.current.forEach((link) => {
      if (link) {
        const hoverAnimation = gsap.timeline({ paused: true });

        // Create the hover animation
        hoverAnimation.to(link, {
          backgroundPosition: '0% 100%',
          duration: 0.2,
          ease: 'power2.inOut',
        });

        // Mouseenter: Play the animation
        link.addEventListener('mouseenter', () => hoverAnimation.play());

        // Mouseleave: Reverse the animation
        link.addEventListener('mouseleave', () => hoverAnimation.reverse());
      }
    });
  }, []);

  // Scroll listener to toggle navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 50); // Show navbar after 50px scroll
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup scroll listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`nav ${showNavbar ? 'visible' : 'hidden'}`}>
      <div className="links">
        <img src={logo} alt="Logo" className="logo" />
        <ul>
          {['/', '/Services', '/Solutions', '/About'].map((path, index) => (
            <li key={index}>
              <Link
                to={path}
                ref={(el) => (linkRefs.current[index] = el)}
                className="animated-link"
              >
                {path === '/' ? 'Home' : path.replace('/', '')}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button className="btn01">
          <Link to="/contact">Contact Us</Link>
        </button>
        <button>
          <Link to="/quote">Request Quote</Link>
        </button>
      </div>
    </div>
  );
}

export default Navbar;