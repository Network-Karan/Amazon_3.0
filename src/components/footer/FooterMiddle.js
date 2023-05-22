import React from 'react'
import FooterMiddleList from './FooterMiddleList'

const FooterMiddle = () => {
  return (
    <div className='w-full bg-amazon_light text-white'>
      {/* ============ Top Start here ============ */}
      <div className='w-full border-b-[1px] border-gray-500 py-10'>
        <div className='max-w-5xl mx-auto text-gray-300'>
          <div className='w-full grid grid-cols-4 place-items-center items-start'>
            <FooterMiddleList />
            <FooterMiddleList />
            <FooterMiddleList />
            <FooterMiddleList />
          </div>
        </div>
      </div>
      {/* ============ Top End here ============ */}
      {/* ============ Botton Start here ============ */}
      {/* ============ Bottom End here ============ */}
    </div>
  )
}

export default FooterMiddle