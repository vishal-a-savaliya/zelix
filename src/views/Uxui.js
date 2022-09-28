import { motion } from 'framer-motion'
import React from 'react'
import Heading from '../components/Heading'
import { designs } from '../Data/data'


const uxui_variants = {

    initial: {
        opacity: 0,
        x: '100vw'
    },

    animate: {
        opacity: 1,
        x: 0,
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

function Uxui() {
    return (
        <motion.div variants={uxui_variants} initial={'initial'} animate={'animate'} exit={'exit'} className='pb-20'>

            <Heading title={"Our Design Journal"} stitle={'our Design'} />

            <div className='flex flex-wrap justify-center mt-16 flex-col md:flex-row'>

                {
                    designs.map((item) => (
                        <div className='w-[90%] m-5 rounded-md design md:w-[25%]'>
                            <img src={item.url} alt='ux ui design' className='rounded-md' />
                        </div>
                    ))
                }

            </div>
        </motion.div>
    )
}

export default Uxui