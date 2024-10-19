import React, { useEffect, useState } from 'react'
import { getData } from '../../api'

const ListRendering = () => {
    let funlinks = ['first','props','state','counter','form','form']
    let data = [{id:1,name:'eer'},{id:2,name:'srw'},{id:3,name:'erer'},{id:4,name:'erer'},{id:5,name:'ere'}]

    let [products,setProducts] =useState([])
    useEffect(async()=>{
     let result = await getData()
      setProducts(result)
    },[]) //onload


  return (
   <>
    {/* {funlinks.map((links,i)=><h1 key={i}>{links}</h1>)} */}

    {/* {data.map((item,index)=><h1>{JSON.stringify(item)}</h1>)} */}

    {/* {data.map((item)=><h1 key={item.id}>{item.name}</h1>)} */}

    {/* {products.map((item,index)=><p key={item.id}>{item.title}</p>)} */}

    <div  class="table-responsive"  >
      <table class="table table-bordered table-striped table-hover" >
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Category</th>
            <th>Image</th><th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.length==0 && <tr><td colSpan={5} 
          style={{textAlign:'center',fontWeight:'bold'}}>No Product found</td></tr>}
           {products.map((product)=>
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.category}</td>
                <td><img src={product.image} height={50} width={50} /></td>
                <td>${product.price}</td>
              </tr>
          )}
        </tbody>
      </table>
    </div>
    
   </>
  )
}

export default ListRendering
