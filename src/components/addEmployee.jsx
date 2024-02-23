import { useState } from "react";

import { auth, db } from "../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Modal } from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

function AddEmployee({ open, handleClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const [contact, setContact] = useState("");


  const handleForm = async (event) => {
    event.preventDefault();

    try {
      // Create a user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      ); // Updated function call

      // Get the user's UID
      const { uid } = userCredential.user;

      // Store additional user data in Firestore
      const userDocRef = doc(db, "user", uid);
      setDoc(userDocRef, {
        email,
        fname,
        lname,
        contact,
        uid,
      }).then(() => {
        console.log("document written");
        
      });
    } catch (error) {
      console.error("Error during registration:", error);
    }

    // else successful
  };
  return (
    <Modal open={open}>
    <div className="w-full  flex justify-center items-center ">

      <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center  pt-[150px]">
        <div className="bg-white bg-opacity-40 p-4 rounded-xl">
        <button className='float-right' onClick={handleClose}><HighlightOffIcon/></button>
          <h1 className=" text-center text-white font-bold"> Add Employee</h1>
          <form onSubmit={handleForm} className="flex flex-col gap-4">
            <label htmlFor="email">
              <p className="text-white">Email</p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                name="email"
                value={email}
                placeholder="example@mail.com"
                className="rounded-lg px-2 py-1"
              />
            </label>
            <label htmlFor="password">
              <p className="text-white">Password</p>
              <input
                onChange={(e) => setPassword(e.target.value)}
                required
                type="password"
                name="password"
                value={password}
                placeholder="password"
                className="rounded-lg px-2 py-1"
              />
            </label>
            <label htmlFor="First Name">
              <p className="text-white">First Name</p>
              <input
                onChange={(e) => setFname(e.target.value)}
                required
                type="text"
                name="first name"
                value={fname}
                placeholder="First name"
                className="rounded-lg px-2 py-1"
              />
            </label>

            <label htmlFor="First Name">
              <p className="text-white">Last Name</p>
              <input
                onChange={(e) => setLname(e.target.value)}
                required
                type="text"
                name="last name"
                value={lname}
                placeholder="Last name"
                className="rounded-lg px-2 py-1"
              />
            </label>

            


     

            <label htmlFor="First Name">
              <p className="text-white">Contact</p>
              <input
                onChange={(e) => setContact(e.target.value)}
                required
                type="number"
                name="contact"
                value={contact}
                placeholder="Contact"
                className="rounded-lg px-2 py-1"
              />
            </label>

            <button
              className="p-1 bg-cyan-500 rounded-2xl text-white"
              type="submit"
            >
              Register
            </button>
          </form>
          
        </div>
      </div>
    </div>
    </Modal>
  );
}

export default AddEmployee;


