import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";


const Login = () => {
    const {signInWithEmail, setUser, createWithGoogle} = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        signInWithEmail(email, password)
        .then((userCredential) => {
            setUser(userCredential.user)
          })
          .catch((error) => {
            console.error("Error during sign in:", error.message);
          });
        e.target.reset()
    }

    const handleLoginWithGoogle = () => {
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
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email: </label>
                <input type="email" placeholder="youremail@emai.com" name="email"/>
                <label htmlFor="password">Password: </label>
                <input type="password" placeholder="password" name="password"/>
                <input type="submit" value="Login" />
            </form>
            <button onClick={handleLoginWithGoogle}>Login with google</button>
        </div>
    );
};

export default Login;