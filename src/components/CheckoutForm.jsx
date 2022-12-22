import React from 'react'

const CheckoutForm = ({onSubmit}) => {
  return (
    <div className='mt-7 checkout-form w-1/2 xl:w-full xl:mb-10'>
        <p className='text-md text-black font-bold'>Delivery Address</p>
        <div className='flex'>
            <input type="text" placeholder='Name' />
            <input type="text" placeholder='Surname' className='ml-4'/>
        </div>
        <input type="text" placeholder='Exactly Address'/>
        <input type="text" placeholder='Exactly Address 2'/>
        <div className='flex'>
            <input type="text" placeholder='Post Code' />
            <input type="text" placeholder='Region' className='ml-4'/>
        </div>
        <input type="text" placeholder='Phone Number'/>
        <button className='w-full mt-6 rounded-none' onClick={onSubmit}>Finish Checkout</button>
    </div>
  )
}

export default CheckoutForm