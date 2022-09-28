import React from 'react'
import Heading from '../components/Heading'
import { motion } from 'framer-motion'
// import { useState } from 'react'



const about_variants = {

    initial: {
        opacity: 0,
        // x: '100vw'
    },

    animate: {
        opacity: 1,
        // x: 0,
        transition: {
            ease: 'easeInOut',
            delay: 0.5,
            duration: 1
        }
    },

    exit: {
        x: '-100vw',
        transition: {
            ease: 'easeInOut',
            duration: 1
        }
    }
}

function About() {





    return (
        <motion.div variants={about_variants} initial='initial' animate="animate" exit='exit' className='flex flex-col justify-center mx-3'>


            <div>

                <Heading title={"WHO WE ARE"} />

                <motion.h1 transition={{ delay: 1, type: 'spring', stiffness: 120 }} initial={{ y: -90 }} animate={{ fontSize: 50, y: -10 }} className="text-4xl text-center px-4 mt-16 font-[Poppins] font-semibold  sm:text-5xl md:text-6xl text-primary">We are Zelix Tech</motion.h1>
                <h3 className='py-4 font-[400] text-center ml-1 text-normal text-gray-600'>A Team of passionate Designers and Developers from India</h3>

                {/* <p className='w-[85%] mx-auto text-center text-gray-800 text-lg mt-10 font-medium md:w-[80%]'>Zelix denotes you are the foundation of society. Your good sense of structure makes you an excellent organizer and manager of any enterprise also stable, disciplined, practical, reliable, hard working, and frugal.</p> */}

            </div>


            {/* <div>
                <Heading title={"Vison & Mission"} />


                <div className='text-xl text-gray-700 my-4 mx-3 text-center'>
                    <h3 className='mt-3'>Vision is to Develop best Culture in business society, by helping business grow digitlly.</h3>
                    <h3 className='mt-3'>Mission is to provide best quality Product and Satisfied your Clients</h3>
                </div>

            </div> */}


            {/* meet the team */}

            <div>

            </div>

        </motion.div>
    )

}

export default About