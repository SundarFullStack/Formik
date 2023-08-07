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
        <Link to={'/create'} className='btn btn-success'>Add Books [+]</Link>
        <Link to={'/'} className='btn btn-secondary m-2'>Dashboard</Link>
      </div>

      {/* TABLE */}
      
      <Table striped bordered hover variant="light" className='mt-3'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>ISBN_No</th>
            <th>publishedDate</th>
          </tr>

        </thead>
        <tbody>
        {Cart.map((user,index)=>(
            <tr  key={index}>
            <td>{user.id}</td>
            <td>{user.title}</td>
            <td>{user.author}</td>
            <td>{user.ISBN_No}</td>
            <td>{user.publishedDate}</td>
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
