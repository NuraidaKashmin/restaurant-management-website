import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from 'react-hot-toast'

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state || '/'
    console.log(from)
    const { signIn, signInWithGoogle } = useContext(AuthContext)

    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle()

            toast.success('Signin Successful')
            navigate(from, { replace: true })
        } catch (err) {
            console.log(err)
            toast.error(err?.message)
        }
    }

  
    const handleSignIn = async e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const pass = form.password.value
        console.log({ email, pass })
        try {
            
            await signIn(email, pass)
            toast.success('Signin Successful')
            navigate(from, { replace: true })
        } catch (err) {
            console.log(err)
            toast.error(err?.message)
        }
    }

    return (
        <div className='flex justify-center items-center my-16'>
            <div className='flex w-full max-w-sm mx-auto bg-gray-300 rounded-lg shadow-lg  lg:max-w-2xl justify-center '>
                <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
                    <div
                        onClick={handleGoogleSignIn}
                        className='flex items-center justify-center mt-4 text-white rounded-lg bg-green-950'
                    >
                        <div className='font-bold px-2 py-3'>
                            <p>Google Login</p>
                        </div>
                    </div>
                    
                        <div className='text-lg text-center text-gray-950 mt-6'>
                            Login with email
                        </div>
                    
                    <form onSubmit={handleSignIn}>
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-base text-gray-700 '
                            >
                                Email
                            </label>
                            <input
                                name='email'
                                className='block w-full px-4 py-2 text-gray-700 bg-white rounded-lg'
                                type='email'
                            />
                        </div>

                        <div className='mt-4'>
                            <div className='flex justify-between'>
                                <label
                                    className='block mb-2 text-base text-gray-700'
                                    
                                >
                                    Password
                                </label>
                            </div>

                            <input
                                
                                
                                name='password'
                                className='block w-full px-4 py-2 text-gray-700 bg-white  rounded-lg    '
                                type='password'
                            />
                        </div>
                        <div className='mt-6'>
                            <button
                                type='submit'
                                className='w-full px-6 py-3 text-lg font-bold text-white bg-gray-600 rounded-lg '
                            >
                                Sign In
                            </button>
                        </div>
                    </form>

                        <div className='text-lg text-center text-black mt-6'>
                            <p>Click here to <Link to='/register' className="text-red-600 font-bold text-xl underline">Register</Link></p>
                        </div>

                    
                </div>
            </div>
        </div>
    )
};

export default Login;