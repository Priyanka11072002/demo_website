import React from 'react'
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import './signup.css'
import {useState} from 'react';
import * as Yup from 'yup';
import { signupSchemas } from '../validation/signupSchemas';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from "../firebase_auth/firebase";
import { useNavigate } from "react-router-dom";
import LogOut from './logout';
import Todo from '../store/todoComponent';

const Signup = () => {
  const [isSubmit,setIsSubmit] = useState(false)
  const [termsChecked, setTermsChecked] = useState(false);
  const [error,setError] = useState('')
  console.log(error,'error')
  const navigate = useNavigate()
  const initialValues = {
    first_name:'',
    last_name:'',
    email:'',
    password:'',
    confirm_password:''
  }
  const {values,errors,handleChange,handleBlur,handleSubmit,handleReset,touched} = useFormik({
  initialValues :initialValues,
  validationSchema:signupSchemas,
  onSubmit:(values)=>{
  createUserWithEmailAndPassword(
    auth,
    values.email,
    values.password,
    values.confirm_password
  )
    .then((userCredential) => {
      const user = userCredential.user;
      navigate("/todo")

    })
    .catch((error) => {
      const errorCode = error.code;
     setError( errorCode)
      const errorMessage = error.message;
    });


  
   
  }
 })
 
 
 return (
    <>
    {/* <Link to='/'>back to homepage</Link> */}
<div className='main-container-signup'>
<div className={`signup-form ${isSubmit?'signup-form1':null}`}>
<form onSubmit={handleSubmit}>
<h2>Sign Up</h2>
<p>Please fill in this form to create an account!</p>

<div className="form-group">
<div className="col"><input type="text" className="form-control  form-control-signup" name="first_name" placeholder="First Name" 
onChange={handleChange}  onBlur={handleBlur} value={values.first_name}/></div>
{touched.first_name&&errors.first_name?(<span className='error ' onClick={()=>setIsSubmit(true)}>{errors.first_name}</span>):null}
</div>

<div className="form-group">
<div className="col"><input type="text" className="form-control  form-control-signup " name="last_name" placeholder="Last Name" 
onChange={handleChange} onBlur={handleBlur}
value={values.last_name}/></div>
{touched.last_name&&errors.last_name?(<span className='error ' onClick={()=>setIsSubmit(true)}>{errors.last_name}</span>):null}

</div>


<div className="form-group">
<input type="email" className="form-control  form-control-signup" name="email" placeholder="Email"  onChange={handleChange} onBlur={handleBlur}  value={values.email}/>
{touched.email&&errors.email?(<span className='error ' onClick={()=>setIsSubmit(true)}>{errors.email}</span>):null}
</div>
<div className="form-group">
<input type="password" className="form-control  form-control-signup" name="password" placeholder="Password" onChange={handleChange} onBlur={handleBlur} value={values.password}/>
{touched.password&&errors.password?(<span className='error ' onClick={()=>setIsSubmit(true)}>{errors.password}</span>):null}
</div>
<div className="form-group">
<input type="password" className="form-control  form-control-signup" name="confirm_password" placeholder="Confirm Password" onChange={handleChange} onBlur={handleBlur} value={values.confirm_password}/>
{touched.confirm_password&&errors.confirm_password?(<span className='error ' onClick={()=>setIsSubmit(true)}>{errors.confirm_password}</span>):null}

</div>
<div className="form-group">
<label className="form-check-label"><input type="checkbox" checked={termsChecked}  onChange={() => setTermsChecked(!termsChecked)}/> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
{!termsChecked&&isSubmit?( <span className="error">Please accept the terms and conditions.</span>
):null}
</div>
{error?<span className='error'>${error}</span>:null}

<div className="form-group">
<button type="submit" className="btn btn-primary btn-lg" onClick={() => setIsSubmit(true)}>Sign Up</button>
</div>
</form>
<div className="hint-text">Already have an account? <Link to="/login" style={{textDecoration:'underline',color:'white'}}>Login here</Link></div>
</div> 
</div>




   
    </>
  )
}

export default Signup;