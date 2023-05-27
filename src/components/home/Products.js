import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Products = () => {
    const data = useLoaderData()
    const productsData = data.data;
    console.log(productsData)
  return (
    <div className='max-w-screen-2xl mx-auto grid grid-cols-4 gap-10 px-4'>
      {productsData.map((items)=>(
          <div className='bg-white h-auto border-[1px] border-gray-200 py-6 z-30
          hover:border-transparent shadow-none hover:shadow-testShadow duration-200 relative'>
            <div>
            <img 
              className='w-52 h-64 object-contain' 
              src={items.image} 
              alt="ProductImg" 
            />
            </div>
            <div>
              <h2>{items.title}</h2>
              <p>{items.price}</p>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Products