import React, { useContext, useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { selectIsLoggedIn } from '../redux/userSlice'

const cart = React.createContext()
const CartContext = ({children}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const [cartItems,setCartItems] = useState([])
    const [total,setTotal] = useState(0)
    const addtocart=(product)=>{
      if(!isLoggedIn){toast.error("please login first");return}
       const itemIndex =  cartItems.findIndex(item=>item.id==product.id) ///index or -1
       if(itemIndex == -1){
        setCartItems([...cartItems,{...product,qty:1}])
        toast.success(`${product.name} added to cart`)
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
      const total = cartItems.reduce((prev,curr)=>{return prev+curr.selling_price*curr.qty},0)
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
