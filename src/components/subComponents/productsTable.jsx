import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';


export default function ProductsDataTable() {

  const [rows, setRows] = useState([])

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'code', headerName: 'Code', width: 120 },
    { field: 'catagory', headerName: 'Catagory', width: 130 },
    {
      field: 'description',
      headerName: 'Description',
      width: 350,
    },
    {
      field: 'pack',
      headerName: 'Pack Size',
      type: 'number',
      width: 100,
    },
    {
      field: 'whole',
      headerName: 'Whole Sale Price',
      type: 'number',
      width: 150,
    },
    {
      field: 'retail',
      headerName: 'Retail Price',
      type: 'number',
      width: 130,
    },
    
  ];

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch('https://caltexserver.netlify.app/api/product');
        if(!response.ok){
          throw new Error('Failed to fetch data');
        }   
        
        const data = await response.json();

        const rowsWithId = data.map((row, index) => ({id:index + 1, ...row}));
        setRows(rowsWithId)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
     
    }
    fetchData()

  },[])
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
       
      />
    </div>
  );
}