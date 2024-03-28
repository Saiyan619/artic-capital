import React from 'react'
import { useState } from 'react'
import './header.css'
import { Twirl as Hamburger } from 'hamburger-react'

const Header = () => {
  const [isOpen, setOpen] = useState(false)
  // function toggleNav() {
  //   setOpen(!isOpen)
  // }
  const scrollToTeam = () => {
    const teamSection = document.getElementById('team');
    teamSection.scrollIntoView({ behavior: 'smooth' });
  }; const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  }; const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }; const scrollToService = () => {
    const serviceSection = document.getElementById('service');
    serviceSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header id='head' className='main-header'>
          <nav className='nav'>
              <div className='logo-container'>
                  <img src="./assets/ac-white.png" alt="header-logo" />
              </div>
              
              <div className={isOpen ? 'sub-nav_active' : 'sub-nav'}>
                  <ul>
                      <li onClick={scrollToAbout}>about us</li>
                      <li onClick={scrollToService}>services</li>
                      <li onClick={scrollToTeam}>team</li>
                      <li>advisory board</li>
                      <li onClick={scrollToContact}>contacts </li>
                  </ul>
                  
                  <div>
                      <button className='nav-btn'>login</button>
                  </div>
        </div>
        <div className='hamburger'>
          <Hamburger color={isOpen ? '#000000' : "#FFFFFF"} toggled={isOpen} toggle={setOpen} />
          </div>

      </nav>
      
      <div className='hero-container'>
        <h1>ARCTIC CAPITAL</h1>
        <p className='hero-p-text'>Interational Assets and <br /> Investment Mangement <br /> Company</p>
        <button className='hero-btn'>Open Account</button>
      </div>
    </header>
  )
}

export default Header
