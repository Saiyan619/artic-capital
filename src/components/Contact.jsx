import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div id='contact' className='main-contact-container'>
          <h2>Contacts</h2>

          <div className='sub-contact-container'>
              <div className='sub-contact-container_left'>
                  <img src="./assets/ac-black.png" alt="logo" />
                  <p><span>Address:</span>Premier Business Centre, 10th Floor,<br /> Sterling Tower, 14 Poudriere St, Port Louis, 11302</p>
                  <p><span>Email:</span>E-mail: info@arctic-capital.com</p>
                  <button>contact</button>
              </div>

              <div className='sub-contact-container_right'>
                  <img src="./assets/map-960x473.png" alt="map image" />
              </div>
          </div>
    </div>
  )
}

export default Contact
