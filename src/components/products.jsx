import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ProductsDataTable from './subComponents/productsTable';
import catagories from "./data"

const AddProductModal = ({ open, handleClose }) => {
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
      const response = await fetch('https://caltexserver.netlify.app/api/product', {
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
          <button className='float-right' onClick={handleClose}><HighlightOffIcon /></button>
          <h2 className="text-2xl mb-4">Add Product</h2>
          <div className='mb-5 pb'>

            <div className='mb-4'>
              <TextField
                label="Code"
                name="code"
                value={formData.code}
                onChange={handleChange}
                fullWidth
                className="mb-4"
              />
            </div>

            <div className='mb-4'>

              <div fullWidth className="mb-4  border-4 border-slate-300 rounded-md">

                <select
                  name="catagory"
                  value={formData.catagory}
                  onChange={handleChange}
                  className='py-3'
                >
                  {catagories.map((catagory, index) => ( 
                    <option className='gap-3' key={index} value={catagory}>{catagory}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className='mb-4'>
              <TextField
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                fullWidth
                className="mb-4"
              />
            </div>

            <div className='mb-4'>
              <TextField
                label="Pack"
                name="pack"
                type="number"
                value={formData.pack}
                onChange={handleChange}
                fullWidth
                className="mb-4"
              />
            </div>

            <div className='mb-4'>
              <TextField
                label="Whole"
                name="whole"
                type="number"
                value={formData.whole}
                onChange={handleChange}
                fullWidth
                className="mb-4"
              />
            </div>

            <div className='mb-4'>
              <TextField
                label="Retail"
                name="retail"
                type="number"
                value={formData.retail}
                onChange={handleChange}
                fullWidth
                className="mb-4"
              />
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

const Products = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='grid grid-rows px-5'>
      <div className='py-6 pl-6'>
        <button
          className='px-5 py-2 bg-blue-600 text-white rounded-lg font-bold flex items-center'
          onClick={handleOpen}
        >
          <AddIcon className="mr-2" /> Add Product
        </button>
      </div>
      <div>
        <ProductsDataTable />
      </div>
      <AddProductModal open={open} handleClose={handleClose} />
    </div>
  );
};

export default Products;
