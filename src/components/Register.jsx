import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const Register = () => {
    const [error, setError] = useState(null)
    const {user, setUser, createWithEmail, createWithGoogle} = useContext(AuthContext)

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
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" placeholder="Name"/>
                <label htmlFor="photourl">Photo URL: </label>
                <input type="text" name="photourl" placeholder="Paste your photo URL here"/>
                <label htmlFor="email">Email: </label>
                <input type="email" placeholder="youremail@emai.com" name="email"/>
                <label htmlFor="password">Password: </label>
                <input type="password" placeholder="password" name="password"/>
                <input type="submit" value="Register" />
            </form>
            <p>{user == null ? `${error}` : ''}</p>
            <button onClick={handleRegisterWithGoogle}>Register with google</button>
        </div>
    );
};

export default Register;