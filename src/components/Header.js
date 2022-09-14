
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {

    Bars3Icon,
    Squares2X2Icon,
    XMarkIcon,
    HomeIcon,
    CubeIcon,
    EnvelopeIcon,
} from '@heroicons/react/24/outline'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'
import logo from "../image/Zelixlogo-no-bg.png"

const solutions = [
    {
        name: 'Home',
        description: 'Get a better understanding of where your traffic is coming from.',
        href: '#',
        icon: HomeIcon,
    },
    {
        name: 'About',
        description: 'Speak directly to your customers in a more meaningful way.',
        href: '#',
        icon: Squares2X2Icon,
    },
    {
        name: 'Service',
        description: "Connect with third-party tools that you're already using.",
        href: '#',
        icon: CubeIcon,
    },
    {
        name: 'Contact',
        description: 'Build strategic funnels that will drive your customers to convert',
        href: '#',
        icon: EnvelopeIcon,
    },
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export const Header = () => {
    return (
        <Popover className="relative bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="flex items-center justify-between  py-6 px-4 md:justify-between md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <a href="#">
                            <span className="sr-only">Zelix Tech</span>
                            {/* <img
                                className="h-10 w-auto sm:h-14"
                                src={logo}
                                alt="Zelix Tech"
                            /> */}
                            <div className="flex justify-center sm:justify-start">
                                <p className='text-sm font-medium text-gray-900 flex flex-row items-center'>Zeli <img src={logo} className="w-10 text-[#23e6a8]" alt="zelix logo" />Tech</p>
                            </div>
                        </a>
                    </div>
                    <div className="-my-2 -mr-2 md:hidden">
                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#23e6a8]">
                            <span className="sr-only">Open menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    <Popover.Group as="nav" className="hidden space-x-10 md:flex">


                        <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                            Home
                        </a>
                        <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                            About
                        </a>
                        <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                            Service
                        </a>
                        <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                            Connect
                        </a>

                    </Popover.Group>
                    <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">

                        <a
                            href="#"
                            className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-full outline outline-offset-2 outline-1  outline-color: #23e6a8;  px-6 py-2 text-base font-medium text-[#23e6a8] "
                        >
                            Let's take!
                        </a>


                    </div>

                </div>
            </div>

            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
                    <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="px-5 pt-5 pb-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    {/* <img
                                        className="h-8 w-auto"
                                        src={logo}
                                        alt="Zelix Tech"
                                    /> */}
                                    <div className="flex justify-center sm:justify-start">
                                        <p className='text-sm font-medium text-gray-900 flex flex-row items-center'>Zeli <img src={logo} className="w-10 text-[#23e6a8]" alt="zelix logo" />Tech</p>
                                    </div>
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#23e6a8]">
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="mt-6">
                                <nav className="grid gap-y-8">
                                    {solutions.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                                        >
                                            <item.icon className="h-6 w-6 flex-shrink-0 text-[#23e6a8]" aria-hidden="true" />
                                            <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </div>
                        <div className="space-y-6 py-6 px-5">
                            {/* <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    Pricing
                                </a>

                                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    Docs
                                </a>
                                {resources.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div> */}
                            <div>
                                <a
                                    href="#"
                                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-[#1ac086] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#23e6a8] text-transform: uppercase;"
                                >
                                    Let's take!
                                </a>

                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}


