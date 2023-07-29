import React from 'react';
import {useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import { useCart } from '../Context/Cart.context';
import {toast} from 'react-toastify';
import{useFormik} from 'formik';

const validate = values => {
   const errors = {};
 
   if (!values.title) {
     errors.title = 'Required';
   } else if (values.title.length > 15) {
     errors.title = 'Title must be 15 characters or less';
   }
 
   if (!values.ISBN_No) {
     errors.ISBN_No = 'Required';
   } else if (!/^[0-9+\-*/().\s]+$/.test(values.ISBN_No)) {
     errors.ISBN_No = 'Must be in ISBN no. format';
   }

   if (!values.author) {
     errors.author = 'Required';
   } else if (values.author.length > 15) {
     errors.author = 'Name must be 15 characters or less';
   }
 
   if (!values.publishedDate) {
     errors.publishedDate = 'Required';
   } 
 
   return errors;
 };

export default function Create() {

  const {Cart=[],handleCreate=()=>{}} = useCart([]);
  let navigate = useNavigate();


  //HANDLING FORMIK 

    const formik = useFormik({
     initialValues: {
       title: '',
       publishedDate:'',
       ISBN_No:'',
       author:'',
     },
     validate,

       //HANDLING  SAVE BUTTON FUNCTIONALITY

     onSubmit:()=>{
          let idVal = Cart.length+1;

handleCreate(idVal,formik.values.title,formik.values.publishedDate,formik.values.ISBN_No,formik.values.author);

navigate('/books')

     }

   
   });
  //  console.log('formik values',formik.values)
  

   return (
    
       <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
    <div className='w-50 border bg-secondary text-white p-5'>

      {/* USER CREATION FORM */}
      <form onSubmit={formik.handleSubmit}>
        <h5>Add New User</h5>
        {/* Title */}
        <div>
          <label htmlFor="title">Title:</label>
          <input 
          type="text"
          name='title' 
          className='form-control' 
          // onChange={(e)=>setName(e.target.value)}
           onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.title}
         />
         {formik.errors.title ? <div style={{color:'darkred',fontWeight:'bold'}}>{formik.errors.title}</div> : null}
        </div>
        {/* Published Date */}
           <div>
          <label htmlFor="publishedDate">Published Date:</label>
          <input 
          type="date"
          name='publishedDate'
           className='form-control' 
          //  onChange={(e) => setEmail(e.target.value)} 
           onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.publishedDate}
         />
         {formik.errors.publishedDate ? <div style={{color:'darkred',fontWeight:'bold'}}>{formik.errors.publishedDate}</div> : null}
        </div>
         {/* ISBN_No */}
           <div>
          <label htmlFor="ISBN_No">ISBN_No:</label>
          <input 
          type="text"
          name='ISBN_No' 
          className='form-control' 
          // onChange={(e) => setPhone(e.target.value)}
           onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.ISBN_No}
         />
         {formik.errors.ISBN_No ? <div style={{color:'darkred',fontWeight:'bold'}}>{formik.errors.ISBN_No}</div> : null}
        </div>
         {/* Author */}
           <div>
          <label htmlFor="author">Author:</label>
          <input 
          type="text"
          name='author' 
          className='form-control' 
          // onChange={(e) => setWebsite(e.target.value)}
           onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.author}
         />
         {formik.errors.author ? <div style={{color:'darkred',fontWeight:'bold'}}>{formik.errors.author}</div> : null}
        </div><br />

        {/* BACK & SAVE BUTTONS */}
        
          <Link to={'/books'} className='btn btn-danger m-1'>Back</Link>
        <button className='btn btn-primary m-1' type='submit'>Save</button>
      </form>
    </div>

    
  </div>
    
  )
}
