import {createContext,useContext,useState} from 'react';


const authorContext = createContext({

  Cart:[],
  setCart:()=>Promise,
  handleCreate:()=>null,
  handleUpdate:()=>null,
  handleDelete:()=>null,
})

export const useCart = () => useContext(authorContext);

export default function AuthorContextProvider({children}){

  let [Cart,setCart] = useState([]);
 

  //HANDLING USER CREATION FUNCTIONALITY

  function handleCreate(id,authorName,birthDate,bioGraphy){
    let cart_copy = [...Cart];

cart_copy.push({id:id,authorName:authorName,birthDate:birthDate,bioGraphy:bioGraphy})

// console.log('cart_copy',cart_copy);

setCart(cart_copy);

// console.log('Cart',Cart);

  }

  // HANDLING UPDATE USER FUNCTIONALITY

  function handleUpdate(id,authorName,birthDate,bioGraphy){

    let cart_copyU = [...Cart];

   let updateUser = cart_copyU.find((f)=> f.id==id);

  //  console.log(updateUser);

   if(updateUser){

    updateUser.authorName=authorName;
    updateUser.birthDate=birthDate;
    updateUser.bioGraphy=bioGraphy;
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


return <authorContext.Provider value={value}>{children}</authorContext.Provider>
}