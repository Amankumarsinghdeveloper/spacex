"use client";

import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

import Image from 'next/image'
import Link from 'next/link'
import { AiFillMail, AiFillPhone } from 'react-icons/ai';


const navigation = [
    { name: 'Home', href: '#', current: true },
    { name: 'Falcon 1', href: '/about', current: false },
    { name: 'Falcon 9', href: '#services', current: false },
    { name: 'Contact Us', href: '/contact', current: false },
    { name: 'FAQs', href: '/faqs', current: false },
]

function classNames(...classes: Array<string>) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const [navItems, setNavItems] = useState(navigation);

    const handleLinkClick = (name: string) => {
        const updatedNavItems = navItems.map((item) => {
            if (item.name === name) {
                return { ...item, current: true };
            } else {
                return { ...item, current: false };
            }
        });
        setNavItems(updatedNavItems);
    };

    return (
        <>
            <div className='bg-[#474747] w-full py-5 pb-16 px-32 z-20 hidden lg:block'>
                <div className='flex flex-row justify-between'>
                    <div className='flex text-primary-50 font-bold text-2xl'>
                        <Image src='/SpaceX_Logo_Black.png'
                            alt='Space X Logo'
                            width={200}
                            height={50}
                            unoptimized={true}
                            />
                    </div>
                    <div className='grid grid-cols-2 text-gray-300 gap-x-10'>
                        <div className='flex flex-row gap-2 hover:cursor-pointer'>
                            <AiFillMail className='bg-[#1f1f1f] text-red-300 hover:text-red-400 text-5xl p-2 border border-solid rounded-full border-gray-500' />
                            <a href='mailto:contact@spacex.com'>
                                <h3 className='text-gray-400 font-semibold'>Email :</h3>
                                <p>contact@spacex.com</p>
                            </a>
                        </div>
                        <div className='flex flex-row gap-2 hover:cursor-pointer'>
                            <AiFillPhone className='bg-[#1f1f1f] text-red-300 hover:text-red-400 text-5xl p-2 border border-solid rounded-full border-gray-500' />
                            <a href='tel:+917903495069'>
                                <h3 className='text-gray-400 font-semibold'>Call Us :</h3>
                                <p>98XXX XXXXX</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Disclosure as="nav" className="sticky top-0 lg:top-10 w-full z-50">
                {({ open }) => (
                    <>
                        <div className={`w-full md:py-0`}>
                            <div className="sticky items-center justify-between lg:mx-32 bg-gray-50 lg:-translate-y-1/2 z-50 lg:rounded-md">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md px-2 ml-5 text-black hover:text-primary-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                    <div className="flex flex-shrink-0 items-center py-5">
                                        <h3 className='text-primary-50 uppercase text-center font-semibold lg:hidden'>SPACEX</h3>
                                    </div>
                                    <div className="hidden sm:ml-12 sm:block w-full">
                                        <div className="flex justify-evenly text-center uppercase">
                                            {navItems.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current
                                                            ? "text-red-500 py-6 px-2 tracking-widest duration-300"
                                                            : "text-black hover:text-red-500 py-6 px-2 tracking-widest duration-300",
                                                        "px-3 py-6 text-base font-medium rounded-tr-lg rounded-tl-lg"
                                                    )}
                                                    aria-current={item.current ? "page" : undefined}
                                                    onClick={() => handleLinkClick(item.name)}
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="space-y-1 px-2 pb-3 pt-2 bg-white w-[70%] rounded-bl-md rounded-br-md absolute">
                                {navigation.map((item) => (
                                    <Link href={item.href} key={item.name}>
                                        <Disclosure.Button
                                            key={item.name}
                                            as="a"
                                            className={classNames(
                                                item.current ? 'text-primary-50' : 'text-black hover:text-primary-50',
                                                'block rounded-md px-3 py-2 text-base font-medium'
                                            )}
                                            aria-current={item.current ? "page" : undefined}
                                            onClick={() => handleLinkClick(item.name)}
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    </Link>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </>
    )
}
