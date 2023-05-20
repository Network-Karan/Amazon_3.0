import React from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import {logo} from "../../assets/index"

const Header = () => {
  return (
      <div>
        <div className='w-full bg-amazon_blue text-white px-4 py-3 flex items-center gap-4'>
          {/* ============ Image Start here =========== */}
          <div className='headerHover'>
            <img className= "w-24 mt-2" src={logo} alt="logo" />
          </div>
        {/* ============ Image End here =========== */}
        {/* ============ Deliver Start here =========== */}
        <div className='headerHover'>
        <LocationOnOutlinedIcon/>
          <p className='text-sm text-lightText font-light flex flex-col'>
            Deliver to
             <span className='text-sm font-semibold -mt-1 text-whiteText'>
              India
            </span>
          </p>
        </div>

        {/* ============ Deliver Start here =========== */}
        {/* ============ Search Start here =========== */}
      <div className='h-10 rounded-md flex flex-grow relative'>
        <span>
          All <span></span>
          <ArrowDropDownOutlinedIcon />
        </span>
        <input 
          className='h-full text-base text-amazon_blue flex-grow outline-none border-none px-2'
          type="text" 
        />
        <span>
          <SearchIcon />
        </span>
      </div>
        {/* ============ Search Start here =========== */}
        {/* ============ Signin Start here =========== */}
        
        {/* ============ Signin Start here =========== */}
        {/* ============ Orders Start here =========== */}

        {/* ============ Orders Start here =========== */}
        {/* ============ Cart Start here =========== */}

        {/* ============ Cart Start here =========== */}
        </div>
    </div>
  )
}

export default Header