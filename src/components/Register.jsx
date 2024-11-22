import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { BiHide, BiShow } from "react-icons/bi";
import { Link } from "react-router-dom";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null)
    const { setUser, createWithEmail, createWithGoogle} = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const displayName = e.target.name.value
        const photoURL = e.target.photourl.value
        createWithEmail(email, password, displayName, photoURL)
        .then((userCredential) => {
            setUser(userCredential.user)
            setError(null)
            console.log(error)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(error.message)
            console.log(errorCode, errorMessage)
          });
        e.target.reset()
    }

    const handleRegisterWithGoogle = () => {
        createWithGoogle()
        .then((result) => {
            setUser(result.user)
            
          }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console(errorCode, errorMessage)
          });
    }

    return (
        <div>
          <div className="max-w-[30rem] md:mx-auto bg-yellow-100 text-center mx-3">
            <div className="bg-primary py-[1rem]">
                <h1 className="text-center text-2xl font-bold text-white">Register</h1>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col max-w-[80%] items-start mx-auto my-8 gap-4">
                <input className="bg-yellow-100 py-2 pl-2 border-b-2 border-primary w-full focus:outline-none" type="text" name="name" placeholder="Name"/>
                <input className="bg-yellow-100 py-2 pl-2 border-b-2 border-primary w-full focus:outline-none" type="text" name="photourl" placeholder="Photo URL"/>
                <input className="bg-yellow-100 py-2 pl-2 border-b-2 border-primary w-full focus:outline-none" type="email" placeholder="Email" name="Email"/>
                <div className="flex relative w-full">
                  <input className="bg-yellow-100 py-2 pl-2 border-b-2 border-primary w-full focus:outline-none" type={`${showPassword ? 'text' : 'password'}`} placeholder="Password" name="password"/>
                  {
                  showPassword ? <BiHide className="text-xl text-green-800 absolute right-3 bottom-3 hover:cursor-pointer" onClick={() => {setShowPassword(!showPassword)}}></BiHide> :
                                 <BiShow className="text-xl text-green-800 absolute right-3 bottom-3 hover:cursor-pointer" onClick={() => {setShowPassword(!showPassword)}}></BiShow>
                  }  
                </div>
                <input type="submit" value="Register" className="text-lg bg-primary py-2 text-white rounded-lg shadow-md w-full hover:bg-[#5e8b26] font-bold mt-3 transition-all duration-300 cursor-pointer"/>
            </form>
            <div className="flex items-center my-3 max-w-[80%] mx-auto">
                  <hr className="flex-grow border-primary" />
                  <span className="px-4 text-gray-500">or</span>
                  <hr className="flex-grow border-primary" />
            </div>
            <button onClick={handleRegisterWithGoogle} className="text-lg bg-primary py-2 text-white rounded-lg shadow-md w-full hover:bg-[#5e8b26] font-bold mt-3 transition-all duration-300 max-w-[80%] mb-6">Register with google</button>
            <p className="pb-8 text-sm font-semibold">Dont&apos;t Have an Account? <Link to={'/login'} className="text-primary ml-1 border-b-2 border-primary/50 hover:border-primary">Login</Link></p>
          </div>
        </div>
    );
};

export default Register;