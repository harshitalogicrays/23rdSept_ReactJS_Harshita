    // const getData=()=>{
    //     fetch("https://fakestoreapi.com/products")
    //     .then((res)=>{
    //         return res.json().then((data)=>{
    //           console.log(data)
    //         })
    //     })
    //     .catch((err)=>{console.log(err)})
    // }

  export const getData = async()=>{
        try{
          let res  = await fetch("https://fakestoreapi.com/products")
          let data  = await res.json()
        //   console.log(data)
          return data //Promise.resolve(data)
        }
        catch(err){
          console.log(err)
        }
      }

    async function fun(){
        return "hello" 
    }