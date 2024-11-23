import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from '../../firebase.config';
import { toast } from "react-toastify";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await sendPasswordResetEmail(auth, e.target.email.value);
      toast.success("Password reset email sent! Check your inbox.");
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-[34rem] md:mx-auto bg-yellow-100 text-center mx-3 my-[3rem]">
      <div className="w-full ">
        <div className="bg-primary py-[1rem] w-full">
            <h1 className="text-center text-2xl font-bold text-white">Forgot Password</h1>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col max-w-[80%] items-start mx-auto my-8 gap-4">
            <input className="bg-yellow-100 py-2 pl-2 border-b-2 border-primary w-full focus:outline-none" type="email" placeholder="Email" name="email"/>

          <button
            type="submit"
            className="text-lg bg-primary py-2 text-white rounded-lg shadow-md w-full hover:bg-[#5e8b26] font-bold mt-3 transition-all duration-300 mb-12"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
