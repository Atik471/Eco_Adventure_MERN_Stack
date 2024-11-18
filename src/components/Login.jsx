

const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)
        e.target.reset()
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
            <button>Login with google</button>
        </div>
    );
};

export default Login;