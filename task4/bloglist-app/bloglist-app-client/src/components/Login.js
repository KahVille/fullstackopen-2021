const Login = () => {

    const handleLogin = (event) => {
        event.preventDefault();
        console.log(event.target);
    }

    return (
        <div className="login">
            <div>
                <p>Login to Bloglist app</p>
            </div>
            <form className="login-form" onSubmit={(event) => handleLogin(event)}>
                <div>
                    <label>
                        Username <input type="text" />
                    </label>
                </div>
                <div>
                    <label>
                        Password <input type="text" />
                    </label>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;