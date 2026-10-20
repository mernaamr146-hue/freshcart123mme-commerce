import { Category, Subcategory } from "../Types/ProductTypes"

export async function getShopCategories(): Promise<Category[]>{

     try {
      const response=await fetch(`https://ecommerce.routemisr.com/api/v1/categories`)
      if(!response.ok)throw new Error('Api Error')
    const payload=await response.json()
    return payload.data
  } catch (error) {
    throw new Error('Api Error')
  }
}


export async function getSubCategories(): Promise<Subcategory[]>{

     try {
      const response=await fetch(`https://ecommerce.routemisr.com/api/v1/subcategories`)
      if(!response.ok)throw new Error('Api Error')
    const payload=await response.json()
    return payload.data
  } catch (error) {
    throw new Error('Api Error')
  }
}


export async function getSpeSub(catId:string): Promise<Subcategory[]>{

     try {
      const response=await fetch(`https://ecommerce.routemisr.com/api/v1/subcategories/${catId}`)
      if(!response.ok)throw new Error('Api Error')
    const payload=await response.json()
    return payload.data
  } catch (error) {
    throw new Error('Api Error')
  }
}