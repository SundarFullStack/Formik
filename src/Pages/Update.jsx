import React from 'react'
import{useState} from 'react';
import {Link} from 'react-router-dom';
import { useCart } from '../Context/Cart.context';
import { useParams,useNavigate } from 'react-router-dom';


export default function Update() {
  let {id} = useParams();
  const {Cart=[],handleUpdate=()=>{}} = useCart();

  let navigate = useNavigate();
  // console.log(Cart);
  // console.log(id)

  let matchedUser = Cart.filter((find)=>find.id == id);

  // console.log(matchedUser);

  let{name,email,phone,website} = matchedUser[0];

  let  [mname,setName] = useState(name);
  let  [memail,setEmail] = useState(email);
  let  [mphone,setPhone] = useState(phone);
  let  [mwebsite,setWebsite] = useState(website);

  //HANDLING EDIT BUTTON FUNCTIONALITY

  function handleEdit(event){

    event.preventDefault();

    handleUpdate(id,mname,memail,mphone,mwebsite);


    navigate('/')

  }
  return (
    
       <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
    <div className='w-50 border bg-secondary text-white p-5'>

      {/* UPDATION FORM  */}

      <form onSubmit={handleEdit}>
        <h5>Add New User</h5>
        {/* Id */}
        <div>
          <label htmlFor="id">Id:</label>
          <input type="text"name='Id' className='form-control' value={id}disabled/>
        </div>
        {/* Name */}
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text"name='name' className='form-control' onChange={(e)=>setName(e.target.value)} value={mname}/>
        </div>
        {/* Email */}
           <div>
          <label htmlFor="email">Email:</label>
          <input type="email"name='email' className='form-control'value={memail} onChange={(e) => setEmail(e.target.value)}/>
        </div>
         {/* Phone */}
           <div>
          <label htmlFor="phone">Phone:</label>
          <input type="text"name='phone' className='form-control' value={mphone} onChange={(e) => setPhone(e.target.value)}/>
        </div>
         {/* Website */}
           <div>
          <label htmlFor="website">Website:</label>
          <input type="text"name='website' className='form-control'value={mwebsite}  onChange={(e) => setWebsite(e.target.value)}/>
        </div><br />

        {/* BACK & SAVE BUTTON */}
          <Link to={'/'} className='btn btn-danger m-1'>Back</Link>
        <button className='btn btn-primary m-1' type='submit'>Save</button>
      </form>
    </div>

    
  </div>
    
  )
}
