import React, { useContext, useState } from 'react';
import { GoogleAuthProvider } from 'firebase/auth';
import { FaFacebook,FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';
import { AuthToken } from '../../api/user';
import { useLocation, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [seller, setSeller] = useState('user')
    // const [images,setImages] = useState(null)
    const {SignUpEmail,updateUser,handleGoogleLogin,setLoading} = useContext(AuthContext)
    const GoogleProvider = new GoogleAuthProvider()
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";
    const handleSignUp = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const location = form.location.value;
        const image = form.image.files[0]; 
        const data = new FormData()
        data.append('image', image)
        fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbd_key}`,{
            method:'POST',
            body:data
        })
        .then(res=> res.json())
        .then(data =>{
            if(data.success){
            //    setImages(data.data.url)
               const user = {
                name: name,
                email,
                location: location,
                role: seller,
                image:data.data.url,
                verified:false,
            }
            
             //signup
        SignUpEmail(email,password)
        .then(result =>{
            const userEmail = result.user.email
            // update name
            updateUser(name,data.data.url)
            .then(() => {
                AuthToken(userEmail,user)
                toast.success('Login successfully')
                setLoading(false)
                navigate(from, { replace: true });
         })

        }).catch(error =>{
            console.log(error)
            const message = error.message;
            return toast.error(message)
        })
           }  
        }).catch(err => console.log(err))

    }
    // gmail
    const handleGoogleSignIn = () =>{
        handleGoogleLogin(GoogleProvider)
        .then((result) => {
            const user = result.user;
            const userDetails = {
                name: user.displayName,
                email:user.email,
                role: seller,
                image:user.photoURL,
                verified:false,
            }
            console.log(userDetails)
            AuthToken(user.email,userDetails)
            toast.success('Login successfully')
            setLoading(false)
            navigate(from, { replace: true });
          }).catch((error) => {
            const errorMessage = error.message;
            toast.error(errorMessage)
          });
    }
    return (
        <div className='min-h-[50vh] mb-[1%]'>
            <div className=' w-96 border mx-auto h-[600px] mt-[1%] p-5'>
                <h2 className='text-center text-2xl font-bold mb-5'>Sign Up</h2>
                <form onSubmit={handleSignUp} className='flex flex-col'>
                    <input className='border p-3  rounded-lg' type="text" name="name" placeholder='Enter Your Name' id="" required/>
                    <input className='border p-3 my-5 rounded-lg' type="email" name="email" placeholder='Enter Your Email' id="" required/>
                    <div className='flex gap-4 pb-3'>
                        <p className='text-2xl flex items-center gap-2 font-bold'>User: <span className='pt-2'><input onClick={()=> setSeller('user')} type="radio" name="radio-1" className="radio" checked /></span></p>
                        <p className='text-2xl flex items-center gap-2 font-bold'>Seller: <span className='pt-2'> <input onClick={()=> setSeller('seller')}  type="radio" name="radio-1" className="radio" /></span></p>
                    </div>
                    <input className='border p-3 rounded-lg my-5' type="text" name="location" placeholder='Enter Your location' id="" required/>
                    <input className='border p-3 rounded-lg' type="password" name="password" placeholder='Enter Your Password' id="" required/>
                    <input type="file" id="image" className="file-input w-full max-w-xs my-5" />
                    <input className='border p-3 btn' type="submit" value="Register" />
                </form>
                <div className='flex justify-center mt-5 gap-5 text-3xl text-[#f75353]'>
                    <button onClick={handleGoogleSignIn}  className='cursor-pointer'><FaGoogle /></button>
                    <button className='cursor-pointer'><FaFacebook /></button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;