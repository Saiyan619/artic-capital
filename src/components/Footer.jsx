import React from 'react'
import './footer.css'

const Footer = () => {
    const scrollToHeader = () => {
        const headSection = document.getElementById('head');
        headSection.scrollIntoView({ behavior: 'smooth' });
      };
    return (
      
    <footer>
      
          <div className='icons-container'>
              <img src="./assets/icons8-linkedin(1).svg" alt="linkedin" />
              <img src="./assets/icons8-telegram(2).svg" alt="telegram" />
          </div>

          <div className='sub-footer'>
              <div>
                  <img src="./assets/ac-white.png" alt="logo" />
              </div>

              <div className='footer-list'>
                  <ul>
                    <li>About</li>
                    <li>services</li>
                    <li>team</li>
                    <li>advisory board</li>
                    <li>contact</li>
                  </ul>

                  <ul>
                    <li>privacy policy</li>
                    <li>risk disclosure</li>
                    <li>term of business</li>
                  </ul>
              </div>

              <div className="to-the-top-container" onClick={scrollToHeader}>
                  <span>to the top</span>
              </div>
          </div>
    </footer>
  )
}

export default Footer
