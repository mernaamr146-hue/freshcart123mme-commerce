import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { jwtDecode } from "jwt-decode";

export const authOption:NextAuthOptions={

    providers:[

        Credentials({
            name:'myLogin',
            credentials:{
                email:{label:'Email',type:'email',placeholder:'Enter Your Email'},
                                password:{label:'Password',type:'password',placeholder:'Enter Your Password'},

            },
           async authorize(Credentials){
             const response = await fetch(`${process.env.API}auth/signin`,{
        method:'POST',
        body: JSON.stringify({
            email:Credentials?.email,
                        password:Credentials?.password,

        }),
        headers:{
           "Content-Type": "application/json"
        }
      })

      if(!response.ok){
        throw new Error(response.statusText)
      }
      const payload =await response.json()

      const userData:{id:string}=jwtDecode(payload.token)
console.log('payload...',payload)
      
return {
    id:userData.id, //in order to have the id you have to decode the token 
    email:payload.user.email,
    name:payload.user.name,
    token:payload.token
}
            }
        })
    ],

    callbacks:{

jwt({token , user}){
if(user){
    token.id=user.id
    token.token=user.token //access token
}


          return token
},

session({session, token}){

    if(token){

            session.user.id = token.id


    }
    return session
}
    },
    pages:{
        signIn:'/login'
    }
}