import React from 'react'
import Gif from '../image/zelixtexh.gif'
import { Service, Technologies } from '../Data/data'
import { Whyus } from '../Data/data'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Tech } from '../Data/data'
import Heading from '../components/Heading'

const home_variants = {

    initial: {
        x: '100vw'
    },

    animate: {
        x: 0,
        transition: {
            ease: 'easeInOut',
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

// const tech_svg = {
//     initial: {

//     },

//     animate: {
//         scale: 1.2,
//         transition: {
//             ease: 'easeInOut'
//         }
//     }
// }




function Home() {
    return (
        <motion.div variants={home_variants} initial='initial' animate='animate' exit='exit' >

            <div className="flex  flex-col-reverse sm:flex-row justify-around bg-white ">

                {/* intro */}
                <div className='flex flex-col items-center justify-center'>

                    <motion.h1 transition={{ delay: 0, type: 'spring', stiffness: 120 }} initial={{ y: -90 }} animate={{ fontSize: 50, y: -10 }} className="text-4xl text-center px-4 font-[Poppins] font-semibold  sm:text-5xl md:text-6xl text-primary">We are Zelix Tech</motion.h1>
                    <h3 className='py-4 px-4 font-[500] text-center ml-1 text-base text-gray-700'>A Team of passionate Designers and Developers from India</h3>

                    <div>
                        <h1 className='text-xl font-semibold p-2 pb-5 md:text-2xl text-slate-700'>Let's start something big with us.</h1>
                    </div>

                    <motion.div className='mx-14' transition={{ delay: 1.2, duration: 2 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <Link
                            to='/contact'
                            className="flex w-[200px] items-center justify-center rounded-md border border-transparent bg-primary px-6 py-2 text-lg font-medium text-white shadow-sm hover:bg-ph"
                        >
                            Let's take!
                        </Link>

                    </motion.div>

                </div>

                {/* image */}
                <div>
                    <img className='w-50% m-auto sm:w-full' src={Gif} alt="loading..." />
                </div>
            </div>


            {/* body section  */}

            <div className='bg-gradient-to-b from-[#FFF] to-[#F6F8FC]' id='services'>

                <div className='flex flex-col items-center justify-center mt-10'>

                    {/* title */}
                    <Heading title={"What We Do"} />

                    <div className='grid grid-cols-1 gap-y-14 mt-20 sm:grid-cols-2 sm:gap-y-14 sm:gap-x-8 md:gap-x-20 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-12 xl:gap-x-20 xl:gap-y-14'>

                        {Service.map((item) => (

                            <motion.div whileHover={{ scale: 1.2 }} key={item.title} className="flex flex-col justify-center items-center hover:cursor-pointer">

                                <div className={item.style}>
                                    <item.icon className={`h-6 w-6 flex-shrink-0 text-slate-900`} aria-hidden="true" />
                                </div>
                                <div>
                                    <h3 className='text-center text-lg font-semibold text-slate-900 py-4'>{item.title}</h3>
                                    <p className="text-center w-[250px] font-light text-sm">{item.description}</p>
                                </div>
                            </motion.div>

                        ))}
                    </div>

                </div>


                {/* why work with us */}

                <div className='flex flex-col items-center justify-center mt-20'>
                    {/* title */}
                    <Heading title={"Why choose Zelix Tech"} stitle={"why choose zelixtech"} />

                    <div className='flex flex-col-reverse justify-center items-center mt-10 md:mt-20 md:flex-row'>


                        <div className='flex flex-col  sm:flex-row'>

                            {Whyus.map((element) => (
                                <div className='m-0 md:first:pt-10 sm:m-4'>
                                    {element.map((item) => (
                                        <motion.div whileHover={{ scale: 1.04 }} transition={{ ease: 'easeInOut' }} animate={{}} key={item.title} className="flex flex-col justify-start bg-white items-center shadow-xl shadow-gray-200 rounded-md p-8 cursor-pointer my-6 hover:text-white hover:bg-green-400 
                                        
                                        first:my-3

                                        
                                        ">
                                            <div>
                                                <h3 className='text-left text-lg font-semibold text-gray-800 py-4'>{item.title}</h3>
                                                <p className="w-[200px] text-sm text-justify">{item.description}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            ))}

                        </div>

                        <div className='md:w-[40%] px-10 mb-5 md:mb-0'>

                            <div className='md:w-[90%]'>

                                <h1 className='text-2xl text-gray-800 py-3 font-semibold'>Quality on time</h1>

                                <p className='py-4 text-sm'>We have highly skilled people, The team who can develop, learn & build high Quality products and Guarantee the high performance and quality of product to be delivered on time.</p>
                                <p className='py-4 text-sm'>
                                    Our team is always here to help our business partners & excited to Build solution that can help your partners to grow their business.
                                </p>

                            </div>

                        </div>

                    </div>




                </div>


                {/* Technologies We Serve */}

                <div className='flex flex-col items-center justify-center mt-6 pb-24 md:mt-20'>

                    {/* title */}
                    <Heading title={"Technologies We Work With"} stitle={`Tech We Work With`} />

                    {/* for medium and large size */}
                    <div className='hidden justify-center mt-16 flex-col md:flex-row md:flex'>

                        {Tech.map((item) => (

                            <div className="flex justify-center md:flex-col">
                                {item.map((icon) => (
                                    <motion.div whileHover={{ scale: 1.2 }}
                                        className='h-16 w-16 bg-green-400/95 shadow-sm shadow-green-400 rounded-lg   mx-6 my-4 z-10 p-3 md:m-5 md:h-20 md:w-20'>
                                        <img src={icon.url} alt="tech" className='w-full invert p-1 md:p-2' />
                                        {/* <h1>{icon.name}</h1> */}
                                    </motion.div>
                                ))}
                            </div>

                        ))}

                    </div>

                    <div className='justify-center mt-16 flex-col md:flex-row md:hidden'>

                        {Technologies.map((item) => (

                            <div className="flex justify-center md:flex-col">
                                {item.map((icon) => (
                                    <motion.div whileHover={{ scale: 1.1 }}
                                        className='h-16 w-16 bg-primary shadow-xl rounded-lg  shadow-green-400/90 mx-6 my-4 z-10 p-3 md:m-5 md:h-20 md:w-20'>
                                        <img src={icon.url} alt="tech" className='w-full invert p-1 md:p-2' />
                                        {/* <h1>{icon.name}</h1> */}
                                    </motion.div>
                                ))}
                            </div>

                        ))}

                    </div>

                    {/* for small size */}
                    {/* <div className="sm:hidden flex flex-wrap justify-center mx-auto">
                        {Technologies.flat().map((tech) => (
                            <div className="h-16 w-36 bg-white my-2 rounded-2xl shadow-md flex justify-center items-center mx-2 p-2">
                                <i className={tech.classes}></i>
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div> */}

                </div>
            </div>

        </motion.div>
    )
}

export default Home