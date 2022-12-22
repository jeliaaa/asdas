import React, { useContext, useState } from 'react'
import checkoutImg from "../images/checkout.jpg";
import CheckoutForm from "../components/CheckoutForm";
import itemsContext from './../contexts/ItemsContext';
import { Link } from 'react-router-dom';
import CheckoutModal from '../components/CheckoutModal';
const Checkout = () => {
    const {checkedItems, setCheckedItems} = useContext(itemsContext);
    const [modal, setModal] = useState(false);
    const onSubmit = () => {
        console.log("SAdas")
        setModal(!modal)
    }
    return (
    <>
        <CheckoutModal display={modal} onSubmit={onSubmit}/>
        <div className='container py-10'>
            <h4 className='font-bold text-3xl text-black mb-10'>CHECKOUT</h4>
            <div>
                {checkedItems.length > 0 ? (
                    <ul>
                        {checkedItems.map(i => (<Link to={"/single/" + i.id}><li className='text-primaryBlue underline'>{i.title}</li></Link>))}
                    </ul>
                ) : null}
            </div>
            {checkedItems.length !== 0 ? (
            <div className='w-full flex justify-between xl:flex-col'>
                <CheckoutForm onSubmit={onSubmit}/>
                <div className='w/1-2 xl:w-full'>
                    <div className='w-[520px] xl:w-full'>
                        <img src={checkoutImg} className='xl:w-full'/>
                    </div>
                </div>
            </div>
            ) : <p>There is no items</p>}
        </div>
    </>
  )
}

export default Checkout