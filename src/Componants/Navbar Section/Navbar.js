import React, { useState, useRef, useEffect } from 'react';
import '../Navbar Section/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const headerRef = useRef(null);

  const handleMenuClick = () => {
    setIsMenuActive(!isMenuActive);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      headerRef.current.classList.add('active');
    } else {
      headerRef.current.classList.remove('active');
    }
    setIsMenuActive(false); // Close menu when scrolling
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup
    };
  }, []);

  return (
    <header ref={headerRef} className={`header ${isMenuActive ? 'active' : ''}`}>
      <a href="#home" className="logo">handy<span>Max.</span></a>

      <nav className={`nav ${isMenuActive ? 'active' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#reviews">Reviews</a>
        <a href="#contact">Contact Me</a>
        <a href="#contact" className="link-btn">Make Appointment</a>
      </nav>

      <div id="menu-btn" onClick={handleMenuClick}>
        <FontAwesomeIcon icon={isMenuActive ? faTimes : faBars} />
      </div>
    </header>
  );
};

export default Navbar;
