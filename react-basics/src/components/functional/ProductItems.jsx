import React from 'react'
import ProductCard from './ProductCard'

const ProductItems = ({products=[]}) => { //[{},{},{}]
  return (
    <div className='container'>
        {products.length==0 && <h1>No product found</h1>}
        <div className="row">
             {products.map(item=><ProductCard key={item.id} product={item}/>)}
        </div>
    </div>
  )
}

export default ProductItems
