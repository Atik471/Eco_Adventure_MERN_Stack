import { useState, useEffect } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from '../../firebase.config';
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const emailFromLogin = params.get('email');
    if (emailFromLogin) {
      setEmail(emailFromLogin); 
    }
  }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent! Check your inbox.");
      window.open(`https://mail.google.com/mail/u/0/#inbox`, "_blank");
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const goBackToLogin = () => {
    navigate('/login'); 
  };

  return (
    <div className="max-w-[34rem] md:mx-auto bg-yellow-100 text-center mx-3 my-[3rem]">
      <div className="w-full ">
        <div className="bg-primary py-[1rem] w-full">
            <h1 className="text-center text-2xl font-bold text-white">Forgot Password</h1>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col max-w-[80%] items-start mx-auto my-8 gap-4">
          <input
            className="bg-yellow-100 py-2 pl-2 border-b-2 border-primary w-full focus:outline-none"
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
          
          <button
            type="submit"
            className="text-lg bg-primary py-2 text-white rounded-lg shadow-md w-full hover:bg-[#5e8b26] font-bold mt-3 transition-all duration-300 "
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>
        <div className="text-center pb-8">
          <button
            onClick={goBackToLogin}
            className="text-primary font-bold hover:underline"
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
