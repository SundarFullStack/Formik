import React from 'react'
import {useEffect,useState } from 'react';
import Axios from 'axios';
import { useCart } from '../Context/Cart.context';
export default function Data() {

   const {Cart,setCart} = useCart();

  //  FETCHING MOCK API DATA USING AXIOS

    useEffect(()=>{

    Axios.get("https://jsonplaceholder.typicode.com/users").then(result=>{
      if(result&&result.data){
        setCart(result.data);
        
      }
    }).catch(error => console.log(error));


    return ()=> {};
  },[])

  // console.log("data",Cart)
  return (
    <div></div>
  )
}
