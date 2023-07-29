import React from 'react'
import{useState} from 'react';
import {Link} from 'react-router-dom';
import { useCart } from '../Context/Author.context';
import { useParams,useNavigate } from 'react-router-dom';


export default function Updateauthor() {
  let {id} = useParams();
  const {Cart=[],handleUpdate=()=>{}} = useCart();

  let navigate = useNavigate();
  // console.log(Cart);
  // console.log(id)

  let matchedUser = Cart.filter((find)=>find.id == id);

  // console.log(matchedUser);

  let{authorName,bioGraphy,birthDate} = matchedUser[0];

  let  [mauthorName,setauthorName] = useState(authorName);
  let  [mbioGraphy,setbioGraphy] = useState(bioGraphy);
  let  [mbirthDate,setbirthDate] = useState(birthDate);

  //HANDLING EDIT BUTTON FUNCTIONALITY

  function handleEdit(event){

    event.preventDefault();

    handleUpdate(id,mauthorName,mbioGraphy,mbirthDate);


    navigate('/authors')

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
        {/*Authtor Name */}
        <div>
          <label htmlFor="name">Authtor Name:</label>
          <input type="text"name='name' className='form-control' onChange={(e)=>setauthorName(e.target.value)} value={mauthorName}/>
        </div>
        {/* Bio-Graphy */}
           <div>
          <label htmlFor="bioGraphy">Bio-Graphy:</label>
          <input type="text"name='bioGraphy' className='form-control'value={mbioGraphy} onChange={(e) => setbioGraphy(e.target.value)}/>
        </div>
         {/* BIRTH DATE */}
           <div>
          <label htmlFor="birthDate">Birth Date:</label>
          <input type="date"name='birthDate' className='form-control'value={mbirthDate}  onChange={(e) => setbirthDate(e.target.value)}/>
        </div><br />

        {/* BACK & SAVE BUTTON */}
          <Link to={'/authors'} className='btn btn-danger m-1'>Back</Link>
        <button className='btn btn-primary m-1' type='submit'>Save</button>
      </form>
    </div>

    
  </div>
    
  )
}
