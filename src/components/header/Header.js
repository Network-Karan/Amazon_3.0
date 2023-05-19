import React from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import {logo} from "../../assets/index"

const Header = () => {
  return (
      <div>
        <div className='w-full bg-amazon_blue text-white px-4 py-3 flex items-center gap-4'>
          {/* ============ Image Start here =========== */}
          <div className='px-2 h-[80%] flex items-center border border-transparent
           hover:border-white cursor cursor-pointer duration-100'>
            <img className= "w-24 mt-2" src={logo} alt="logo" />
          </div>
        {/* ============ Image End here =========== */}
        {/* ============ Deliver Start here =========== */}
        <div className='px-2 h-[80%] flex items-center border border-transparent
         hover:border-white cursor cursor-pointer duration-100'>
        <LocationOnOutlinedIcon/>
          <p className='text-sm text-lightText font-light flex flex-col'>
            Deliver to <span className=''>India</span>
          </p>
        </div>

        {/* ============ Deliver Start here =========== */}
        {/* ============ Search Start here =========== */}

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