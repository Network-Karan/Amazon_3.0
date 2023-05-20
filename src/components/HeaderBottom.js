import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const HeaderBottom = () => {
  return (
    <div className='w-full px-4 h-[36px] bg-amazon_light text-white flex items-center'>
    {/*================= ListItems Start here ==============*/}
    <ul className='flex items-center gap-2 text-sm tracking wide'>
        <li className='headerHover flex items-center gap-1'><MenuIcon />All</li>
        <li className='headerHover'>Today's Deals</li>
        <li className='headerHover'>Customer Service</li>
        <li className='headerHover'>Gift Card</li>
        <li className='headerHover'>Registry</li>
        <li className='headerHover'>Sell</li>
    </ul>
    {/*================= ListItems End here ==============*/}
    {/*================= sideNav Start here ==============*/}
    {/*================= sideNav End here ==============*/}
    </div>
  )
}

export default HeaderBottom