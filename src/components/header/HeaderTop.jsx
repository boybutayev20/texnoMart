import { LocalPhone, LocationOn, Public } from '@mui/icons-material'
import React from 'react'

const Headertop = () => {
  return (
    <div className='px-10 flex justify-between bg-zinc-700 text-white py-2'>
    {/* header top left */}
      <div className="header-top-left flex items-center gap-x-4 ">
        
        <div className="header-top-location items-center flex ">
          <LocationOn/>
          <h3 className=''>Tashkent</h3>
        </div>

        <ul className='flex gap-x-4'>
          <li>
            <a>Наши магазины </a>
          </li>
          <li>
            <a href="">Юридическим лицам</a>
          </li>
          <li>
            <a href="">Cпособы оплаты</a>
          </li>
        </ul>
      
      </div>
    {/* header top right */}
      <div className='header-top-right flex items-center gap-x-4'>
        
        <div className="phone">
          <a href='tel:+998880209959' className='flex items-center'>
            <LocalPhone/>
            <h3>+998880209959</h3>
          </a>
        </div>
        
        <div className='flex items-center'>
          <Public/>
          <h3>Ru</h3>
        </div>
      </div>
    </div>
  )
}

export default Headertop



