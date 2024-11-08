import React, { useEffect, useState } from 'react'

const ProductPage = () => {
    let [products,setProducts] =useState([])

    useEffect(()=>{
     getData().then((result)=> setProducts(result))
      },[]) 
      

      const getData = async()=>{
        try{
          let res  = await fetch("https://fakestoreapi.com/products")
          let data  = await res.json()
          return data 
        }
        catch(err){
          console.log(err)
        }
      }
      const handleCart=()=>{
        alert("added to cart")
      }
  return (
    <>
     <div className="bg-white">
      <div className="mx-auto px-4 py-2 sm:px-6 sm:py-4  lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  alt={product.title}
                  src={product.image}
                  className="h-full w-full object-cover object-center lg:w-96 lg:h-80"
                />
              </div>
              <div className="mt-4 ">
                <div>
                  <h3 className="text-sm text-gray-700">
                      <span aria-hidden="true" className=" inset-0" />
                      {product.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
              <button type="button" className='bg-slate-800 text-white p-2 rounded shadow shadow-black hover:bg-white hover:text-red-300 font-bold mt-2' onClick={handleCart}>Add to cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default ProductPage
