import { Button, TextInput } from 'flowbite-react'
import {useApi } from '../context/ContextApi'


function DashProfilePaage() {
    const {userData}=useApi()
    
  return (
    <div className='max-w-lg mx-auto p-3 w-full'>
        <h1 className='my-7 text-center font-semibold text-3xl'>profile</h1>
        <form className='flex flex-col gap-4'>
            <div className='w-36   self-center cursor-pointer shadow-md overflow-hidden rounded-full'> 
            <img src={userData.profilePic} alt="profile"
            className='rounded-full w-full h-full object-cover  border-8 border-[lightgray]' /> 
            </div>
            <TextInput type='text' id='Username' defaultValue={userData.username} 
            />
            <TextInput type='email' id='email' defaultValue={userData.email} 
            />
            <TextInput type='password' id='password'  placeholder='password'
            />
<Button type='submit' className='self-center' gradientDuoTone='purpleToBlue'>Update</Button>

        </form>
        <div className=' text-red-500 flex justify-between mt-5'>
<span className='cursor-pointer'>Delete account</span>
<span className='cursor-pointer'>sign Out</span>

        </div>
    </div>
  )
}

export default DashProfilePaage