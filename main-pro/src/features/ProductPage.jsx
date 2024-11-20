import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, selectProducts } from '../redux/productSlice'
import { filter_by_category, selectCategory, selectFilters, selectSearch } from '../redux/filterSlice'
import ProductCard from './ProductCard'

const ProductPage = () => {

   const dispatch = useDispatch()
    useEffect(()=>{  dispatch(fetchProducts())},[]) 
    const products = useSelector(selectProducts)
 
      //filters - 
      const filterProducts= useSelector(selectFilters)
      const searchval = useSelector(selectSearch)
      const catval = useSelector(selectCategory)

      const categories  = ["cloths","sports","grocery","electronics","furniture"]
      const [cat,setCat] =useState('')
      useEffect(()=>{
        dispatch(filter_by_category({products,cat}))
      },[cat])
  return (
    <>
      <div className="flex justify-start bg-white">
          <div className='mx-1 my-3 px-2 py-2 sm:px-2 sm:py-4  lg:px-2"'>
            <h5 className='my-2 font-bold text-xl'>Categories</h5> 
            <ul>
              {categories.map((c,i)=>
              <Fragment key={i}>
              <li className='inline-flex justify-between w-12'><input type="radio" name="category" value={c} className='me-2' onChange={(e)=>setCat(c)}/><label>{c}</label></li><br/>
              </Fragment>)}
            </ul>
            <h5 className='my-2 font-bold text-xl w-36'>Sort by Price</h5> 
            <ul>

              <li className='inline-flex justify-between w-28'><input type="radio" name="price" value="htol" className='me-2'/><label>High to Low</label></li><br/>
              <li className='inline-flex justify-between w-28'><input type="radio" name="price" value='ltoh' className='me-2'/><label>Low to High</label></li><br/>
            </ul>
          </div>
        <div> {searchval != '' || catval !='' ?
      <>
        {filterProducts.length ==0 ? <h1 className='mt-20 font-bold text-2xl ps-10'>No Product found</h1> :
         <ProductCard products= {filterProducts}/>
        }
      </>
      : 
      <ProductCard products= {products}/>
      }
      </div>
      </div>

     
      
    </>
  )
}

export default ProductPage
