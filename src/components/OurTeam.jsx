import React from 'react'
import './ourteam.css'
const OurTeam = () => {
  return (
      <div id='team' className='main-our-team-container'>
           <div className='our-team-container'>
          <h2>Our Team</h2>
          
         
              <div>
                  <img src="/src/assets/1 - team-avatar-1-170x170.jpg" alt="image" />
                  <p>Antov Alikov</p>
                  <p>Founder of Artic Capital</p>
              </div>
              </div>

              <div className='our-team-container'>
              <h2>Advisory Board</h2>

              <div>
              
                  <img src="/src/assets/2 - moiseev-170x170.png" alt="image" />
                  <p>Antov Alikov</p>
                  <p>Member of the Advisory Board</p>
              </div>

          </div>
    </div>
  )
}

export default OurTeam
