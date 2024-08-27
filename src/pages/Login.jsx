import React from 'react'
import { Link } from 'react-router-dom'
import "../../scss/custom.css";
import CInput from "../components/CInput"
import CButton from "../components/CButton"

const Login = () => {
  return (
    <div className='dotted bg-dark vh-100 vw-100 d-flex text-center justify-content-center'>
        <div className='bg-primary h-75 w-50 rounded border border-secondary mt-5'>
            <h1 className='mt-5 text-center'>Log in</h1>
            <h4 className='mx-5 mt-5 mb-3'>Email</h4>
            <CInput className='mx-5' placeholder='Email'/>
            <h4 className='mx-5 mt-3 mb-3'>Password</h4>
            <CInput className='mx-5' placeholder='Password' type='password'/>
            <CButton color='secondary' className='text-white mt-3 font-weight-bold'>Log in</CButton><br/>
            <Link className='font-weight-bold' to='/'>Don't Have an account? Sign Up</Link>
        </div>
    </div>
  )
}

export default Login