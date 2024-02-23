import React, { useEffect, useState } from 'react'
import AssignmentIcon from '@mui/icons-material/Assignment';
import TableRowsIcon from '@mui/icons-material/TableRows';
import StorefrontIcon from '@mui/icons-material/Storefront';
import HomeIcon from '@mui/icons-material/Home';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import PersonIcon from '@mui/icons-material/Person';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [menuSelect, setMenuSelect] = useState("/")

  useEffect(() => {
    setMenuSelect(location.pathname)

  },[location])
  return (
    <div className='bg-slate-200 h-screen'>
      <div className='h-[40px]'>
        <h3 className='font-bold text-2xl text-center'>KML</h3>
      </div>
      <div className='bg-slate-500 h-1'></div>
      <div className='px-2 mt-5'>
        <Link to="/">
          <div className='flex flex-row p-3 gap-3 rounded-lg font-medium' style={{
            backgroundColor: menuSelect === '/'? "white"  : ""
          }}>
            <AssignmentIcon />
            <p>ORDERS</p>
          </div>
        </Link>

        <Link to="/products">
          <div className='flex flex-row p-3 gap-3 rounded-lg font-medium' style={{
            backgroundColor:menuSelect === '/products'? "white" : ""
          }}>
            <TableRowsIcon />
            <p>PRODUCTS</p>
          </div>
        </Link>

        <Link to="/shops">
          <div className='flex flex-row p-3 gap-3 rounded-lg font-medium' style={{
            backgroundColor:menuSelect === '/shops'? 'white' : ""
          }}>
            <StorefrontIcon />
            <p>SHOPS</p>
          </div>
        </Link>

        <Link to="/mainstore">
          <div className='flex flex-row p-3 gap-3 rounded-lg font-medium' style={{
            backgroundColor: menuSelect === '/mainstore'? 'white' : ""
          }}>
            <HomeIcon />
            <p>MAIN STORE</p>
          </div>
        </Link>

        <Link to="/reports">
          <div className='flex flex-row p-3 gap-3 rounded-lg font-medium' style={{
            backgroundColor: menuSelect === '/reports' ? "white" : ""
          }}>
            <EqualizerIcon />
            <p>REPORTS</p>
          </div>
        </Link>

        <Link to="/employee">
          <div className='flex flex-row p-3 gap-3 rounded-lg font-medium' style={{
            backgroundColor: menuSelect === '/employee' ? "white" : ""
          }}>
            <PersonIcon />
            <p>EMPLOYEE</p>
          </div>
        </Link>
      </div>


    </div>
  )
}

export default Navbar