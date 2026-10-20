import { ProductTypes } from "../Types/ProductTypes"

 export async function getAllProducts(): Promise<ProductTypes[]>{
  try {
      const response=await fetch('https://ecommerce.routemisr.com/api/v1/products')
      if(!response.ok)throw new Error('Api Error')
    const payload=await response.json()
    return payload.data
  } catch (error) {
    throw new Error('Api Error')
  }
}

//https://ecommerce.routemisr.com/api/v1/products/6428de2adc1175abc65ca05b
 export async function getSigleProduct(prodId:string): Promise<ProductTypes>{
  try {
      const response=await fetch(`https://ecommerce.routemisr.com/api/v1/products/${prodId}`)
      if(!response.ok)throw new Error('Api Error')
    const payload=await response.json()
    return payload.data
  } catch (error) {
    throw new Error('Api Error')
  }
}