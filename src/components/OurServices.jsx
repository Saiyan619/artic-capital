import React from 'react'
import './ourservices.css'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const OurServices = () => {
    const [ref, InView] = useInView({
        triggerOnce: false,
        threshold:0.2
      })
    const services = [
        {
            icon:'/src/assets/inv-5.svg',
            serviceName: 'Global Brokerage',
            serviceDetails: 'Voice and Electronic Brokerage'
        },
        {
            icon:'/src/assets/inv-4.svg',
            serviceName: 'Fixed Income Trading',
            serviceDetails: 'Exchange and OTC traded Markets'
        },
        {
            icon:'/src/assets/inv-3.svg',
            serviceName: 'Asset Management',
            serviceDetails: 'Advisory and Discretionary Managements'
        },
        {
            icon:'/src/assets/inv-2.svg',
            serviceName: 'Structured Solutions',
            serviceDetails: 'Structured Products and AMCs'
        },
        {
            icon:'/src/assets/inv-6.svg',
            serviceName: 'Funds Platform',
            serviceDetails: 'Managed Strategies and Securitization'
        }
    ]
    return (
        <div id='service' className='main-service-container'>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={InView ? {opacity: 1, y: 0 } : {}}
                exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.7 }}>
                <h2>Our Services</h2>
                </motion.div>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, x: '20%' }}
                animate={InView ? {opacity: 1, x: '0%' } : {}}
                exit={{ opacity: 0, x: '0%' }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                className='service-list-container'>
            {services.map((item) => {
                return <div className='service'>
                    <div className='icon-container'>
                        <img src={item.icon} className='service-icon' alt="icon" />
                    </div>

                    <div>
                        <h3>{item.serviceName}</h3>

                        <div className='divider'></div>

                        <p>{item.serviceDetails}</p>
                    </div>
                </div>
            })}
            </motion.div>
            </div>
    )
}

export default OurServices
