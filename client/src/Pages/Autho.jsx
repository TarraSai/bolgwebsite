// google authentication
import {Button} from 'flowbite-react'
import { AiFillGoogleCircle } from "react-icons/ai";
import axios from 'axios'
import {GoogleAuthProvider,signInWithPopup,getAuth} from 'firebase/auth'
import {app} from '../firebase'
import { showSuccessToast } from '../ReactToasty';
function Autho() {
    const auth=getAuth(app)
    const handlegoogle= async()=>{
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({prompt:'select_account'})
        try{
            const response=await signInWithPopup(auth,provider)
            const userdata=await axios.post('http://localhost:3000/blog/api/googleAuth',response.user)

            localStorage.setItem('token',userdata.data.token)
            showSuccessToast('User log-in successfully!');


        }catch(error){
            console.log(error)
        }
    }
  return (
    
        <Button type='button' onClick={handlegoogle} className='bg-gradient-to-r from-orange-400 to-pink-500 text-white ' outline><span ><AiFillGoogleCircle className='w-6 h-6 mx-2 '/></span>continue with Google</Button>
    
  )
}

export default Autho