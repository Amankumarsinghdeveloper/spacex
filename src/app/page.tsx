"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function Home() {
  const [rockets, setRockets] = useState([]);

  useEffect(() => {
    fetch('https://api.spacexdata.com/v3/capsules')
      .then((response) => response.json())
      .then((data) => setRockets(data));
  }, []);

  return (
    <>
    
<form>
    <div className="flex container mx-auto w-2/4 mb-5">
        <label for="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
        <button id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">All categories <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button>
        <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
            <li>
                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups</button>
            </li>
            <li>
                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Templates</button>
            </li>
            <li>
                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design</button>
            </li>
            <li>
                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos</button>
            </li>
            </ul>
        </div>
        <div className="relative w-full">
            <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Type here" required />
            <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Search</span>
            </button>
        </div>
    </div>
</form>

      <div className='grid grid-cols-2 mb-5'>
        <div className='flex flex-col justify-center pl-10'>
          <h6 className='text-xl'>RECENT LAUNCH</h6>
          <h2 className='text-2xl font-semibold mb-20'>HUGHES JUPITER 3 MISSION</h2>

          <button className='rounded-full bg-red-500 w-max px-10 py-3 text-xl font-semibold'>REWATCH</button>
        </div>
        <div className='flex justify-center align-middle'>
          <Image
            src='/pexels-pixabay-355906.jpg'
            alt='Space X Logo'
            height={500}
            width={500}
            className='rounded-lg overflow-hidden h-96 w-50'
          />
        </div>
      </div>
      <hr />
      <div className="">

        <h1 className='text-center text-4xl font-semibold mt-10'>Section</h1>
        <p className='text-center text-xl'>Details of Capsules</p>

        <div className='grid grid-cols-3 container mx-auto'>
          {rockets.slice(-6).map((capsule) => (
            <div key={capsule.capsule_id} className='p-5'>
              <div className='flex justify-center align-middle p-2'>
                <Image
                  src={"/Cartoon_space_rocket.png"}
                  alt='Space X Logo'
                  height={200}
                  width={200}
                  unoptimized={true}
                  className='rounded-full overflow-hidden h-20 w-20 bg-white'
                />
              </div>
              <h2 className='text-center text-xl font-semibold'>{capsule.capsule_id}</h2>
              <p>Status: <span>{capsule.status}</span></p>
              <p>Launch Date: <span>{capsule.original_launch}</span></p>
              <p>Type: <span>{capsule.type}</span></p>
              <p>Details:  <span>{capsule.details}</span></p>
            </div>
          ))}
        </div>
      </div>

      <hr />

      <div className="mt-28">

        <h1 className='text-center text-4xl font-semibold mt-10'>Section</h1>
        <p className='text-center text-xl'>Details of Capsules</p>


        <div className="container mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {rockets.slice(-6).map((capsule) => (
              <SwiperSlide>
                <div key={capsule.capsule_id} className='p-5'>
                  <div className='flex justify-center align-middle p-2'>
                    <Image
                      src={"/Cartoon_space_rocket.png"}
                      alt='Space X Logo'
                      height={200}
                      width={200}
                      unoptimized={true}
                      className='rounded-full overflow-hidden h-20 w-20 bg-white'
                    />
                  </div>
                  <h2 className='text-center text-xl font-semibold'>{capsule.capsule_id}</h2>
                  <p>Status: <span>{capsule.status}</span></p>
                  <p>Launch Date: <span>{capsule.original_launch}</span></p>
                  <p>Type: <span>{capsule.type}</span></p>
                  <p>Details:  <span>{capsule.details}</span></p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <hr />


        <div className="mb-10">

          <h1 className='text-center text-4xl font-semibold mt-10'>Section</h1>
          <p className='text-center text-xl'>Details of Capsules</p>

          <p className='container mx-auto mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quia placeat quibusdam quae repellendus suscipit totam accusamus. Magni voluptates, eligendi numquam ex aut eveniet maiores, labore libero modi nihil dicta.</p>


          <div className='my-5 flex justify-center align-middle'>
            <button className='rounded-full bg-red-500 w-max px-10 py-3 text-xl font-semibold'>REWATCH</button>
          </div>
        </div>


      </div >
    </>
  )
}
