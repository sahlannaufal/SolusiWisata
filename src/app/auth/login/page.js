'use client'

import FormLogin from "@/component/login/FormLogin"
import Navbar from "@/component/navbar/Navbar"


export default function Login() {


    return (
        <>
        <Navbar/>
        <div className="flex flex-col items-center p-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-blue-800 font-bold mb-4">
          Welcome Back!
        </h2>
       <FormLogin/>
      </div>
        </>
    )
}