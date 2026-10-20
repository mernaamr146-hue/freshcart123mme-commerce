'use client'

import { Button } from '@/components/ui/button'
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { toast } from "@/components/ui/toast"
import { useRouter } from "next/navigation"
import { payOnline } from '@/apis/action/payment/payOnline.action'



export default function CheckoutOnlineForm({cartId}:{cartId:string}) {
    const router =useRouter()
  

   const{handleSubmit,control}= useForm<shippingData>({
defaultValues:{

     details: '',
    phone:'',
    city: '',
    postalCode: ''
}

    })

    async function submitForm(data:shippingData){
      const payload=await  payOnline(cartId,data)
      console.log(payload,'lllll')
//      const isLogin=await ('credentials',{...data,redirect:false}) //the way you login 
// //       const isLogin =await userLogin(data)
  if (payload.status=='success'){
toast.add({
            type: "success",
            description: "order created successfully",
          })
                    window.location.href=payload.session.url
          

  }
  else{
    toast.add({
            type: "error",
            description: "something went wrong..",
          })
  }
      

   
  }
  return (
    <div className='w-1/2 mx-auto my-10 py-10'>
      
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">CheckOut</h2>

     <form onSubmit={handleSubmit(submitForm)}>
              <div className='flex flex-col gap-8'>


               

 <Controller
  name="details"
  control={control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>details</FieldLabel>
      <Input
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="details"
        autoComplete="on"
      />
     
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>


<Controller
  name="phone"
  control={control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>phone</FieldLabel>
      <Input
      type='text'
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="Enter Your phone"
        autoComplete="on"
      />
     
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>

<Controller
  name="city"
  control={control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>city</FieldLabel>
      <Input
      type='text'
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="Enter Your city"
        autoComplete="on"
      />
     
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>
<Controller
  name="postalCode"
  control={control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>postalCode</FieldLabel>
      <Input
      type='text'
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="Enter Your postalCode"
        autoComplete="on"
      />
     
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>


              </div>
              <Button type='submit' className='w-full bg-green-600 my-4'>Order Now</Button>

            </form>
    
    
    </div>
  )
}
export interface shippingData{
 details: string,
    phone:string,
    city: string,
    postalCode: string

}