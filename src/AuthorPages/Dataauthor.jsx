import React from 'react'
import {useEffect,useState } from 'react';
import Axios from 'axios';
import { useCart } from '../Context/Author.context';
export default function Dataauthor() {

   const {Cart,setCart} = useCart();

  //  FETCHING MOCK API DATA USING AXIOS

    useEffect(()=>{

    Axios.get("https://authors-api.onrender.com/authors").then(result=>{
      if(result&&result.data){
        setCart(result.data);
        // console.log(result.data)
      }
    }).catch(error => console.log(error));


    return ()=> {};
  },[])

  // console.log("data",Cart)
  return (
    <div></div>
  )
}
