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
    const increase=()=>{}
    const decrease=()=>{}
    const remove_from_cart=()=>{}
    const empty_cart=()=>{}
    const calculate_total=()=>{}
  return (
    <cart.Provider value={{cartItems,total,addtocart,increase,decrease,remove_from_cart,empty_cart,calculate_total}}>
        {children}
    </cart.Provider>
  )
}

export default CartContext

export const useCart = ()=>useContext(cart)
