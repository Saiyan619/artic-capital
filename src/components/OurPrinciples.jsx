import React from 'react'
import './ourprinciples.css'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const OurPrinciples = () => {
    const [ref, InView] = useInView({
        triggerOnce: false,
        threshold:0.2
      })
  return (
    <div id='principles' className='main-ourprinciples-container'>
        <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={InView ? {opacity: 1, y: 0 } : {}}
                exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.5 }}>
              <h2>Our Principles</h2>
          </motion.div>
         
          <div className='sub-ourprinciples-container'>
          <div className='illustration-container'>
              <img className='illustration' src="./assets/principles-illustration.png" alt="illustration" />
          </div>
          
          <div>
              <div className='principle'>
                  <h4>Decision-making</h4>
                  <p>
                      Customer-oriented decisions by Investment Committee, subject to Supervisory Board
                  </p>
              </div>

              <div className='principle-right'>
                  <h4>Dynamics</h4>
                  <p>Full involvement of the shareholders in company's business activity, flat management structures and entrepreneurial corporate mentality.
                  </p>
              </div>  <div className='principle'>
                  <h4>Steady Return Generation</h4>
                  <p>By focusing on steady return generation across different market environments, we provide additional sources of income to our investors.
                  </p>
              </div>
              
              <div className='principle-right'>
                  <h4>Relationship Management</h4>
                  <p>Meet financiers whose education level and entrepreneurial experience will cover the entire spectre of financial tasks you may have.
                  </p>
              </div>  <div className='principle'>
                  <h4>Transparency</h4>
                  <p>We believe in total transparency. We are clear about how we operate, who our owners are, and the connection between our entities.
                  </p>
              </div>
              
              <div className='principle-right'>
                  <h4>Safety of Funds</h4>
                  <p>We choose to keep our clients assets only with the largest and regulated financial institutions.
                  </p>
              </div>  <div className='principle'>
                  <h4>Strategy</h4>
                  <p>We create diversified portfolio by applying strategies both for the stock markets and for the alternative investment universe.
                  </p>
              </div>
              
              <div className='principle-right'>
                  <h4>Innovation</h4>
                  <p>In a constantly changing environment, the status quo must be challenged. Our clients benefit from cutting-edge investment innovations.
                  </p>
              </div>
              </div>
              </div>
    </div>
  )
}

export default OurPrinciples
