import React from 'react';
import {useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import { useCart } from '../Context/Author.context';
import {toast} from 'react-toastify';
import{useFormik} from 'formik';

const validate = values => {
   const errors = {};
 
   if (!values.authorName) {
     errors.authorName = 'Required';
   } else if (values.authorName.length > 15) {
     errors.authorName = 'Author Name must be 15 characters or less';
   }

   if (!values.bioGraphy) {
     errors.bioGraphy = 'Required';
   } else if (values.bioGraphy.length > 100) {
     errors.bioGraphy = 'Name must be 100 characters or less';
   }
 
   if (!values.birthDate) {
     errors.birthDate = 'Required';
   } 
 
   return errors;
 };

export default function Createauthor() {

  const {Cart=[],handleCreate=()=>{}} = useCart([]);
  let navigate = useNavigate();


  //HANDLING FORMIK 

    const formik = useFormik({
     initialValues: {
       authorName:'',
       birthDate:'',
       bioGraphy:'',
     },
     validate,

       //HANDLING  SAVE BUTTON FUNCTIONALITY

     onSubmit:()=>{
          let idVal = Cart.length+1;

handleCreate(idVal,formik.values.authorName,formik.values.birthDate,formik.values.bioGraphy);

navigate('/authors')

     }

   
   });
  //  console.log('formik values',formik.values)
  

   return (
    
       <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
    <div className='w-50 border bg-secondary text-white p-5'>

      {/* USER CREATION FORM */}
      <form onSubmit={formik.handleSubmit}>
        <h5>Add New User</h5>
        {/*Author Name  */}
        <div>
          <label htmlFor="authorName">Author Name:</label>
          <input 
          type="text"
          name='authorName' 
          className='form-control' 
          // onChange={(e)=>setName(e.target.value)}
           onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.authorName}
         />
         {formik.errors.authorName ? <div style={{color:'darkred',fontWeight:'bold'}}>{formik.errors.authorName}</div> : null}
        </div>
        {/* Birth Date */}
           <div>
          <label htmlFor="birthDate">Birth Date:</label>
          <input 
          type="date"
          name='birthDate'
           className='form-control' 
           onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.birthDate}
         />
         {formik.errors.birthDate ? <div style={{color:'darkred',fontWeight:'bold'}}>{formik.errors.birthDate}</div> : null}
        </div>
        
         {/* bioGraphy */}
           <div>
          <label htmlFor="bioGraphy">Bio-Graphy:</label>
          <input 
          type="text"
          name='bioGraphy' 
          className='form-control' 
           onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.bioGraphy}
         />
         {formik.errors.bioGraphy ? <div style={{color:'darkred',fontWeight:'bold'}}>{formik.errors.bioGraphy}</div> : null}
        </div><br />

        {/* BACK & SAVE BUTTONS */}
        
          <Link to={'/authors'} className='btn btn-danger m-1'>Back</Link>
        <button className='btn btn-primary m-1' type='submit'>Save</button>
      </form>
    </div>

    
  </div>
    
  )
}
