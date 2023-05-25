import React from 'react'

const FooterMiddleList = ({title,listItem}) => {
    console.log(listItem)
  return (
    <div>
        <h3 className='font-titleFont text-white text-base fontsemibold mb-3'>
          {title}
        </h3>
        <ul className='flex flex-col gap-2 font-bodyFont'>
          {listItem.map((item) =>
            item.listData.map((data) => <li className='footerLink'>{data}</li>)
          )}
        </ul>
    </div>
  )
}

export default FooterMiddleList