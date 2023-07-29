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

  let{title,author,ISBN_No,publishedDate} = matchedUser[0];

  let  [mtitle,settitle] = useState(title);
  let  [mauthor,setauthor] = useState(author);
  let  [mISBN_No,setISBN_No] = useState(ISBN_No);
  let  [mpublishedDate,setpublishedDate] = useState(publishedDate);

  //HANDLING EDIT BUTTON FUNCTIONALITY

  function handleEdit(event){

    event.preventDefault();

    handleUpdate(id,mtitle,mauthor,mISBN_No,mpublishedDate);


    navigate('/books')

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
          <label htmlFor="name">Title:</label>
          <input type="text"name='name' className='form-control' onChange={(e)=>settitle(e.target.value)} value={mtitle}/>
        </div>
        {/* Email */}
           <div>
          <label htmlFor="author">Author:</label>
          <input type="text"name='author' className='form-control'value={mauthor} onChange={(e) => setauthor(e.target.value)}/>
        </div>
         {/* Phone */}
           <div>
          <label htmlFor="ISBN_No">ISBN_No:</label>
          <input type="text"name='ISBN_No' className='form-control' value={mISBN_No} onChange={(e) => setISBN_No(e.target.value)}/>
        </div>
         {/* Website */}
           <div>
          <label htmlFor="publishedDate">Published Date:</label>
          <input type="date"name='publishedDate' className='form-control'value={mpublishedDate}  onChange={(e) => setpublishedDate(e.target.value)}/>
        </div><br />

        {/* BACK & SAVE BUTTON */}
          <Link to={'/books'} className='btn btn-danger m-1'>Back</Link>
        <button className='btn btn-primary m-1' type='submit'>Save</button>
      </form>
    </div>

    
  </div>
    
  )
}
