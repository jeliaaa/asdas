import React, { useState, useEffect } from 'react'
import Item from './Item';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import axios from 'axios';
import noImage from "../images/no-image.png";

const Products = () => {
  const [data, setData] = useState([]);
  const [items, setItems] = useState([]);
  const [slider, setSlider] = useState([0, 2])
  useEffect(() => {
    axios.get('https://api.escuelajs.co/api/v1/products?limit=9&offset=3')
    .then(res => setData(res.data))
  }, []);

  const slideItems = () => setItems(data.slice(slider[0], slider[1] + 1).map(
    (item) => <Item key={item.id} id={item.id} name={item.title} image={item.images[0] ? item.images[0] : noImage} />
  ));

  useEffect(() => {
    slideItems()
  }, [data])
  
  useEffect(() => {
    slideItems();
  }, [slider])

  const leftSlider = () => {
    if(slider[0] != 0)
      setSlider([slider[0] - 3, slider[1] - 3])
  }
  const rightSlider = () => {
    if(slider[1] < 8)
      setSlider([slider[0] + 3, slider[1] + 3])
  }

  return (
    <div className='mb-20'>
        <div className="container">
            <div>
                <div className='grid grid-cols-3 gap-4 mt-8 sm:grid-cols-1 place-items-center relative'>
                  <FiChevronLeft onClick={leftSlider} className='sm:hidden absolute w-10 h-10 left-[-20px] top-[50%] translate-y-[-50%] bg-white rounded-full p-2 shadow-md cursor-pointer'/>
                    {items}
                  <FiChevronRight onClick={rightSlider} className='sm:hidden absolute w-10 h-10  right-[-20px] top-[50%] translate-y-[-50%] bg-white rounded-full p-2 shadow-md cursor-pointer'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products