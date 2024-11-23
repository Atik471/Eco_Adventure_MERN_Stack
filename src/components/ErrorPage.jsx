import { BiError } from "react-icons/bi";
import { useNavigate } from "react-router-dom";


const ErrorPage = () => {
    const navigate = useNavigate();

    const goBack = () => {
      navigate(-1); // Navigate to the previous page
    };
    return (
        <div className="flex min-h-screen flex-col md:gap-8 gap-4 justify-center items-center text-center mx-4">
            <h1 className="text-4xl font-bold text-red-700">OOPS! Something is wrong</h1>
            <BiError className="text-6xl font-bold text-red-700"></BiError>
            <button onClick={goBack} className="px-4 py-2 font-bold md:text-lg bg-primary hover:bg-[#507720] transition-all duration-300 text-white rounded-lg">Go Back</button>
        </div>
    );
};

export default ErrorPage;