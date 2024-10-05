import React from 'react'

const ListRendering = () => {
    let funlinks = ['first','props','state','counter','form','form']
    let data = [{id:1,name:'eer'},{id:2,name:'srw'},{id:3,name:'erer'},{id:4,name:'erer'},{id:5,name:'ere'}]
  return (
   <>
    {/* {funlinks.map((links,i)=><h1 key={i}>{links}</h1>)} */}

    {/* {data.map((item,index)=><h1>{JSON.stringify(item)}</h1>)} */}

    {data.map((item)=><h1 key={item.id}>{item.name}</h1>)}
   </>
  )
}

export default ListRendering
