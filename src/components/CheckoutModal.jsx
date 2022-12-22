import React from 'react'
import image from '../images/modal.png';
const CheckoutModal = ({display, onSubmit}) => {
  return (
    <div className={`modal sm:px-4 ${!display ? 'hidden' : null}`}>
        <div className='w-[502px] h-[600px]  modal__content bg-white fixed shadow-2xl top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <div className='w-full'>
                <img src={image} className='w-full' />
            </div>
            <div className='w-full p-12 flex flex-col items-center text-center'>
                <h4 className='text-gray text-xl font-bold'>Order Placed Successfully</h4>
                <p className='text-black text-sm w-[280px] my-2'>Your Order Has Been Placed Successfull We'll Try To Ship It To Your Door Step As Soon We Can. Cheers</p>
                <button className='bg-primaryBlue mt-4' onClick={onSubmit}>CONTINUE SHOPPING</button>
            </div>
        </div>
    </div>
  )
}

export default CheckoutModal