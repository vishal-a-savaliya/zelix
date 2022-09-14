import React from 'react'

function contact() {
    return (
        <div>


            <div className='mx-10 my-20'>
                <div className="bg-gray-300 rounded-lg overflow-hidden flex items-end justify-start relative">
                    <iframe width="100%" height="100%" title="map" className="absolute inset-0 h-600" frameBorder={0} marginHeight={0} marginWidth={0} scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470029.1604841957!2d72.29680347055518!3d23.019996818380907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1662989291289!5m2!1sen!2sin" style={{ filter: 'grayscale(5%) contrast(1) opacity(0.8)' }} />

                    <div className="bg-white relative flex flex-wrap w-[690px]  shadow-md my-[15%] mx-auto rounded-md">

                        {/* image  */}
                        <div className='relative contact-img bg-cover bg-center w-full rounded-t-md'>

                            <div className='text-center mx-auto my-16 text-white'>
                                <h2 className='font-medium text-3xl '>Contact Us</h2>
                                <p className='text-md py-4  '>Feel free to drop us a line below!</p>
                            </div>

                        </div>


                        {/* contact form  */}
                        <div className='flex justify-between flex-col w-full flex-wrap mx-20 mt-14'>

                            <div className="w-full flex items-baseline mb-6 ">

                                <label htmlFor="name" className="text-md text-gray-500 text-right w-1/5">Full Name:</label>

                                <input type="text" id="name" name="name" placeholder='Enter full name' autocomplete="off" className="w-full ml-4 border-b border-gray-400  focus:border-primary font-normal text-base outline-none text-gray-500 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>

                            <div className="w-full flex items-baseline mb-6 ">

                                <label htmlFor="email" className="font-normal text-md text-gray-500 text-right w-1/5">Email:</label>

                                <input type="text" id="email" name="email" placeholder='Enter email Address' autocomplete="off" className="w-full ml-4 border-b border-gray-400  focus:border-primary font-normal text-base outline-none text-gray-500 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="w-full flex mb-6 items-baseline">
                                <label htmlFor="phone" className="font-normal text-md text-gray-500 text-right w-1/5">Phone:</label>
                                <input type="text" id="phone" name="phone" placeholder='Enter phone number' autocomplete="off" className="w-full ml-4 border-b border-gray-400  focus:border-primary font-normal text-base outline-none text-gray-500 py-2 px-1 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="w-full flex mb-6 items-baseline">
                                <label htmlFor="message" className="font-normal text-md text-gray-500 w-1/5 text-right">Message:</label>
                                <textarea id="message" name="message" placeholder='Your Comments...' autocomplete="off" className="w-full ml-4 border-b border-gray-400  focus:border-primary font-normal text-base outline-none text-gray-500 py-2 px-1 leading-8 transition-colors duration-200 ease-in-out" defaultValue={""} />
                            </div>
                            <div className="w-full flex mb-6 items-baseline">
                                <label className="font-normal text-md text-gray-500 w-1/5 text-right"></label>
                                <button type="submmit" className="text-white bg-primary border-0 py-2 px-6 mb-20  mt-4 w-[150px] rounded-full focus:outline-none hover:bg-green-600  text-lg font-normal ">Submmit</button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default contact