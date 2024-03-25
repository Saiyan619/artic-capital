import React from 'react'
import './about.css'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
    const [ref, InView] = useInView({
        triggerOnce: false,
        threshold:0.2
      })
  return (
      <div>
          <motion.div ref={ref}
               initial={{ opacity: 0, y: 20 }}
               animate={InView ? {opacity: 1, y: 0 } : {}}
               exit={{ opacity: 0, x: -20 }}
                   transition={{ duration: 0.5, delay: 0.5 }}
              id='about' className='about-container'>
          <h2>About Us</h2>
          <p className='about-text'>With a philosophy of providing innovative and cutting-edge investment solutions we believe in <br /> forming strong partnerships with our investors. 
            Our passion is mirrored in our investment <br /> philosophy,
              where we strive to continuously evolve and innovate to achieve the best possible <br />returns for our clients.</p>
          </motion.div>

          <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={InView ? {opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
              className='stats-container'>
              <div className='sub-stats'>
                  <span>Experience</span>
                  <p>15+ years</p>
              </div>

              <div className='sub-stats'>
              <span>Locations</span>
                  <p>2</p>
              </div>
          </motion.div>

          {/* ------solution-container---------- */}

          <div className='solution-container'>
          <h2>Our Solution</h2>
          <p className='solution-text'>We provide financial and investment management services to a broad <br />
range of institutional, corporate, and private individual clients.</p>
          </div>

          <div className='solution-stats-container'>
              <div>
                  <span>Finacial Services</span>
                  <p className='solution-sub-stats'>
                  Global Brokerage, Fixed Income Trading, Asset <br /> Management, Structured Solutions, Digital Assets, Funds <br />Platform
                  </p>
              </div>

              <div>
              <span>Wealth Management</span>
                  <p className='solution-sub-stats'>
                  Finance & Accounting, Assets Structuring, Legal & Tax <br /> Advisory, Citizenship & Residence, Property Management,<br /> Retirement & Inheritance
                  </p>
              </div>
          </div>
          </div>
  )
}

export default About
