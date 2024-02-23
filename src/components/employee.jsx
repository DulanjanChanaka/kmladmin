import { useEffect, useState } from "react";
import AddEmployee from "./addEmployee";
import AddIcon from '@mui/icons-material/Add';
import { collection, getDocs, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebase/firebase";

function Employee() {
  const [open, setOpen] = useState(false);
const [emplyeeinfo, setEmployeeinfo] = useState([])
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const fetchdata = onSnapshot(collection(db, 'user'), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEmployeeinfo(data);
    });

    return () => {
      fetchdata();
    };
  }, []);


console.log(emplyeeinfo);
  return (
<div className='grid  grid-rows px-5'>
<div className=' py-6  pl-6'>
    <button onClick={handleOpen} className='px-5 py-2 bg-blue-600 text-white rounded-lg font-bold'><AddIcon/>Add Emloyee</button>
</div>
<div>
  <div>
    {emplyeeinfo.map((employee)=> (
      <div className=" p-3  grid grid-cols-4 gap-3">
        <div className="bg-blue-300 w-[300px] rounded-lg p-2">
        <p>{employee.fname} {employee.lname}</p>
        <p>{employee.email}</p>
        <p>{employee.contact}</p>
        </div>
      </div>
    ))}

  </div>
    
</div>
<AddEmployee open={open} handleClose={handleClose}/>
</div>
  );
}

export default Employee;

