import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../image/Zelixlogo-no-bg.png'


export const Footer = () => {
    return (
        <footer className="bg-white">
            <div className="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
                <div className="flex flex-col items-center p-6 bg-primary rounded-lg shadow-lg gap-4 sm:flex-row sm:justify-between">
                    <strong className="text-xl text-white sm:text-xl">
                        Grow your Business Now!
                    </strong>
                    <Link className="inline-flex items-center px-8 py-3 text-primary bg-white border border-white rounded-full hover:bg-transparent hover:text-white active:bg-white/90 focus:outline-none focus:ring" to="/contact">
                        <span className="text-sm font-medium"> Let's Get Started </span>
                        <svg className="w-5 h-5 ml-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
                <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="text-center sm:text-left">
                        <p className="text-lg font-medium text-gray-900">About Us</p>
                        <nav className="mt-8">
                            <ul className="text-sm space-y-4">
                                <li>
                                    <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
                                        Company History
                                    </a>
                                </li>
                                <li>
                                    <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
                                        Meet the Team
                                    </a>
                                </li>
                                <li>
                                    <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
                                        Employee Handbook
                                    </a>
                                </li>
                                <li>
                                    <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
                                        Careers
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="text-center sm:text-left">
                        <p className="text-lg font-medium text-gray-900">Our Services</p>
                        <nav className="mt-8">
                            <ul className="text-sm space-y-4">
                                <li>
                                    <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
                                        Web Development
                                    </a>
                                </li>
                                <li>
                                    <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
                                        App Development
                                    </a>
                                </li>
                                <li>
                                    <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
                                        Marketing & Branding
                                    </a>
                                </li>
                                <li>
                                    <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
                                        AI/ML Developement
                                    </a>
                                </li>
                                <li>
                                    <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
                                        Blockchain Development
                                    </a>
                                </li>
                                <li>
                                    <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
                                        UI/UX Development
                                    </a>
                                </li>

                            </ul>
                        </nav>
                    </div>
                    <div className="text-center sm:text-left">
                        <p className="text-lg font-medium text-gray-900">Resources</p>
                        <nav className="mt-8">
                            <ul className="text-sm space-y-4">
                                <li>
                                    <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
                                        Online Guides
                                    </a>
                                </li>
                                <li>
                                    <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
                                        Conference Notes
                                    </a>
                                </li>
                                <li>
                                    <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
                                        Forum
                                    </a>
                                </li>
                                <li>
                                    <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
                                        Downloads
                                    </a>
                                </li>
                                <li>
                                    <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
                                        Upcoming Events
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="text-center sm:text-left">
                        <p className="text-lg font-medium text-gray-900">Helpful Links</p>
                        <nav className="mt-8">
                            <ul className="text-sm space-y-4">
                                <li>
                                    <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
                                        FAQs
                                    </a>
                                </li>
                                <li>
                                    <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
                                        Support
                                    </a>
                                </li>
                                {/* <li>
                                    <a className="flex group justify-center gap-1.5 sm:justify-start" href="/">
                                        <span className="text-gray-700 transition group-hover:text-gray-700/75">
                                            Live Chat
                                        </span>
                                        <span className="relative flex w-2 h-2 -mr-2">
                                            <span className="absolute inline-flex w-full h-full bg-teal-400 rounded-full opacity-75 animate-ping" />
                                            <span className="relative inline-flex w-2 h-2 bg-teal-500 rounded-full" />
                                        </span>
                                    </a>
                                </li> */}
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="mt-16">

                    <div className="mt-16 sm:flex sm:justify-between sm:items-center">
                        <div className="flex justify-center sm:justify-start">
                            <p className='text-sm font-medium text-gray-900 flex flex-row items-center'>Zeli <img src={logo} className="w-8 mx-1 text-primary" alt="zelix logo" />Tech</p>
                        </div>
                        <div>
                            <ul className="flex justify-center my-8 gap-6 sm:justify-end sm:my-0">
                                <li>
                                    <a href="/" rel="noopener noreferrer" target="_blank" className="text-primary transition hover:text-[#23e6a87c]">
                                        <span className="sr-only">Facebook</span>

                                        <svg className="w-5 h-6" xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>

                                    </a>
                                </li>
                                <li>
                                    <a href="/" rel="noopener noreferrer" target="_blank" className="text-primary transition hover:text-[#23e6a87c]">
                                        <span className="sr-only">Instagram</span>
                                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" fill="currentColor"><path d="M14.017 0h-8.07A5.954 5.954 0 0 0 0 5.948v8.07a5.954 5.954 0 0 0 5.948 5.947h8.07a5.954 5.954 0 0 0 5.947-5.948v-8.07A5.954 5.954 0 0 0 14.017 0zm3.94 14.017a3.94 3.94 0 0 1-3.94 3.94h-8.07a3.94 3.94 0 0 1-3.939-3.94v-8.07a3.94 3.94 0 0 1 3.94-3.939h8.07a3.94 3.94 0 0 1 3.939 3.94v8.07z"></path><path d="M9.982 4.819A5.17 5.17 0 0 0 4.82 9.982a5.17 5.17 0 0 0 5.163 5.164 5.17 5.17 0 0 0 5.164-5.164A5.17 5.17 0 0 0 9.982 4.82zm0 8.319a3.155 3.155 0 1 1 0-6.31 3.155 3.155 0 0 1 0 6.31z"></path><circle cx="15.156" cy="4.858" r="1.237"></circle></svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="/" rel="noopener noreferrer" target="_blank" className="text-primary transition hover:text-[#23e6a87c]">
                                        <span className="sr-only">Twitter</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="23" className="w-5 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="/" rel="noopener noreferrer" target="_blank" className="text-primary transition hover:text-[#23e6a87c]">
                                        <span className="sr-only">linked In</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" fill="currentColor"><path d="M15 11.13v3.697h-2.143v-3.45c0-.866-.31-1.457-1.086-1.457-.592 0-.945.398-1.1.784-.056.138-.071.33-.071.522v3.601H8.456s.029-5.842 0-6.447H10.6v.913l-.014.021h.014v-.02c.285-.44.793-1.066 1.932-1.066 1.41 0 2.468.922 2.468 2.902zM6.213 5.271C5.48 5.271 5 5.753 5 6.385c0 .62.466 1.115 1.185 1.115h.014c.748 0 1.213-.496 1.213-1.115-.014-.632-.465-1.114-1.199-1.114zm-1.086 9.556h2.144V8.38H5.127v6.447z"></path><path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"></path></svg>
                                    </a>
                                </li>

                                <li>
                                    <a href="/" rel="noopener noreferrer" target="_blank" className="text-primary transition hover:text-[#23e6a87c]">
                                        <span className="sr-only">Dribbble</span>
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <p className="mt-4 text-sm text-center text-gray-500 sm:mt-0 sm:text-right">
                            All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
