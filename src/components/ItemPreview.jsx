import React, { useState, useEffect, useContext } from 'react'
import { FiHeart, FiChevronDown } from 'react-icons/fi';
import noImage from "../images/no-image.png"
import Products from './Products';
import { useLocation } from 'react-router-dom';
import itemsContext from '.././contexts/ItemsContext';

const ItemPreview = ({data, loading}) => {
    const {checkedItems, setCheckedItems} = useContext(itemsContext);
    const [checked, setChecked] = useState(false)
    const { pathname } = useLocation();
    const addHandle = () => {
        let a = checkedItems;
        setChecked(!checked)
        if(checkedItems.length > 0) {
            checkedItems.map(item => {
                if(item.id == data.id) {
                    const a = checkedItems.filter(function(i) {
                        return i.id !== data.id
                    })
                    setCheckedItems(a)
                } else {
                    setCheckedItems([...checkedItems, data])
                }
            })
        }
        else {
            setCheckedItems([...checkedItems, data])
        }
    }
    useEffect(() => {
        setChecked(false)
        window.scrollTo(0, 0)
    }, [pathname])
    useEffect(() => {
        console.log(checked)
    }, [checked])
    const [descModal, setDescModal] = useState(false)
    const [previewImage, setPreviewImage] = useState(0)
  return (
    <div className='py-10'>
        <div className="container">
            {loading ? "Loading..." : 
            <div className='w-full flex justify-between md:flex-col items-start'>
                <div className='w-1/2 flex items-center md:w-full'>
                    <div className={`w-1/5 mr-4 ${!data.images[0] ? 'hidden' : null}`} id='single-small-images'>
                        {data.images.map((img, i) => (
                            <img onClick={() => setPreviewImage(i)} src={img} key={i} className='cursor-pointer rounded-md w-28 h-20 lg:w-20 lg:h-12'/>
                        ))}
                    </div>
                    <div className='w-4/5 flex items-center justify-center py-[30px]'>
                        <img src={data.images[0] ? data.images[previewImage] : noImage} className='rounded-lg'/>
                    </div>
                </div>
                <div className='w-1/2 ml-6 py-4 md:w-full md:ml-0'>
                    <div className='flex justify-between items-center text-black'>
                        <h4 className='text-xl font-bold'>{data.title}</h4>
                        <FiHeart className='float-right w-5 h-5'/>
                    </div>
                    <p className='text-xl font-bold text-primaryRed mt-2'>$ {data.price + ".00"}</p>
                    <div className='flex text-gray text-sm my-6'>
                        <p className='px-5 py-2 border border-grayBg2'>{data.category.name.toUpperCase()}</p>
                        <p className='px-5 py-2 border border-grayBg2 mx-4 xs:mx-1'>GOLD</p>
                        <p className='px-5 py-2 border border-grayBg2'>APOLLO</p>
                    </div>
                    {!checked ? (<button className='bg-primaryBlue w-full rounded-none' onClick={addHandle}>ADD TO CART</button>) : (<button className='bg-primaryRed w-full rounded-none' onClick={addHandle}>REMOVE FROM CHECKLIST</button>)}
                    
                    <p className='text-sm text-gray mt-4 leading-6'>{data.description}</p>
                    <div className='border border-grayBg2 text-black py-[6px] mt-4 cursor-pointer' onClick={() => setDescModal(!descModal)}>
                        <div className='flex justify-between items-center'>
                            <p className='w-[100%] text-center'>DESCRIPITON</p>
                            <FiChevronDown className='w-6 h-6 relative right-2'/>
                        </div>
                        <div className={`text-sm p-4 ${!descModal ? 'hidden' : null} `} id='hidden'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis error optio facilis. Perspiciatis, in cumque incidunt totam ducimus id, aliquid iusto veniam delectus repellendus obcaecati. Soluta officia necessitatibus ex ratione!</p>
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
        <div className='container'>
            <h1 className='mt-20 text-2xl font-bold text-black text-center'>YOU MAY ALSO LIKE</h1>
            <Products />
        </div>
    </div>
  )
}

export default ItemPreview