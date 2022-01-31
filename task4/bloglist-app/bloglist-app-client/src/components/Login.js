import propTypes from "prop-types";

const Login = ({
    handleSubmit,
    handleUsernameChange,
    handlePasswordChange,
    username,
    password
}) => {

    return (
        <div className="login">
            <div>
                <p>Login to Bloglist app</p>
            </div>
            <form className="login-form" onSubmit={(event) => handleSubmit(event)}>
                <div>
                    <label>
                        Username <input type="text" name="Username" value={username} onChange={(event) => handleUsernameChange(event)}/>
                    </label>
                </div>
                <div>
                    <label>
                        Password <input type="password" name="Password" value={password} onChange={(event) => handlePasswordChange(event)}/>
                    </label>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

Login.PropTypes = {
    handleSubmit: propTypes.func.isRequired,
    handleUsernameChange: propTypes.func.isRequired,
    handlePasswordChange: propTypes.func.isRequired,
    username: propTypes.string.isRequired,
    password: propTypes.string.isRequired,
};

export default Login;