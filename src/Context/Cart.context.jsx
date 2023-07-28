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

  function handleCreate(id,name,email,phone,website){
    let cart_copy = [...Cart];

cart_copy.push({id:id,name:name,email:email,phone:phone,website:website})

// console.log('cart_copy',cart_copy);

setCart(cart_copy);

// console.log('Cart',Cart);

  }

  // HANDLING UPDATE USER FUNCTIONALITY

  function handleUpdate(id,name,email,phone,website){

    let cart_copyU = [...Cart];

   let updateUser = cart_copyU.find((f)=> f.id==id);

  //  console.log(updateUser);

   if(updateUser){

    updateUser.name=name;
    updateUser.email=email;
    updateUser.phone=phone;
    updateUser.website=website;
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