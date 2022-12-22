import React from 'react'
import hero from "../images/hero.png";
const Hero = () => {
  return (
    <div className='bg-grayBg'>
        <div className="container">
            <div className='py-14 w-full flex justify-between items-center'>
                <div className='w-2/4 sm:w-full'>
                    <h4 className='text-5xl font-bold text-primaryBlue leading-relaxed md:text-4xl'>PROVIDING SERVICES AT YOUR DOOR</h4>
                    <p className='text-base mt-4 leading-loose'>MACC Essentials has an important role in making supplies and services available to customers and their patients during this critical time. This includes services from various domains. Our aim is to aid you. As much we can.</p>
                    <button className='mt-4'>LEARN MORE</button>
                </div>
                <div className='w-2/6 sm:hidden'>
                    <img src={hero} className="w-5/5 object-cover"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero