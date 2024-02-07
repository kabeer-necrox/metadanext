"use client"
import { useEffect, useState } from 'react'

const page = () => {
    const [product,setProduct]=useState([])
useEffect(async () =>{
    let data = await fetch("https://dummyjson.com/products")
    data = await data.json()
    console.log(data)


},[])

  return (
    <div>
        <h1>product list</h1>
        { 
            product.map((item)=>{
                <h3>{item.title}</h3>
            })
        }
    </div>
  )
}

export default page