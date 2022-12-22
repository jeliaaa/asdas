import React from 'react'
import { FiMail } from 'react-icons/fi';
import logo from '../images/logo.png';
const Footer = () => {
  return (
    <div className='py-12'>
        <div className="container">
            <div className='grid md:grid-cols-1 md:place-items-center grid-cols-4 '>
                <div className='w-28 md:mb-6'>
                    <img src={logo} className='w-full' />
                </div>
                <div>
                    <ul className='text-center text-sm'>
                        <li className='text-black cursor-pointer'>Home</li>
                        <li className='text-black cursor-pointer my-3'>Collection</li>
                        <li className='text-black cursor-pointer'>Products</li>
                    </ul>
                </div>
                <div className='md:mt-6 text-sm'>
                    <ul className='text-center'>
                        <li className='text-black cursor-pointer'>About</li>
                        <li className='text-black cursor-pointer my-3'>FAQ</li>
                        <li className='text-black cursor-pointer'>Contact</li>
                    </ul>
                </div>
                <div className='md:mt-6'>
                    <p className='text-sm leading-5 text-black'> Be the first to know about our biggest and best sales. We'll never send more than one email a month.</p>
                    <div className='relative mt-6'>
                        <input type="text" className='border-0 border-b-2 border-black w-full pr-8 pb-1 text-sm' placeholder='Enter Your Email'/>
                        <FiMail className='text-black w-5 h-5 absolute right-0 top-0'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer