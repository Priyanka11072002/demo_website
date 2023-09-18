  import * as Yup from 'yup';
   
  export const signupSchemas = Yup.object({
    first_name:Yup.string().min(3).max(25).required("please enter your  firstName"),
    last_name:Yup.string().min(3).max(15).required("please enter your  lastName"),
    email:Yup.string().email('Email is invalid').required('please enter   your  valid email'),
    password:Yup.string().min(8).max(24).required('please enter your  password'),
    confirm_password:Yup.string().required().oneOf([Yup.ref('password'),null],"Password must match")

  }) 