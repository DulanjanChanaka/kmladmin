import React, { useState } from 'react'
import ShopsDataTable from './subComponents/shopsTable'
import AddIcon from '@mui/icons-material/Add';
import { Button, Modal } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
export const AddShopctModal = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    code: '',
    catagory: '',
    description: '',
    pack: null,
    whole: null,
    retail: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('https://caltexserver.netlify.app/api/shop', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Failed to add product');
      }
      // Close the modal after successful submission
      handleClose();
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <Modal open={open} >
      
      <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
  <div className="bg-white rounded-lg p-8 w-[600px]">
    <button className='float-right' onClick={handleClose}><HighlightOffIcon/></button>
    <h2 className="text-2xl mb-4">Add Product</h2>
    <div className='mb-5 pb'>

    <div>
          <label className="block">Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2 w-full" />
        </div>
        <div>
          <label className="block">Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2 w-full" />
        </div>
        <div>
          <label className="block">Telephone:</label>
          <input type="text" name="tele" value={formData.tele} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2 w-full" />
        </div>
        <div>
          <label className="block">Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2 w-full" />
        </div>
        <div>
          <label className="block">Shop Code:</label>
          <input type="text" name="shopcode" value={formData.shopcode} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2 w-full" />
        </div>
    </div >
    <Button 
      variant="contained" 
      onClick={handleSubmit}
      className="bg-blue-500 text-white hover:bg-blue-600"
    >
      Add
    </Button>
  </div>
</div>

    </Modal>
  );
};



const Shops = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  return (
    <div className='grid  grid-rows px-5'>
    <div className=' py-6  pl-6'>
        <button onClick={handleOpen} className='px-5 py-2 bg-blue-600 text-white rounded-lg font-bold'><AddIcon/>Add Shop</button>
    </div>
    <div>
        <ShopsDataTable/>
    </div>
    <AddShopctModal open={open} handleClose={handleClose} />
</div>
  )
}

export default Shops