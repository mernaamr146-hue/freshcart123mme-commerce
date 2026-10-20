import React from 'react'
import CheckoutForm from '../CheckoutForm'
type props={
  params:{

    cartId:string
  }
}

export default async function page(props:props) {
  const params=await props.params
  const{cartId}=params
  console.log(params)
  return (
<>
<CheckoutForm cartId={cartId} />

</>    
  )
}
