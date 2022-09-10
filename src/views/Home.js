import React from 'react'
import Gif from '../image/zelixtech landing.gif'
import { Service } from '../Data/data'
import { Whyus } from '../Data/data'


function Home() {
    return (
        <div className=''>

            <div className="container flex  flex-col-reverse sm:flex-row justify-around bg-white ">

                {/* intro */}
                <div className='flex flex-col items-center justify-center'>

                    <h1 className="text-4xl text-center px-4 font-[Poppins] font-semibold  sm:text-5xl md:text-6xl">We are Zelix Tech</h1>
                    <h3 className='py-4 font-[400] text-center ml-1 text-base text-gray-500'>A Team of passionate Designers and Developers from India</h3>

                    <div className='mx-14'>
                        <a
                            href="#"
                            className="flex w-[200px] items-center justify-center rounded-md border border-transparent bg-[#1ac086] px-6 py-2 text-lg font-medium text-white shadow-sm hover:bg-[#23e6a8]"
                        >
                            Let's take!
                        </a>

                    </div>

                </div>

                {/* image */}
                <div>
                    <img className='w-50% m-auto sm:w-full' src={Gif} alt="loading..." />
                </div>
            </div>


            {/* body section  */}

            <div className='bg-gradient-to-b from-[#FFF] to-[#F6F8FC]'>

                <div className='flex flex-col items-center justify-center'>
                    {/* title */}
                    <div className='mt-20'>
                        <h1 className='font-semibold text-4xl '>What We Do</h1>
                        <hr className='mx-auto mt-2 border-b-2 border-collapse border-[#23e6a8] w-10'></hr>
                    </div>

                    <div className='grid grid-cols-3 gap-x-20 gap-y-14 mt-20'>
                        {Service.map((item) => (

                            <div key={item.title} className="flex flex-col justify-center items-center">

                                <div className={item.style}>
                                    <item.icon className={`h-6 w-6 flex-shrink-0 text-slate-900`} aria-hidden="true" />
                                </div>
                                <div>
                                    <h3 className='text-center text-lg font-semibold text-slate-900 py-4'>{item.title}</h3>
                                    <p className="text-center w-[250px] font-jetbrains">{item.description}</p>
                                </div>
                            </div>

                        ))}
                    </div>

                </div>


                {/* why work with us */}

                <div className='flex flex-col items-center justify-center mt-20'>
                    {/* title */}
                    <div className='mt-20'>
                        <h1 className='font-semibold text-4xl '>Why choose us</h1>
                        <hr className='mx-auto mt-2 border-b-2 border-collapse border-[#23e6a8] w-10'></hr>
                    </div>

                    <div className='grid grid-cols-3 gap-x-10 gap-y-8 mt-20'>
                        {Whyus.map((item) => (

                            <div key={item.title} className="flex flex-col justify-start items-center rounded-lg p-8 bg-[#fefefe5e] shadow-lg hover:bg-white cursor-pointer">

                                <div className="">

                                </div>
                                <div>
                                    <h3 className='text-center text-lg font-medium text-[#23e6a8] py-4'>{item.title}</h3>
                                    <p className="w-[250px] font-jetbrains text-left">{item.description}</p>
                                </div>
                            </div>

                        ))}
                    </div>

                </div>

                <br></br>
                <br></br>
                <br></br>
            </div>

        </div>
    )
}

export default Home