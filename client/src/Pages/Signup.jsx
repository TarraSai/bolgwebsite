import { TextInput ,Button} from 'flowbite-react';
import { Link } from 'react-router-dom';
export default function Signup() {
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
  <form  className='flex flex-col gap-4'>
    <div >
      <label htmlFor="username">Username</label>
      <TextInput type="text"  placeholder="Your Name"name="username" id="username" />
    </div>
    <div>
      <label htmlFor="email">Email</label>
      <TextInput type="email" name="email" id="email" placeholder='email@.com' />
    </div>
    <div>
      <label htmlFor="password">Password</label>
      <TextInput type="password" name="password" id="password" placeholder='******' />
    </div>
    
    <Button className="bg-gradient-to-r from-teal-400 to-blue-500 text-white">
  Sign Up
</Button>


  </form>
  <div className='text-md pt-5'>
    <span>Have a account ?</span>
    <Link to='/signin' className='text-blue-400'>Sign In</Link>
  </div>
</div>
      </div>
    </div>
  )
}
