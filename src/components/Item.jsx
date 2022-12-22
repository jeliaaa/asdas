import React from 'react'
import { Link } from 'react-router-dom';
import p1 from "../images/products/1.png";
import p2 from "../images/products/2.png";
import p3 from "../images/products/3.png";
import { LazyLoadImage } from 'react-lazy-load-image-component';


const Item = ({id, name, image}) => {
  return (
    <Link to={'/single/' + id}>
      <div className='w-full'>
        <div className='mt-4 w-full h-full flex justify-center items-center column flex-col'>
            <div className=' px-10 '>
              <LazyLoadImage loading="lazy" src={image} className='w-[320px] h-[200px]'/>
            </div>
        </div>
        <p className='text-black font-semibold text-lg mt-6 bg-white text-center'>{name}</p>
      </div>
    </Link>
  )
}

export default Item