import React from 'react'
import Discount from '../components/Discount';
import Footer from '../components/Footer';
import Guide from '../components/Guide';
import Header from '../components/Header'
import Hero from '../components/Hero'
import Products from './../components/Products';

const Home = () => {
  return (
    <div>
        <Hero />
        <h1 className='mt-20 text-primaryBlue text-3xl font-bold text-center'><span className='text-primaryRed'>NEW</span> PRODUCTS</h1>
        <Products />
        <Discount />
        <Guide />
    </div>
  )
}

export default Home