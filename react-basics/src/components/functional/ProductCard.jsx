import React from 'react'

const ProductCard = ({product}) => { //{}
  return (
    <div className='col-3 mb-3'>  
        <div className="card">
            <img src={product.image} alt="" className="card-img-top" style={{height:'180px'}} />
            <div className="card-body">
                <h5>{product.title} 
                    <span className='float-end'>{product.category}</span>
                </h5>
                <h6>${product.price}</h6>
                <button
                    type="button"
                    class="btn btn-danger"
                >
                    Add to cart
                </button>
                
            </div>
        </div>
    </div>
  )
}

export default ProductCard
