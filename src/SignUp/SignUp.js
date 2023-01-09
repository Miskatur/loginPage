import React, { useState } from 'react';
import recruiterSidePic from '../assets/signup1.svg'
import companySidePic from '../assets/signup2.svg'
import vector from '../assets/Vector.svg'
import './SignUp.css'
import { FcGoogle } from "react-icons/fc";
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import { useForm } from 'react-hook-form';


const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [role, setRole] = useState('recruiter')

    const onSubmit = (data, event) => {
        event.preventDefault()
        const name = data.name;
        const email = data.email;
        const phone = data.phone;
        const password = data.password;
        const CompanyOwnerName = data.CompanyOwnerName;
        const companyname = data.companyName;
        const companyEmail = data.companyEmail;
        const CompanyPhone = data.CompanyPhone;
        const CompanyPassword = data.CompanyPassword;

        console.log(email, password, name, phone, CompanyPhone, CompanyPassword, CompanyOwnerName, companyname, companyEmail)
    };
    // console.log(role);
    return (
        <div className='h-screen'>
            <div className='grid xl:grid-cols-3 h-full relative '>
                {role === "recruiter" &&
                    <div className=' xl:items-center xs:hidden xl:flex rounded-2xl' style={{ background: "linear-gradient(303.3deg, #2068FF 0%, #444DA1 100%)" }}>
                        <img src={recruiterSidePic} alt="" className='absolute xl:left-16 ' />
                    </div>
                }
                {role === "company" &&
                    <div className=' xl:items-center xs:hidden xl:flex rounded-2xl' style={{ background: "linear-gradient(303.3deg, #2068FF 0%, #444DA1 100%)" }}>
                        <img src={companySidePic} alt="" className='absolute xl:left-16 ' />
                    </div>
                }
                <div className='xl:col-span-2 flex flex-col items-center justify-center'>
                    <div>
                        <h2 className='text-7xl xs:text-3xl font-semibold text-[#444444]'>Get Started With</h2>
                        <h1 className='xs:text-3xl lg:text-5xl font-semibold login-heading-text text-center'>Rework</h1>
                    </div>
                    <div className='mt-8 flex cursor-pointer xs:flex-col md:flex-row'>
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



                    <form className='w-full flex justify-center flex-col items-center' onSubmit={handleSubmit(onSubmit)}>
                        <div className='mt-3'>
                            <div className="flex xs:flex-col sm:flex-row overflow-hidden xs:m-2 sm:m-4 select-none">

                                <label className="flex p-2 xs:items-center sm:items-start cursor-pointer border border-1 border-[#2068FF] sm:rounded-full sm:mr-5 xs:mb-3 sm:mb-0">
                                    <input htmlFor="recruiter" className="my-auto transform scale-125"
                                        type="radio"
                                        name="role"
                                        value={"recruiter"}
                                        id='recruiter'
                                        defaultChecked
                                        onClick={() => { setRole('recruiter') }}
                                    />
                                    <span className="px-2">Recruiter Signup</span>
                                </label>

                                <label htmlFor="company" className="flex xs:items-center sm:items-start p-2 cursor-pointer border border-1 border-[#2068FF] sm:rounded-full">
                                    <input
                                        className="my-auto transform scale-125"
                                        type="radio"
                                        name="role"
                                        id='company'
                                        value={"company"}
                                        onClick={() => { setRole('company') }}
                                    />
                                    <span className="px-2">Company Signup</span>
                                </label>
                                {errors.rememberMe && <span>This field is required</span>}

                            </div>
                        </div>

                        {/* Sign Up as Recruiter  */}

                        {
                            role === "recruiter" &&
                            <div className='xs:w-3/4 lg:w-2/4'>
                                <div className='w-full'>
                                    <label htmlFor="email" className='flex flex-col w-full relative'>
                                        <span>Full Name</span>
                                        <input
                                            type="text"
                                            name="CompanyOwnerName"
                                            {...register("CompanyOwnerName", { required: true })}

                                            className='py-2 pr-2 pl-10  rounded-md border-2 mt-2 border-[#2068FF] w-full focus:bg-[#2067ff77] text-[#444444] focus:placeholder:text-[#444444]'
                                            placeholder='John Doe'
                                        />
                                        <AiOutlineMail className='absolute top-[43px] left-2 text-2xl' />
                                    </label>
                                    {errors.name && <span>Full Name is required</span>}
                                </div>

                                {/* Recruiter Email  */}

                                <div className='w-full mt-4'>
                                    <label htmlFor="password" className='flex flex-col w-full relative'>
                                        <span>Email*</span>
                                        <input type="email" name="password" {...register("email", { required: true })} className='py-2 pr-2 pl-10  rounded-md border-2 mt-2 border-[#2068FF] w-full focus:bg-[#2067ff77] text-[#444444] focus:placeholder:text-[#444444]' placeholder='email@web.com' />
                                        <AiOutlineLock className='absolute top-[43px] left-2 text-2xl' />
                                    </label>
                                    {errors.email && <span>Password is required</span>}

                                </div>

                                <div className='w-full mt-4'>
                                    <label htmlFor="password" className='flex flex-col w-full relative'>
                                        <span>Contact Number*</span>
                                        <input type="tel" name="phone" {...register("phone", { required: true })} className='py-2 pr-2 pl-10  rounded-md border-2 mt-2 border-[#2068FF] w-full focus:bg-[#2067ff77] text-[#444444] focus:placeholder:text-[#444444]' placeholder='909090909090' />
                                        <AiOutlineLock className='absolute top-[43px] left-2 text-2xl' />
                                    </label>
                                    {errors.phone && <span>Contact Number is required</span>}

                                </div>

                                <div className='w-full mt-4'>
                                    <label htmlFor="password" className='flex flex-col w-full relative'>
                                        <span>Password</span>
                                        <input type="password" name="password" {...register("password", { required: true })} className='py-2 pr-2 pl-10  rounded-md border-2 mt-2 border-[#2068FF] w-full focus:bg-[#2067ff77] text-[#444444] focus:placeholder:text-[#444444]' placeholder='Password@123' />
                                        <AiOutlineLock className='absolute top-[43px] left-2 text-2xl' />
                                    </label>
                                    {errors.password && <span>Password is required</span>}

                                </div>

                                <p className='text-center font-medium mt-2'>By signing up, you are agreeing to our <span className='text-blue-500 font-semibold'>Terms & Conditions</span> </p>
                            </div>
                        }

                        {/* Sign Up as Recruiter  */}

                        {
                            role === "company" &&
                            <div className='xs:w-3/4 lg:w-2/4 xs:mt-4 sm:mt-0'>
                                <div className='w-full'>
                                    <label htmlFor="email" className='flex flex-col w-full relative'>
                                        <span>Full Name</span>
                                        <input
                                            type="text"
                                            name="name"
                                            {...register("name", { required: true })}

                                            className='py-2 pr-2 pl-10  rounded-md border-2 mt-2 border-[#2068FF] w-full focus:bg-[#2067ff77] text-[#444444] focus:placeholder:text-[#444444]'
                                            placeholder='John Doe'
                                        />
                                        <AiOutlineMail className='absolute top-[43px] left-2 text-2xl' />
                                    </label>
                                    {errors.name && <span>Full Name is required</span>}
                                </div>

                                {/* Company name and Email  */}
                                <div className='w-full flex xs:flex-col sm:flex-row'>
                                    <div className='w-full mt-4 mr-4'>
                                        <label htmlFor="companyName" className='flex flex-col w-full relative'>
                                            <span>Company Name*</span>
                                            <input type="text" name="companyName" {...register("companyName", { required: true })} className='py-2 pr-2 pl-10  rounded-md border-2 mt-2 border-[#2068FF] w-full focus:bg-[#2067ff77] text-[#444444] focus:placeholder:text-[#444444]' placeholder='abc company' />
                                            <AiOutlineLock className='absolute top-[43px] left-2 text-2xl' />
                                        </label>
                                        {errors.companyName && <span>Company name is required</span>}

                                    </div>
                                    <div className='w-full mt-4'>
                                        <label htmlFor="companyEmail" className='flex flex-col w-full relative'>
                                            <span>Company Email*</span>
                                            <input type="email" name="companyEmail" {...register("companyEmail", { required: true })} className='py-2 pr-2 pl-10  rounded-md border-2 mt-2 border-[#2068FF] w-full focus:bg-[#2067ff77] text-[#444444] focus:placeholder:text-[#444444]' placeholder='email@web.com' />
                                            <AiOutlineLock className='absolute top-[43px] left-2 text-2xl' />
                                        </label>
                                        {errors.companyEmail && <span>Company email is required</span>}

                                    </div>
                                </div>

                                <div className='w-full mt-4'>
                                    <label htmlFor="password" className='flex flex-col w-full relative'>
                                        <span>Contact Number*</span>
                                        <input type="tel" name="CompanyPhone" {...register("CompanyPhone", { required: true })} className='py-2 pr-2 pl-10  rounded-md border-2 mt-2 border-[#2068FF] w-full focus:bg-[#2067ff77] text-[#444444] focus:placeholder:text-[#444444]' placeholder='909090909090' />
                                        <AiOutlineLock className='absolute top-[43px] left-2 text-2xl' />
                                    </label>
                                    {errors.CompanyPhone && <span>Contact Number is required</span>}

                                </div>

                                <div className='w-full mt-4'>
                                    <label htmlFor="CompanyPassword" className='flex flex-col w-full relative'>
                                        <span>Password</span>
                                        <input type="password" name="CompanyPassword" {...register("CompanyPassword", { required: true })} className='py-2 pr-2 pl-10  rounded-md border-2 mt-2 border-[#2068FF] w-full focus:bg-[#2067ff77] text-[#444444] focus:placeholder:text-[#444444]' placeholder='Password@123' />
                                        <AiOutlineLock className='absolute top-[43px] left-2 text-2xl' />
                                    </label>
                                    {errors.CompanyPassword && <span>Password is required</span>}

                                </div>

                                <p className='text-center font-medium mt-2'>By signing up, you are agreeing to our <span className='text-blue-500 font-semibold'>Terms & Conditions</span> </p>
                            </div>
                        }

                        <div className='mt-6'>
                            <button
                                className="text-white text-lg font-semibold ml-2 bg-[#2068FF] px-8 py-2 rounded-md"
                                type="submit"
                            >
                                Sign Up
                            </button>
                        </div>

                        <div className='mt-6'>
                            <h3 className='text-xl font-medium'>Already have an account?</h3>
                            <p className='text-blue-500 text-center font-semibold '>Sign In</p>
                        </div>
                    </form>


                </div>
            </div>
        </div>
    );
};

export default SignUp;