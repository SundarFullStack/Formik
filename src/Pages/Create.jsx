import React from 'react';
import {useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import { useCart } from '../Context/Cart.context';
import {toast} from 'react-toastify';

export default function Create() {


  const [name,setName] = useState(null);
  const [email,setEmail] = useState(null);
  const [phone,setPhone] = useState(null);
  const [website,setWebsite] = useState(null);
  const {Cart=[],handleCreate=()=>{}} = useCart([]);
  let navigate = useNavigate();

  //HANDLING  CREATE BUTTON FUNCTIONALITY

  function handleSubmit(event){

    event.preventDefault();

    let idVal = Cart.length+1;

handleCreate(idVal,name,email,phone,website);

navigate('/')




  }

  

   return (
    
       <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
    <div className='w-50 border bg-secondary text-white p-5'>

      {/* USER CREATION FORM */}
      <form onSubmit={handleSubmit}>
        <h5>Add New User</h5>
        {/* Name */}
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text"name='name' className='form-control' onChange={(e)=>setName(e.target.value)}/>
        </div>
        {/* Email */}
           <div>
          <label htmlFor="email">Email:</label>
          <input type="email"name='email' className='form-control' onChange={(e) => setEmail(e.target.value)}/>
        </div>
         {/* Phone */}
           <div>
          <label htmlFor="phone">Phone:</label>
          <input type="text"name='phone' className='form-control' onChange={(e) => setPhone(e.target.value)}/>
        </div>
         {/* Website */}
           <div>
          <label htmlFor="website">Website:</label>
          <input type="text"name='website' className='form-control' onChange={(e) => setWebsite(e.target.value)}/>
        </div><br />

        {/* BACK & SAVE BUTTONS */}
        
          <Link to={'/'} className='btn btn-danger m-1'>Back</Link>
        <button className='btn btn-primary m-1' type='submit'>Save</button>
      </form>
    </div>

    
  </div>
    
  )
}
