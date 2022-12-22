import React, { useContext } from 'react'
import logo from "../images/logo.png"
import { FiBell, FiSearch, FiShoppingBag, FiUser } from "react-icons/fi";
import { Link } from 'react-router-dom';
import itemsContext from './../contexts/ItemsContext';

const Header = () => {
    const {checkedItems, setCheckedItems} = useContext(itemsContext);

  return (
    <header className='py-12 font-light text-gray'>
        <div className='container'>
            <div className='flex justify-between items-center'>
                <FiSearch className='w-6 h-6 sm:hidden'/>
                <nav >
                    <ul className='flex items-center'>
                        <li className='lg:hidden'>
                            <Link href="#">SHOP</Link>
                        </li>
                        <li className='lg:hidden'>
                            <Link to={"/collections"}>COLLECTIONS </Link>
                        </li>
                        <Link to={"/"}>
                            <img src={logo} className="w-28 ml-16 sm:ml-0"/>
                        </Link>
                        <li className='lg:hidden'>
                            <a href="#">BEST SELLERS</a>
                        </li>
                        <li className='lg:hidden'>
                            <a href="#">ABOUT US</a>
                        </li>
                    </ul>
                </nav>
                <ul className='flex items-center'>
                    <li><FiUser className='w-6  h-6'/></li>
                    <li><FiBell className='w-6  h-6 mx-6'/></li>
                    <Link to={"/checkout"}>
                        <li className='relative'>
                            <FiShoppingBag className='w-6  h-6'/>
                            {checkedItems.length > 0 ? <span className='absolute top-[-10px] right-[-5px] bg-primaryRed p-1 rounded-full text-xs text-white'>{checkedItems.length}</span> : null}
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    </header>
  )
}

export default Header