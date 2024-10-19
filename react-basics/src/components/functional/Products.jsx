import React, { useEffect, useState } from 'react'
import { getData } from '../../api'
import ProductItems from './ProductItems'
const Products = () => {
    let [products,setProducts] =useState([])

    useEffect(()=>{
     getData().then((result)=> setProducts(result))
      },[]) //onload
  return (
    <> <ProductItems products={products}/> </>
  )
}

export default Products
