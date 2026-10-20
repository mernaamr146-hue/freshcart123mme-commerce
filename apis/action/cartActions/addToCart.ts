'use server'

import { getTokenFun } from "@/utilities/getTokenData"
import { decode } from "next-auth/jwt"
import { cookies } from "next/headers"

export async function addToCart(prodId:string){


    //get token ,prodId in utilites
  const token =await getTokenFun()

  if(!token){
    throw new Error('Unauthotized')
  }
  try {
    
    const response=await fetch(`https://ecommerce.routemisr.com/api/v2/cart`,{
    method:'POST',
    body:JSON.stringify({
      productId:prodId
    }),
    headers:{
      token:token,
      'content-type':'application/json'
    }
  })
  if(!response.ok) throw new Error('Unauthotized')
    const payload =await response.json()
  console.log(payload);
  return payload
  } catch (error) {
    throw new Error('Unauthotized')
  }
}