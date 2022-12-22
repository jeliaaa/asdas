import React, {useState, useEffect} from 'react'
import discount from "../images/discount.png";
import Item from './Item';
import axios from 'axios'
import noImage from "../images/no-image.png"
import { Link } from 'react-router-dom';
const Discount = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/products?limit=2&offset=2')
        .then(res => setData(res.data))
    }, [])
  return (
    <div className='mt-8'>
        <div className='flex justify-between md:flex-col items-center'>
            <div className='w-2/5 md:w-full'>
                <img className='w-full' src={discount} />
            </div>
            <div className='w-3/5 pl-14 pr-20 md:px-8 md:w-full'>
                <div className='flex items-center justify-between md:pt-8'>
                    <h1 className='font-bold text-xl md:text-sm'><span className='text-primaryRed'>MACC</span> WEEKLY DISCOUNT</h1>
                    <Link to={"/collections"}>
                        <button className='bg-grayBg2 text-gray text-xs rounded-none'>VIEW ALL</button>
                    </Link>
                </div>
                <div className='grid grid-cols-2 gap-4 mt-4 sm:grid-cols-1 place-items-center'>
                    {data.map(item => (
                        <Item key={item.id} id={item.id} name={item.title} image={item.images[0] ? item.images[0] : noImage} />
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Discount