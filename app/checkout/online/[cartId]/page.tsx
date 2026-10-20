import React from 'react'
import CheckoutOnlineForm from '../../CheckoutOnlineForm'
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
<CheckoutOnlineForm cartId={cartId} />

</>    
  )
}
