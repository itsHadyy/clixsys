import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo01.png';
import '../style.css';
import { gsap } from 'gsap';
import { useLocation } from 'react-router-dom';

function Navbar() {
  const linkRefs = useRef([]);
  const [showNavbar, setShowNavbar] = useState(false);
  const location = useLocation();

  // GSAP hover animations for links (optimized and reusable)
  useEffect(() => {
    const createHoverAnimation = (link) => {
      const hoverAnimation = gsap.timeline({ paused: true });

      hoverAnimation.to(link, {
        backgroundPosition: '0% 100%',
        duration: 0.2,
        ease: 'power2.inOut',
      });

      link.addEventListener('mouseenter', () => hoverAnimation.play());
      link.addEventListener('mouseleave', () => hoverAnimation.reverse());
    };

    linkRefs.current.forEach(createHoverAnimation);
  }, [linkRefs]);

  // Scroll listener to toggle navbar visibility (conditional for home page)
  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === '/') { 
        setShowNavbar(window.scrollY > 50); 
      } else {
        setShowNavbar(true); // Show navbar on all other pages
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  return (
    <div className={`nav ${showNavbar ? 'visible' : 'hidden'}`}>
      <div className="links">
        <img src={logo} alt="Logo" className="logo" />
        <ul>
          {['/', '/Services', '/Solutions', 'Projects', '/About'].map((path, index) => (
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