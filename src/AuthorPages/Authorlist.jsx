import React from 'react'
import Table from 'react-bootstrap/Table';
import {useEffect,useState } from 'react';
import {Link} from 'react-router-dom';
import { useCart } from '../Context/Author.context';


export default function Authorlist() {

  let{Cart=[],handleDelete=()=>{}} = useCart([]);



  //HANDLING DELETE BUTTON FUNCTIONALITY

  function deletefunc(id){

    handleDelete(id);


  }

  return (
    <div className='container'>
      <h4 className='header mt-3'>Author Management System</h4>

      {/* ADD USER & DASHBOARD BUTTON */}

      <div className="createBtn">
        <Link to={'/createauthor'} className='btn btn-success'>Add Author[+]</Link>
        <Link to={'/'} className='btn btn-secondary m-2'>Dashboard</Link>
      </div>

      {/* TABLE */}
      
      <Table striped bordered hover variant="light" className='mt-3'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Author Name</th>
            <th>Bio-Graphy</th>
            <th>Birth Date</th>
          </tr>

        </thead>
        <tbody>
        {Cart.map((user,index)=>(
            <tr  key={index}>
            <td>{user.id}</td>
            <td>{user.authorName}</td>
            <td>{user.bioGraphy}</td>
            <td>{user.birthDate}</td>
            <td>
              <Link to={`/editauthor/${user.id}`} className='btn btn-primary btn-sm m-1'>Edit</Link>
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
