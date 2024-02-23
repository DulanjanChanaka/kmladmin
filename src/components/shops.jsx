import React from 'react'
import ShopsDataTable from './subComponents/shopsTable'
import AddIcon from '@mui/icons-material/Add';

const Shops = () => {
  return (
    <div className='grid  grid-rows px-5'>
    <div className=' py-6  pl-6'>
        <button className='px-5 py-2 bg-blue-600 text-white rounded-lg font-bold'><AddIcon/>Add Shop</button>
    </div>
    <div>
        <ShopsDataTable/>
    </div>
</div>
  )
}

export default Shops