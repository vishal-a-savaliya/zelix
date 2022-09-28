import React from 'react'
import Heading from '../components/Heading'
import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import {
    EnvelopeIcon,
    PhoneIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'


const svg_variants = {
    initial: {
        x: 0,
    },

    animate: {
        x: 15,

        transition: {
            duration: 1,
            yoyo: Infinity,

        }
    }

}

const contact_variants = {

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



function Contact() {


    const form = useRef();

    const [submmit, setSubmmit] = useState(false);


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7lwrcve', 'template_jn11elp', form.current, 'NJAMm2VeG3baNR6-j')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        setSubmmit(!submmit)
    };


    return (
        <motion.div variants={contact_variants} initial='initial' animate='animate' exit='exit'>

            {/* contact info */}

            <div className='mb-10 items-center flex-col md:my-20'>

                <Heading title={"GET IN TOUCH"} />

                <ul className='flex justify-center flex-col items-center mt-10'>

                    <p className='text-xl sm:text-2xl font-md m-2'>
                        Ahmedabad, Gujarat, India
                    </p>

                    <div className='flex-col flex justify-center items-center mt-2 sm:flex-row'>

                        <a href='callto:9510342875' className='p-2'>
                            <li className='flex'> <PhoneIcon className="h-6 w-6 flex-shrink-0 text-primary" aria-hidden="true" /> +91 9510342875</li>
                        </a>
                        <a href='mailto:contact.zelixtech@gmail.com' className='p-2'>
                            <li className='flex'> <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-primary" aria-hidden="true" /> <span className='pl-1'>contact.zelixtech@gmail.com</span></li>
                        </a>
                    </div>


                </ul>

            </div>

            {/* end of contact info */}



            {/* map & contact form */}

            <div className='md:mx-10 md:my-20 '>

                <div className="md:bg-gray-300  overflow-hidden flex items-end justify-start relative md:rounded-md">


                    {/* map  */}

                    <iframe width="100%" height="100%" title="map" className="hidden absolute inset-0 md:block" frameBorder={0} marginHeight={0} marginWidth={0} scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470029.1604841957!2d72.29680347055518!3d23.019996818380907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1662989291289!5m2!1sen!2sin&hl=en" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{ filter: 'grayscale(5%) contrast(1) opacity(0.8)' }} />


                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776843.676506545!2d71.31943700000001!3d22.4168315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1663057436361!5m2!1sen!2sin" width="600" height="450" style="border:0;"></iframe> */}



                    {/* contact form div */}

                    {submmit ? (

                        <div className="bg-primary relative flex flex-wrap justify-center p-5 w-[95%] h-[600px] shadow-lg md:shadow-md  my-[10%] mx-auto rounded-lg sm:h-[700px] sm:w-[70%] md:w-[690px] md:my-[15%] ">

                            <XMarkIcon className="absolute h-6 w-6 flex-shrink-0 text-white right-2 m-3 hover:cursor-pointer" onClick={() => { setSubmmit(!submmit) }} aria-hidden="true" />

                            <div className='flex flex-col justify-center w-[400px]'>
                                <h1 className='text-7xl text-white text-left font-extralight '>Thank</h1>
                                <h1 className='text-8xl text-white text-left font-bold'>You .</h1>
                                <h1 className='text-gray-800 text-3xl px-1 py-5 pl-2 font-semibold opacity-75'>for being so nice.</h1>
                                <h1 className='text-white text-2xl px-1 py-10 pl-2 font-semibold'>We'll be in touch shortly!</h1>
                            </div>

                        </div>)


                        : (

                            <div className="bg-white relative flex flex-wrap w-[95%]  shadow-lg md:shadow-md  my-[10%] mx-auto rounded-lg sm:w-[70%] md:w-[690px] md:my-[15%] ">

                                {/* image & info  */}
                                <div className='relative contact-img bg-cover md:bg-center w-full rounded-t-md'>

                                    <div className='text-center mx-auto my-16 text-white'>
                                        <h2 className='font-medium text-3xl '>Contact Us</h2>
                                        <p className='mx-auto mt-1 border-b-2 border-collapse border-[#23e6a8] w-10'></p>
                                        <p className='text-md py-4  '>Feel free to drop us a line below!</p>
                                    </div>

                                </div>

                                {/* contact form  */}
                                <div className='flex justify-between flex-col w-full flex-wrap mx-6 md:mx-20 my-14'>

                                    {/* form section */}
                                    <form ref={form} onSubmit={sendEmail}>


                                        <div className="w-full flex md:items-baseline mb-6 flex-col md:flex-row">

                                            <label htmlFor="name" className="label">Full Name:</label>
                                            <input type="text" id="name" name="name" placeholder='Enter full name' autocomplete="off" className="input" required />

                                        </div>

                                        <div className="w-full flex md:items-baseline mb-6 flex-col md:flex-row">

                                            <label htmlFor="email" className="label">Email:</label>
                                            <input type="email" id="email" name="email" placeholder='Enter email Address' autocomplete="off" className="input" required />

                                        </div>

                                        <div className="w-full flex mb-6 md:items-baseline flex-col md:flex-row">

                                            <label htmlFor="phone" className="label">Phone:</label>
                                            <input type="text" id="phone" name="phone" placeholder='Enter phone number' autocomplete="off" className="input" required />

                                        </div>

                                        <div className="w-full flex mb-6 md:items-baseline flex-col md:flex-row">

                                            <label htmlFor="message" className="label">Message:</label>
                                            <textarea id="message" name="message" placeholder='Your Comments...' autocomplete="off" className="input" defaultValue={""} required />

                                        </div>

                                        <div className="w-full flex mb-6 md:items-baseline flex-col md:flex-row">

                                            <label className="lable"></label>

                                            {/* send button */}

                                            <button type="submmit" className="text-white bg-green-400 flex items-center shadow-green-400/50 shadow-lg justify-around border-0 py-2 px-6  mt-4 w-[150px] rounded-full focus:outline-none hover:bg-green-500  text-lg font-normal " >

                                                Send

                                                {/* Arrow icon svg */}
                                                <motion.svg variants={svg_variants} initial='initial' animate='animate'

                                                    className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </motion.svg>

                                            </button>

                                        </div>

                                    </form>


                                </div> {/* end of contact from */}


                            </div>
                        )}



                </div>

            </div>  {/* end of map & contact frorm */}


            {/* main div */}
        </motion.div>
    )
}

export default Contact