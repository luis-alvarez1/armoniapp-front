import React from 'react'
import { Link } from 'react-router-dom'
import "../../scss/custom.css";
import CInput from "../components/CInput"
import CButton from "../components/CButton"

const SignUp = () => {
  return (
    <div className='dotted vh-100 vw-100 d-flex text-center justify-content-center'>
        <div className='bg-primary h-75 w-50 custom-bg rounded border border-secondary mt-5'>
            <h1 className='mt-3 text-center'>Sign Up</h1>
            <h5 className='mx-5 mt-4 mb-1'>Name</h5>
            <CInput size='sm' className='mx-5' placeholder='Name'/>
            <h5 className='mx-5 mt-2 mb-1'>Last Name</h5>
            <CInput size='sm' className='mx-5' placeholder='Last Name'/>
            <h5 className='mx-5 mt-2 mb-1'>Email</h5>
            <CInput size='sm' className='mx-5' placeholder='Email'/>
            <h5 className='mx-5 mt-2 mb-1'>Password</h5>
            <CInput size='sm' className='mx-5' placeholder='Password' type='password'/>
            <CButton color='secondary' className='text-white mt-3 font-weight-bold'>Sign Up</CButton><br/>
            <Link className='font-weight-bold' to='/login'>Already have an account? Log in</Link>
        </div>
    </div>
  )
}

export default SignUp