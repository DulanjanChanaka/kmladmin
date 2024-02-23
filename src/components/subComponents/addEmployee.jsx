import React from 'react'
import AddIcon from '@mui/icons-material/Add';

const AddEmployee = () => {
    return (
        <div>
            <div className=' py-6  pl-6'>
                <button className='px-5 py-2 bg-blue-600 text-white rounded-lg font-bold'><AddIcon />Add Employee</button>
            </div>
        </div>
    )
}

export default AddEmployee