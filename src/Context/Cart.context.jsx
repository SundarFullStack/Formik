import {createContext,useContext,useState} from 'react';


const cartContext = createContext({

  Cart:[],
  setCart:()=>Promise,
  handleCreate:()=>null,
  handleUpdate:()=>null,
  handleDelete:()=>null,
})

export const useCart = () => useContext(cartContext);

export default function CartContextProvider({children}){

  let [Cart,setCart] = useState([]);
 

  //HANDLING USER CREATION FUNCTIONALITY

  function handleCreate(id,title,author,ISBN_No,publishedDate){
    let cart_copy = [...Cart];

cart_copy.push({id:id,title:title,author:author,ISBN_No:ISBN_No,publishedDate:publishedDate})

// console.log('cart_copy',cart_copy);

setCart(cart_copy);

// console.log('Cart',Cart);

  }

  // HANDLING UPDATE USER FUNCTIONALITY

  function handleUpdate(id,title,author,ISBN_No,publishedDate){

    let cart_copyU = [...Cart];

   let updateUser = cart_copyU.find((f)=> f.id==id);

  //  console.log(updateUser);

   if(updateUser){

   updateUser.title=title;
    updateUser.author=author;
      updateUser.ISBN_No=ISBN_No;
      updateUser.publishedDate=publishedDate;
   }


setCart(cart_copyU)


// console.log('CopyCart',cart_copyU)
// console.log('Cart',Cart)

  }

  //HANDLING DELETE USER FUNCTIONALITY

  function handleDelete(id){

    let cart_copyD = [...Cart];

    let ignoreDeleteObj = cart_copyD.filter((d)=> d.id !==id);

    // console.log(ignoreDeleteObj);



    setCart(ignoreDeleteObj);




  }

let value ={
  Cart,
  setCart,
  handleCreate,
  handleUpdate,
  handleDelete,
  
}


return <cartContext.Provider value={value}>{children}</cartContext.Provider>
}
