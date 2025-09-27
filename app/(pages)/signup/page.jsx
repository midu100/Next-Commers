'use client'
import Link from "next/link";
import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Slide, toast } from "react-toastify";

const Page = () => {
    const [formData,setFormData] = useState({
  "email": "",
  "password": "",
  "role": "ADMIN",
  "username": ""
})
const [formError,setFormError]=useState('')

const url = 'https://api.freeapi.app/api/v1/users/register';
const options = {
  method: 'POST',
  headers: {accept: 'application/json', 'content-type': 'application/json'},
  body: JSON.stringify(formData)
};

const handleRegister = async (e)=>{
    e.preventDefault()

    if(!formData.email || !formData.password || !formData.username) return setFormError('All feild must be filled in')

    try {
      const response = await fetch(url, options);
      const data = await response.json();
       console.log(data);

       if(data.message == "Users registered successfully and verification email has been sent on your email."){
        toast.success('Registration Successful !', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Slide,
            });
       }

       if(data.message == "User with email or username already exists"){
        toast.warn('Your email or username already exists !', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Slide,
            });
       }

       if(data.message == "Received data is not valid"){
        toast.info('username must be lowercase !', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Slide,
            });
       }
    } 

    catch (error) {
      console.error(error);
    }

}

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#292828] via-[#000] to-[#292828] p-6 mb-6">
        <div className="w-full max-w-md bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 sm:p-8">
          <div className="text-center mb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Create your account</h1>
            <p className="mt-1 text-sm text-gray-600">Sign up to access your dashboard</p>
          </div>
            <p className="text-[13px] font-mono text-red-500 text-center">{formError}</p>
          <form className="space-y-4" onSubmit={handleRegister} aria-label="Register form">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Username</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400"><FaUser /></span>
                <input
                onChange={(e)=>{setFormData((prev)=>({...prev,username:e.target.value})),setFormError('')}}
                  id="name"
                  name="name"
                  type="text"
                  placeholder="midu"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400"><FaEnvelope /></span>
                <input
                  onChange={(e)=>{setFormData((prev)=>({...prev,email:e.target.value})),setFormError('')}}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
                />
              </div>
            </div>

            
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400"><FaLock /></span>
                  <input
                    onChange={(e)=>{setFormData((prev)=>({...prev,password:e.target.value})),setFormError('')}}
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
                  />
                </div>
              </div>

            

            <button type="submit" className="w-full py-2 rounded-lg bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400">
              Create account
            </button>

            <p className="text-center text-sm text-gray-600 mt-4">Already have an account? <Link href="#" className="text-indigo-600 font-medium">Sign in</Link></p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;