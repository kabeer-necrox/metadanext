
async function productlist(){
  let data = await fetch("https://dummyjson.com/products")
  data = await data.json()
  return data.products
}

export  default async function pages(){
  let product = await productlist()
  console.log(product)
  return (
    <div>
      <h1>this is the backend  check api list</h1>
      {
        product.map((item)=>{
          <div>
            <h3>name:{item.title}</h3>
          </div>
        })
      }
    </div>
  )
}
