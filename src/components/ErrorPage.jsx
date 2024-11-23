import { BiError } from "react-icons/bi";


const ErrorPage = () => {
    return (
        <div className="flex min-h-screen flex-col gap-8 justify-center items-center">
            <h1 className="text-4xl font-bold text-red-700">OOPS! Something is wrong</h1>
            <BiError className="text-6xl font-bold text-red-700"></BiError>
        </div>
    );
};

export default ErrorPage;