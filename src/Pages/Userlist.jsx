import React from 'react'
import Table from 'react-bootstrap/Table';
import {useEffect,useState } from 'react';
import {Link} from 'react-router-dom';
import { useCart } from '../Context/Cart.context';


export default function Userlist() {

  let{Cart=[],handleDelete=()=>{}} = useCart([]);

  // console.log("Userlist",Cart)

  //HANDLING DELETE BUTTON FUNCTIONALITY

  function deletefunc(id){

    handleDelete(id);


  }



  return (
    <div className='container'>
      <h4 className='header mt-3'>CRUD app creation using axios with mock API</h4>

      {/* ADD USER BUTTON */}

      <div className="createBtn">
        <Link to={'/create'} className='btn btn-success'>Add User[+]</Link>
      </div>

      {/* TABLE */}
      
      <Table striped bordered hover variant="light" className='mt-3'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Action</th>
          </tr>

        </thead>
        <tbody>
        {Cart.map((user,index)=>(
            <tr  key={index}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.website}</td>
            <td>
              <Link to={`/edit/${user.id}`} className='btn btn-primary btn-sm m-1'>Edit</Link>
              <button className='btn btn-danger btn-sm m-1' onClick={(e)=>deletefunc(user.id)}>Delete</button>
            </td>
          </tr>
        ))
}

        </tbody>

      </Table>
    </div>
  )
}
