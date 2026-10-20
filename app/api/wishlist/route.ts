import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest){
   const token= await getToken({req:req})
   if(!token) return NextResponse.json({message:'unauthrized',status:401})
       const response=await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`,{
    
    headers:{
      token:token.token,
      'content-type':'application/json'
    }
  })
  if(!response.ok) throw new Error('Unauthotized')
    const payload =await response.json()
  console.log(payload);
  return NextResponse.json(payload)
}