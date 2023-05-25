import React from 'react'
import FooterMiddleList from './FooterMiddleList'
import { middleList } from '../../constants'
import {logo} from "../../assets/index"

const FooterMiddle = () => {
  return (
    <div className='w-full bg-amazon_light text-white'>
      {/* ============ Top Start here ============ */}
      <div className='w-full border-b-[1px] border-gray-500 py-10'>
        <div className='max-w-5xl mx-auto text-gray-300'>
          <div className='w-full grid grid-cols-4 place-items-center items-start'>
            {middleList.map((item)=>(
              <FooterMiddleList 
                key={item._id}  
                title={item.title}
                listItem={item.listItem}
                />
              ))}
          </div>
        </div>
      </div>
      {/* ============ Top End here ============ */}
      {/* ============ Botton Start here ============ */}
      <div className='w-full flex gap-6 items-center justify-center py-6'>
        <div>
          <img src={logo} alt='logo' />
        </div>
      </div>
      {/* ============ Bottom End here ============ */}
    </div>
  )
}

export default FooterMiddle