import React from 'react'
import {

    Bars3Icon,
    Squares2X2Icon,
    XMarkIcon,
    HomeIcon,
    CubeIcon,
    EnvelopeIcon,
    PhoneIcon,
} from '@heroicons/react/24/outline'

function contact() {
    return (
        <div>

            {/* About */}

            <div className='justify-center items-center flex-col mt-8 '>

                <h1 className='text-3xl text-center font-semibold text-gray-700 sm:text-4xl'>GET IN TOUCH</h1>
                <p className='mx-auto mt-2 border-b-2 border-collapse border-[#23e6a8] w-10'></p>

                <ul>
                    <li className='flex'> <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-[#23e6a8]" aria-hidden="true" /> zelixtechbiz@gmail.com</li>
                </ul>

            </div>



            <div className='md:mx-10 md:my-20 '>
                <div className="md:bg-gray-300  overflow-hidden flex items-end justify-start relative md:rounded-lg">

                    <iframe width="100%" height="100%" title="map" className="hidden absolute inset-0 md:block" frameBorder={0} marginHeight={0} marginWidth={0} scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470029.1604841957!2d72.29680347055518!3d23.019996818380907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1662989291289!5m2!1sen!2sin&hl=en" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{ filter: 'grayscale(5%) contrast(1) opacity(0.8)' }} />


                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776843.676506545!2d71.31943700000001!3d22.4168315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1663057436361!5m2!1sen!2sin" width="600" height="450" style="border:0;"></iframe> */}

                    <div className="bg-white relative flex flex-wrap w-[95%]  shadow-lg md:shadow-md  my-[10%] mx-auto rounded-md sm:w-[70%] md:w-[690px] md:my-[15%] ">

                        {/* image  */}
                        <div className='relative contact-img bg-cover md:bg-center w-full rounded-t-md'>

                            <div className='text-center mx-auto my-16 text-white'>
                                <h2 className='font-medium text-3xl '>Contact Us</h2>
                                <p className='mx-auto mt-1 border-b-2 border-collapse border-[#23e6a8] w-10'></p>
                                <p className='text-md py-4  '>Feel free to drop us a line below!</p>
                            </div>

                        </div>


                        {/* contact form  */}
                        <div className='flex justify-between flex-col w-full flex-wrap mx-6 md:mx-20 my-14'>

                            <div className="w-full flex md:items-baseline mb-6 flex-col md:flex-row">

                                <label htmlFor="name" className="text-md text-gray-500 md:text-right md:w-1/5">Full Name:</label>

                                <input type="text" id="name" name="name" placeholder='Enter full name' autocomplete="off" className="w-full md:ml-4 border-b border-gray-400  focus:border-primary font-normal text-base outline-none text-gray-500 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>

                            <div className="w-full flex md:items-baseline mb-6 flex-col md:flex-row">

                                <label htmlFor="email" className="font-normal text-md text-gray-500 md:text-right md:w-1/5">Email:</label>

                                <input type="text" id="email" name="email" placeholder='Enter email Address' autocomplete="off" className="w-full md:ml-4 border-b border-gray-400  focus:border-primary font-normal text-base outline-none text-gray-500 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="w-full flex mb-6 md:items-baseline flex-col md:flex-row">
                                <label htmlFor="phone" className="font-normal text-md text-gray-500 md:text-right md:w-1/5">Phone:</label>
                                <input type="text" id="phone" name="phone" placeholder='Enter phone number' autocomplete="off" className="w-full md:ml-4 border-b border-gray-400  focus:border-primary font-normal text-base outline-none text-gray-500 py-2 px-1 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="w-full flex mb-6 md:items-baseline flex-col md:flex-row">
                                <label htmlFor="message" className="font-normal text-md text-gray-500 md:w-1/5 md:text-right">Message:</label>
                                <textarea id="message" name="message" placeholder='Your Comments...' autocomplete="off" className="w-full md:ml-4 border-b border-gray-400  focus:border-primary font-normal text-base outline-none text-gray-500 py-2 px-1 leading-8 transition-colors duration-200 ease-in-out" defaultValue={""} />
                            </div>
                            <div className="w-full flex mb-6 md:items-baseline flex-col md:flex-row">
                                <label className="font-normal text-md text-gray-500 md:w-1/5 md:text-right"></label>
                                <button type="submmit" className="text-white bg-primary border-0 py-2 px-6  mt-4 w-[150px] rounded-full focus:outline-none hover:bg-green-600  text-lg font-normal ">Submmit</button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default contact