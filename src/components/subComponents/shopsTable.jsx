import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';



export default function ShopsDataTable() {
  const [rows, setRows] = useState([]);
  

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'address', headerName: 'Address', width: 130 },
    { field: 'tele', headerName: 'Telephone', width: 130 },
    { field: 'email', headerName: 'Email', width: 130 },
    { field: 'shopcode', headerName: 'Shop Code', width: 130 },
    {
      field: 'delete',
      headerName: 'Delete',
      width: 100,
      renderCell: (params) => (
        <button onClick={() => handleDelete(params.row)}>Delete</button>
      ),
    },
  ];

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('https://caltexserver.netlify.app/api/shop');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();

        // Add a unique ID to each row
        const rowsWithId = data.map((row, index) => ({ id: index + 1, ...row }));
        setRows(rowsWithId);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the fetch function
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  // Delete individual row
  const handleDelete = async (row) => {
    try {
      // Your delete logic here
      console.log('Row deleted successfully:', row);
    } catch (error) {
      console.error('Error deleting row:', error);
    }
  };

  return (
    <div style={{ height: 400, width: '100%' }}>
      
      <DataGrid rows={rows} columns={columns} pageSize={5} getRowId={(row) => row.id} />
    </div>
  );
}
