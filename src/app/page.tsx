'use client';

import React, { useEffect, useRef, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import img1 from '@/app/assets/images/web-developer.webp';
import img2 from '@/app/assets/images/OSC.png';
import img3 from '@/app/assets/images/freelancer-pic.jpg';
import ak_pic from '@/app/assets/images/AK.jpg'
import Image from 'next/image';


type Slide = {
  src: string;
  text: string;
};

const Home = () => {
  const images: Slide[] = [
    { src: img1.src, text: 'I am a Full Stack Developer' },
    { src: img2.src, text: 'An Open Source Contributor' },
    { src: img3.src, text: 'And a Freelancer' },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoSlide = React.useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
  }, [images.length]);


  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    startAutoSlide(); // reset interval timer
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    startAutoSlide(); // reset interval timer
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startAutoSlide]);


  return (
    <div className="bg-black text-white">

      {/* Hero Section */}
      <section
        className="relative w-full h-[93vh] bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${images[currentIndex].src})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full z-20 cursor-pointer"
        >
          <FaArrowLeft />
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full z-20 cursor-pointer"
        >
          <FaArrowRight />
        </button>

        <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            {images[currentIndex].text}
          </h2>
        </div>
      </section>

      {/* Intro Section */}
      <section className=" border-2 md:h-[50%] p-5 sm:p-12 flex justify-center items-center">
        <div className='w-full h-full max-w-7xl'>
          <h2 className="text-center text-xl sm:text-3xl font-bold mb-4 text-purple-400">Hi, I&apos;m Abdul Kadir</h2>
          <div className=' flex flex-col sm:flex-row sm:justify-between  '>
            <div className="order-2 sm:order-1 sm:text-lg max-w-3xl text-start text-white h-96
            overflow-auto">
              <p>
                I&apos;m a Full Stack Developer with a passion for solving real-world problems and building websites from scratch.
              </p>
              <p className='pt-2'>
                I specialize in frontend development using React and Tailwind CSS to create beautiful, responsive interfaces.
              </p>
              <p className='pt-2'>
                On the backend, I use Node.js and Express.js to build robust APIs, and MongoDB for managing database operations.
              </p>
            </div>

            <div className="order-1 sm:order-2 max-w-xl md:w-80  h-full object-contain">
              <Image
                src={ak_pic}
                alt="webpic"
                className="w-full h-full  rounded-xl"
              />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
