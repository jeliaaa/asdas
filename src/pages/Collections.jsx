import React, { useEffect, useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import bg from "../images/collection.jpg"
import Item from "../components/Item";
import axios from 'axios';
import noImage from "../images/no-image.png";

const Collections = () => {
    const [data, setData] = useState([]);
    const [category, setCategory] = useState(0);
    const [loading, setLoading] = useState(true);
    const getData = () => {
        return axios.get('https://api.escuelajs.co/api/v1/products?limit=20&offset=20')
        .then(res => {setData(res.data); setLoading(false)})
    }
    const handleCategory = (e) => {
        setCategory(e.target.value)
    }
    useEffect(() => {
        if(category == 0) {
            getData()
        } else {
            axios.get('https://api.escuelajs.co/api/v1/categories/' + category + '/products?limit=10&offset=10')
            .then(res => {setData(res.data)})
        }
    }, [category])

  return (
    <div className='pb-[100px]'>
        <div className='w-full h-90 mb-14'>
            <img src={bg} className='w-full h-full'/>
        </div>

        <div className='container'>
            <div className='flex justify-between md:flex-col'>
                <div className='w-1/6 md:w-full xs:hidden'>
                    <ul className='text-sm text-black md:flex'>
                        <li className='cursor-pointer flex items-center justify-between'>
                            COMPANY
                            <FiChevronDown className='w-5 h-5 text-black'/>
                        </li>
                        <li className='cursor-pointer flex items-center justify-between my-6 md:mx-8'>
                            COMPANY
                            <FiChevronDown className='w-5 h-5 text-black' />
                        </li>
                        <li className='cursor-pointer flex items-center justify-between'>
                            COMPANY
                            <FiChevronDown className='w-5 h-5 text-black' />
                        </li>
                    </ul>
                </div>
                <div className='md:ml-0 md:mt-4 ml-14 w-5/6 md:w-full'>
                    <div>
                        <ul className='flex text-black text-sm sm:text-xs'>
                            <li className='bg-primaryBlue text-white p-4 sm:p-2'>Everyday Essentials</li>
                            <li className='bg-grayBg3 p-4 sm:p-2 mx-6'>Cleaning Essentials</li>
                            <li className='bg-grayBg3 p-4 sm:p-2'>Immunity & Health</li>
                        </ul>
                    </div>
                    <div className='mt-10 flex justify-between items-center'>
                        <p className='text-black text-md'>40 Products</p>
                        <select value={category} onChange={handleCategory} className='px-6 py-2 border rounded-md border-gray text-sm'>
                            <option value={0}>Sort</option>
                            <option value={1}>Clothes</option>
                            <option value={2}>Electronics</option>
                            <option value={3}>Furniture</option>
                            <option value={4}>Shoes</option>
                            <option value={5}>Others</option>
                        </select>
                    </div>
                    <div className='grid grid-cols-3 gap-4 mt-8 sm:grid-cols-1 place-items-center relative'>
                        {loading ? <p>Loading...</p> : data.map(item => <Item key={item.id} id={item.id} name={item.title} image={item.images[0] ? item.images[0] : noImage } /> )}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Collections