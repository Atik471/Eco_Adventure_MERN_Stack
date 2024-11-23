import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Login = () => {
   const [loading, setLoading] = useState(false);
   const [showPassword, setShowPassword] = useState(false);
   const navigate = useNavigate()
    const {signInWithEmail, setUser, createWithGoogle} = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true);
        const email = e.target.email.value
        const password = e.target.password.value
        signInWithEmail(email, password)
        .then((userCredential) => {
            setUser(userCredential.user)
            navigate("/")
            toast.success(`Login successful! Welcome back!`, {
              position: "top-center",
              autoClose: 3000, 
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              theme: "colored",
            });
          })
          .catch((error) => {
            const errorMessage = error.message;
            toast.error(`Login failed: ${errorMessage.split('/')[1].slice(0, -2)}`, {
              position: "top-center",
              autoClose: 3000, 
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              theme: "colored",
            })
          })
          .finally(() => {
            setLoading(false); 
          });
        e.target.reset()
    }

    const handleLoginWithGoogle = () => {
        createWithGoogle()
        .then((result) => {
            setUser(result.user)
            navigate("/")
            toast.success(`Login successful! Welcome back!`, {
              position: "top-center",
              autoClose: 3000, 
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              theme: "colored",
            });
          }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console(errorCode, errorMessage)
            toast.error(`Login failed: ${errorMessage}`, {
              position: "top-center",
              autoClose: 3000, 
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              theme: "colored",
            });
          });
    }

    if(loading)
      return (
        <h1 className="text-3xl text-center mx-auto my-[5rem]">Logging In..</h1>
    )
    return (
        <div>
            <div className="max-w-[30rem] md:mx-auto bg-yellow-100 text-center mx-3">
              <div className="bg-primary py-[1rem]">
                <h1 className="text-center text-2xl font-bold text-white">Login</h1>
              </div>
            <form onSubmit={handleSubmit} className="flex flex-col max-w-[80%] items-start mx-auto my-8 gap-4">
               <input className="bg-yellow-100 py-2 pl-2 border-b-2 border-primary w-full focus:outline-none" type="email" placeholder="Email" name="email"/>
               <div className="flex relative w-full">
               <input className="bg-yellow-100 py-2 pl-2 border-b-2 border-primary w-full focus:outline-none" type={`${showPassword ? 'text' : 'password'}`} placeholder="Password" name="password"/>
               {
                showPassword ? <BiHide className="text-xl text-green-800 absolute right-3 bottom-3 hover:cursor-pointer" onClick={() => {setShowPassword(!showPassword)}}></BiHide> :
                               <BiShow className="text-xl text-green-800 absolute right-3 bottom-3 hover:cursor-pointer" onClick={() => {setShowPassword(!showPassword)}}></BiShow>
               }
               </div>
                <input type="submit" value="Login" className="text-lg bg-primary py-2 text-white rounded-lg shadow-md w-full hover:bg-[#5e8b26] font-bold mt-3 transition-all duration-300 cursor-pointer"/>
            </form>
            <div className="flex items-center my-3 max-w-[80%] mx-auto">
                <hr className="flex-grow border-primary" />
                <span className="px-4 text-gray-500">or</span>
                <hr className="flex-grow border-primary" />
            </div>
            <button onClick={handleLoginWithGoogle} className="text-lg bg-primary py-2 text-white rounded-lg shadow-md w-full hover:bg-[#5e8b26] font-bold mt-3 transition-all duration-300 max-w-[80%] mb-6">Login with Google</button>
            <p className="pb-8 text-sm font-semibold">Dont&apos;t Have an Account? <Link to={'/register'} className="text-primary ml-1 border-b-2 border-primary/50 hover:border-primary">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;