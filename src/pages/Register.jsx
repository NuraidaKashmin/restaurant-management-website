import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
    const navigate = useNavigate()
    const { signInWithGoogle, createUser, updateUserProfile, setUser } = useContext(AuthContext)

    const handleSignUp = async e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const name = form.name.value
        const photo = form.photo.value
        const pass = form.password.value

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (!passwordRegex.test(pass)) {
            toast.error("Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long.");
            return;
        }



        try {
            const result = await createUser(email, pass)
            await updateUserProfile(name, photo)
            setUser({ ...result.user, photoURL: photo, displayName: name })
            toast.success('Signup Successful')
            navigate('/')
        } catch (err) {
            console.log(err)
            toast.error(err?.message)
        }
    }


    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle()
            toast.success('Signin Successful')
            navigate('/')
        } catch (err) {
            console.log(err)
            toast.error(err?.message)
        }
    }
    return (
        <div className='flex justify-center items-center my-16'>
            <div className='flex w-full max-w-sm mx-auto bg-gray-300 rounded-lg shadow-lg  lg:max-w-2xl justify-center'>
                <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
                    <div
                        onClick={handleGoogleSignIn}
                        className='cursor-pointer flex items-center justify-center mt-4 text-white rounded-lg bg-green-950'>
                        <div className='font-bold px-2 py-3'>
                            <p>Google SignUp</p>
                        </div>
                    </div>

                    <div className='text-lg text-center text-gray-950 mt-6'>
                        Register with Email
                    </div>
                    <form onSubmit={handleSignUp}>
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-sm font-medium text-gray-700 '
                                htmlFor='name'
                            >
                                Name
                            </label>
                            <input
                                id='name'
                                autoComplete='name'
                                name='name'
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg'
                                type='text'
                            />
                        </div>
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-sm font-medium text-gray-700 '
                                htmlFor='photo'
                            >
                                Photo URL
                            </label>
                            <input
                                id='photo'
                                autoComplete='photo'
                                name='photo'
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg'
                                type='text'
                            />
                        </div>
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='LoggingEmailAddress'
                            >
                                Email
                            </label>
                            <input
                                id='LoggingEmailAddress'
                                autoComplete='email'
                                name='email'
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg'
                                type='email'
                            />
                        </div>

                        <div className='mt-4'>
                            <div className='flex justify-between'>
                                <label
                                    className='block mb-2 text-sm font-medium text-gray-700 '
                                    htmlFor='loggingPassword'
                                >
                                    Password
                                </label>
                            </div>

                            <input
                                id='loggingPassword'
                                autoComplete='current-password'
                                name='password'
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg'
                                type='password'
                            />
                        </div>
                        <div className='mt-6'>
                            <button
                                type='submit'
                                className='w-full px-6 py-3 text-lg font-bold text-white bg-gray-600 rounded-lg'
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>

                    <div className='text-lg text-center text-black mt-6'>
                        <p>Click here to <Link to='/login' className="text-red-600 font-bold text-xl underline">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;