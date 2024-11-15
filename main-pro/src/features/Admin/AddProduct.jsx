import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const AddProduct = () => {
    let initialData = { name: '', brand: '', category: '', stock: '', selling_price: '', original_price: '', image: '', desc: '' }
    const [product, setProduct] = useState({ ...initialData })
    const [picLoading,setPicLoading] =useState(false)
    const navigate = useNavigate()

    //edit 
    const {id} = useParams()
    const getData = async () => {
        try {
            const res = await fetch(`https://67331a7f2a1b1a4ae1120b27.mockapi.io/products/${id}`)
            const data = await res.json()
            setProduct(data)
        }
        catch (err) { console.log(err) }
    }
    useEffect(()=>{
        if(id){getData()}
        else {setProduct({ ...initialData })}
    },[id])


    const handleImage=async(e)=>{
        const img  = e.target.files[0]
        setPicLoading(true)
        if(!img){return}
        if(['image/jpg','image/jpeg','image/png','image/jfif','image/gif','image/webp'].includes(img.type)){
            const data  = new FormData()
            data.append("file",img)
            data.append('upload_preset','react23rd')
            data.append('cloud_name','harshitalogicrays')
            data.append('folder','products')
            try{
                const res = await fetch(`https://api.cloudinary.com/v1_1/harshitalogicrays/image/upload`,{
                    method:"POST",
                    body:data
                })
                const result = await res.json()
                console.log(result)
                setProduct({...product,image:result.url})
            }
            catch(err){toast.error(err.message)}
            setPicLoading(false)
        }
        else {
            setPicLoading(false)
            toast.error("Invalid image")}

    }
    const handleSubmit=async(e)=>{
        e.preventDefault()
        if(!id){//add
            try{
                await fetch(`https://67331a7f2a1b1a4ae1120b27.mockapi.io/products`,{
                    method:'POST',
                    headers:{'content-type':'application/json'},
                    body:JSON.stringify(product)
                })
                toast.success("product added")
                navigate('/admin/view')
            }
            catch(err){toast.error(err)}
        }
        else{ //update
            try{
                await fetch(`https://67331a7f2a1b1a4ae1120b27.mockapi.io/products/${id}`,{
                    method:'PUT',
                    headers:{'content-type':'application/json'},
                    body:JSON.stringify({...product,createdAt:product.createdAt,editedAt:new Date()})
                })
                toast.success("product updated")
                navigate('/admin/view')
            }
            catch(err){toast.error(err)}
        }
       
    }
    return (
        <div className="flex flex-col justify-center">
            <div className="sm:w-full min-w-full sm:max-w-sm">
                <h2 className=" text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    {id ?"Edit " :"Add "} Product
                </h2>
            </div>
            <div className="mt-10 mx-3 sm:w-auto " >
                <form method="POST" className="space-y-2" onSubmit={handleSubmit}>
                    <div className="flex justify-between items-start">
                        <div>
                            <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                                Name
                            </label>
                            <div className="mt-2">
                                <input name="name" type="text"
                                    className="block w-96 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            value={product.name} onChange={(e)=>setProduct({...product,name:e.target.value})}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="category" className="block text-sm/6 font-medium text-gray-900">
                                category
                            </label>
                            <div className="mt-2">
                                <input name="category" type="text"
                                    className="block w-96 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                    value={product.category} onChange={(e)=>setProduct({...product,category:e.target.value})}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-start">
                        <div>
                            <label htmlFor="brand" className="block text-sm/6 font-medium text-gray-900">
                                Brand
                            </label>
                            <div className="mt-2">
                                <input name="brand" type="text"
                                    className="block w-96 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                    value={product.brand} onChange={(e)=>setProduct({...product,brand:e.target.value})}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="Stock" className="block text-sm/6 font-medium text-gray-900">
                                Stock
                            </label>
                            <div className="mt-2">
                                <input name="stock" type="number"
                                    className="block w-96 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                    value={product.stock} onChange={(e)=>setProduct({...product,stock:e.target.value})}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-start">
                        <div>
                            <label htmlFor="Original_price" className="block text-sm/6 font-medium text-gray-900">
                                Original_price
                            </label>
                            <div className="mt-2">
                                <input name="original_price" type="number"
                                    className="block w-96 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                    value={product.original_price} onChange={(e)=>setProduct({...product,original_price:e.target.value})}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="selling_price" className="block text-sm/6 font-medium text-gray-900">
                                selling_price
                            </label>
                            <div className="mt-2">
                                <input name="selling_price" type="number"
                                    className="block w-96 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                    value={product.selling_price} onChange={(e)=>setProduct({...product,selling_price:e.target.value})}
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="mt-2 mb-2">
                            <input name="image" type="file"
                                className="block w-96 rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                onChange={handleImage}
                            />
                        </div>
                        {id && <img src={product.image} className='h-14 w-14'/>}
                    </div>

                    <div>
                        <label htmlFor="desc" className="block text-sm/6 font-medium text-gray-900">
                            desc
                        </label>
                        <div className="mt-2">
                            <textarea name="desc" type="number"
                                className="block min-w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                value={product.desc} onChange={(e)=>setProduct({...product,desc:e.target.value})}
                            ></textarea>
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                           {picLoading ? "uploading" :<> {id? "Update Product" :"Add Product"} </>} 
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddProduct
