import React from 'react'
import {Link} from 'react-router-dom'

export default function Dashboard() {
  return (
 <div className="container">
    <div className="card text-center mt-5 text-white bg-secondary mb-3" id='parentCard'>
  <div className="card-header">
    <h4>React Formik Validation Task</h4>
  </div>
  <div className="card-body">
     <div className="col-12-md">
   <div className="row">
   

    <div className="card text-right col-md-4 m-3 " style={{width: '18rem',backgroundColor:'#fff3cd'}}>
       <div className="card-header"><h5>Book Form</h5></div>
  <div className="card-body">
    <p className="card-text">Here you can able to manage books in libraries.</p>
    <Link to="/books" className="btn btn-success" style={{float: "right"}}>View</Link>
  </div>
</div>

<div className="card text-right col-md-4 m-3"  style={{width: '18rem',backgroundColor:'#fff3cd'}}>
   <div className="card-header"><h5>Author Form</h5></div>
  <div className="card-body">
    <p className="card-text">Here you can able to manage authors of books.</p>
    <Link to="/authors" className="btn btn-success"style={{float: "right"}}>View</Link>
  </div>
</div>
   </div>
   </div>
  </div>
  
</div>
 </div>
  )
}
