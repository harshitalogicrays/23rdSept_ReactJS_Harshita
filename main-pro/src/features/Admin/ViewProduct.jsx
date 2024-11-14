import { TrashIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'
import { BsPen, BsTrash } from 'react-icons/bs'

const ViewProduct = () => {
    const [products, setProducts] = useState([])
    useEffect(() => { getData() }, [])
    const getData = async () => {
        try {
            const res = await fetch('https://67331a7f2a1b1a4ae1120b27.mockapi.io/products')
            const data = await res.json()
            setProducts(data)
        }
        catch (err) { console.log(err) }
    }
    return (
        <>
            <h2 className=" text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                View Products
            </h2>
            <table class="border-separate border-spacing-0 border border-slate-400 w-full">
                <thead>
                    <tr>
                        <th class="border border-slate-300 p-2">Sr. No</th>
                        <th class="border border-slate-300 p-2">Category</th>
                        <th class="border border-slate-300 p-2">Name</th>
                        <th class="border border-slate-300 p-2">Image</th>
                        <th class="border border-slate-300 p-2">Selling_Price</th>
                        <th class="border border-slate-300 p-2">stock</th>
                        <th class="border border-slate-300 p-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.length==0 &&   <tr>
                        <td class="border border-slate-300 p-2" colSpan={7}>No Product Found</td></tr>}
                    {products.map((product,i)=>
                    <tr key={i}>
                        <td class="border border-slate-300 p-2">{i+1}</td>
                        <td class="border border-slate-300 p-2">{product.category}</td>
                        <td class="border border-slate-300 p-2">{product.name}</td>
                        <td class="border border-slate-300 p-2"><img src={product.image} className='h-12 w-12'/></td>
                        <td class="border border-slate-300 p-2">{product.selling_price}</td>
                        <td class="border border-slate-300 p-2">{product.stock}</td>
                        <td class="border border-slate-300 p-2">
                            <button type="button" className="text-green-500 hover:text-green-700 me-7 ms-4"><BsPen/></button>
                            <button className="text-red-500 hover:text-red-700">
                             <TrashIcon className="h-6 w-6" />
                </button>
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}

export default ViewProduct
