import React from 'react';
import sidepic from '../assets/Frame.svg'
import vector from '../assets/Vector.svg'
import './LoginPage.css'
import { FcGoogle } from "react-icons/fc";
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";

const LoginPage = () => {
    return (
        <div className='h-screen mb-5'>
            <div className='grid xl:grid-cols-3 h-full relative '>
                <div className=' xl:items-center xs:hidden xl:flex rounded-br-3xl' style={{ background: "linear-gradient(303.3deg, #2068FF 0%, #444DA1 100%)" }}>
                    <img src={sidepic} alt="" className='absolute xl:left-16 ' />
                </div>
                <div className='xl:col-span-2 flex flex-col items-center justify-center'>
                    <div>
                        <h1 className='xs:text-3xl lg:text-5xl font-bold login-heading-text text-center'>Welcome back!</h1>
                        <h4 className='text-center xs:text-md md:text-2xl login-subheading-text'>Login to access your dashboard</h4>
                    </div>
                    <div className='mt-11 flex cursor-pointer xs:flex-col md:flex-row'>
                        <div className='flex  items-center justify-center border border-1 py-2 px-3 rounded-full border-[#2068FF] w-full'>
                            <span>
                                <FcGoogle className='text-2xl mr-2' />
                            </span>
                            <h3 className='text-lg font-semibold text-[#444444]'>Sign in with Google</h3>
                        </div>
                        <div className='flex items-center justify-center border border-1 py-2 px-3 rounded-full border-[#2068FF] md:ml-5  cursor-pointer w-full xs:mt-2 md:mt-0'>
                            <span>
                                <img src={vector} alt="" className='w-6 mr-2' />
                            </span>
                            <h3 className='text-lg font-semibold text-[#444444]'>Sign in with Google</h3>
                        </div>
                    </div>
                    <div className="flex justify-center items-center xs:w-10/12 md:w-2/3 xl:w-5/12 mt-6">
                        <span className="border border-1 w-full bg-[#5D91FF]"></span>
                        <span className="px-3">OR</span>
                        <span className="border border-1 w-full bg-[#5D91FF]"></span>
                    </div>

                    <form action="" className='w-full flex justify-center flex-col items-center'>
                        <div className='mt-3'>
                            <div className="flex border border-1 border-[#2068FF] sm:rounded-full overflow-hidden xs:m-2 sm:m-4 select-none">
                                <div className="py-3 my-auto xs:px-3 sm:px-5 text-white text-sm font-semibold sm:mr-3 custom-radio-field">Login as</div>
                                <label className="flex p-2 xs:items-center sm:items-start cursor-pointer">
                                    <input className="my-auto transform scale-125" type="radio" name="recruiter" />
                                    <div className="px-2">Recruiter</div>
                                </label>

                                <label className="flex xs:items-center sm:items-start p-2 cursor-pointer">
                                    <input className="my-auto transform scale-125" type="radio" name="company" />
                                    <div className="px-2">Company</div>
                                </label>
                            </div>
                        </div>
                        <div className='xs:w-3/4 lg:w-2/4'>
                            <div className='w-full'>
                                <label className='flex flex-col w-full relative'>
                                    <span>Email</span>
                                    <input type="email" name="" id="" className='py-2 pr-2 pl-10  rounded-md border-2 mt-2 border-[#2068FF] w-full focus:bg-[#2067ff77] text-[#444444] focus:placeholder:text-[#444444]' placeholder='Enter Email' />
                                    <AiOutlineMail className='absolute top-[43px] left-2 text-2xl' />
                                </label>
                            </div>
                            <div className='w-full mt-4'>
                                <label className='flex flex-col w-full relative'>
                                    <span>Password</span>
                                    <input type="password" name="" id="" className='py-2 pr-2 pl-10  rounded-md border-2 mt-2 border-[#2068FF] w-full focus:bg-[#2067ff77] text-[#444444] focus:placeholder:text-[#444444]' placeholder='Enter Password' />
                                    <AiOutlineLock className='absolute top-[43px] left-2 text-2xl' />
                                </label>
                            </div>

                            <p className='text-right text-blue-500 font-semibold mt-2'>Forgot password?</p>
                        </div>

                        <div className='mt-6'>
                            <button
                                className="text-white text-lg font-semibold ml-2 bg-[#2068FF] px-8 py-2 rounded-md"
                                type="submit"
                            >
                                Login
                            </button>
                        </div>

                        <div className='mt-6'>
                            <h3 className='text-xl font-semibold'>Don't have a account?</h3>
                            <p className='text-blue-500 text-center font-semibold '>Create an account</p>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default LoginPage;