import { TextInput ,Button} from 'flowbite-react';

import{useState} from 'react';
import { Link } from 'react-router-dom';
import { showSuccessToast, showErrorToast } from '../ReactToasty';
import { ToastContainer } from 'react-toastify';
import Autho from './Autho';
import { useApi } from "../context/ContextApi"; 

export default function Signup() {
  const { apiRequest } = useApi(); 
  const [formData, setFormData] = useState({username: '', email: '', password: '' })
   const handleChange=(e)=>{
    setFormData((prev)=>({...prev,[e.target.name]:e.target.value}))

   }
   const handleSubmit=async(e)=>{
     e.preventDefault()
     console.log(formData);
      try{
        const response=await apiRequest("/login", "POST", formData);
        console.log(response)
        showSuccessToast('User created successfully!');
        setFormData({ username: '', email: '', password: '' });

      }catch(err){
        console.log(err.response.data);
        showErrorToast(err.response.data.message || 'Something went wrong');
        setFormData({ username: '', email: '', password: '' });

      }

   }
  return (
    <div className='min-h-screen mt-20' >
      <div className="flex gap-4  max-w-3xl md:items-center mx-auto  flex-col md:flex-row ">
<div  className=' flex-1 '>
<Link to='/' className='  font-semibold sm:text-4xl text-3xl'>
                    <span className='px-2 py-1 bg-gradient-to-r from-teal-400 to-blue-500 text-dark rounded-md'>Sai&#39;s</span>Blog
      </Link>
      <p className='text-sm mt-5'>
            You can sign up with your email and password
            or with Google.
          </p>
</div>
<div  className=' flex-1 '>
  <form  className='flex flex-col gap-4' onSubmit={handleSubmit} >
  <h2 className="text-2xl font-bold text-center">Sign Up</h2>
    <div >
      <label htmlFor="username">Username</label>
      <TextInput type="text"  placeholder="Your Name"name="username" id="username" onChange={handleChange}  value={formData.username}/>
    </div>
    <div>
      <label htmlFor="email">Email</label>
      <TextInput type="email" name="email" id="email" placeholder='email@.com' onChange={handleChange} value={formData.email} />
    </div>
    <div>
      <label htmlFor="password">Password</label>
      <TextInput type="password" name="password" id="password" placeholder='******' onChange={handleChange} value={formData.password}/>
    </div>
    
    <Button className="bg-gradient-to-r from-teal-400 to-blue-500 text-white" type='submit' >
  Sign Up
</Button>

<Autho/>
  </form>
  <div className='text-md pt-5 '>
    <span>Have a account ? </span>
    <Link to='/signin' className='text-blue-500 font-bold'>Sign In</Link>
  </div>
  <ToastContainer />
</div>
      </div>
    </div>
  )
}
