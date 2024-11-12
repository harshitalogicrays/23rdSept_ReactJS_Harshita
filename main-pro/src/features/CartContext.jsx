import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify'

const cart = React.createContext()
const CartContext = ({children}) => {
    const [cartItems,setCartItems] = useState([])
    const [total,setTotal] = useState(0)
    const addtocart=(product)=>{
       const itemIndex =  cartItems.findIndex(item=>item.id==product.id) ///index or -1
       if(itemIndex == -1){
        setCartItems([...cartItems,{...product,qty:1}])
        toast.success(`${product.title} added to cart`)
       }
        else {  toast.error(`${product.title} already added to cart`)}
    }
    const increase=(product)=>{
      const itemIndex =  cartItems.findIndex(item=>item.id==product.id)
      cartItems[itemIndex].qty++
      setCartItems([...cartItems])
    }
    const decrease=(product)=>{
      const itemIndex =  cartItems.findIndex(item=>item.id==product.id)
      if(cartItems[itemIndex].qty>1)
         cartItems[itemIndex].qty--
      else 
        cartItems[itemIndex].qty=1
      setCartItems([...cartItems])
    }
    const remove_from_cart=(id)=>{
      // const itemIndex =  cartItems.findIndex(item=>item.id==id)
      // cartItems.splice(itemIndex,1)//index,deletedcount
      // setCartItems([...cartItems])

      const filters = cartItems.filter(item=>item.id !=id)
      setCartItems([...filters])
    }
    const empty_cart=()=>{ setCartItems([]);setTotal(0)}
    const calculate_total=()=>{
      const total = cartItems.reduce((prev,curr)=>{return prev+curr.price*curr.qty},0)
      setTotal(total)
    }
  return (
    <cart.Provider value={{cartItems,total,addtocart,increase,decrease,remove_from_cart,empty_cart,calculate_total}}>
        {children}
    </cart.Provider>
  )
}

export default CartContext

export const useCart = ()=>useContext(cart)
