import React, { useState } from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import { useSpring, animated } from 'react-spring';
import axios from 'axios';

function LoginForm(props) {
    return (
        <React.Fragment>
            <label for="username">USERNAME</label>
            <input type="text" id="username" onChange={props.userlogin} />
            <label for="password">PASSWORD</label>
            <input type="text" id="password" onChange={props.passlogin} />
            <input type="submit" value="submit" className="submit" />
        </React.Fragment>
    );
}

function RegisterForm(props) {
    return (
        <React.Fragment>
            <label for="fullname">full name</label>
            <input type="text" id="fullname" onChange={props.userhandler} />
            <label for="email">email</label>
            <input type="text" id="email" />
            <label for="password" onChange={props.pwhandler}>
                password
            </label>
            <input type="text" id="password" />
            <label for="confirmpassword">confirm password</label>
            <input type="text" id="confirmpassword" />
            <input type="submit" value="submit" class="submit" />
        </React.Fragment>
    );
}

const FormSignup = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validate
    );

    const [registrationFormStatus, setRegistartionFormStatus] = useState(false);
    const loginProps = useSpring({
        left: registrationFormStatus ? -700 : 0, // Login form sliding positions
    });
    const registerProps = useSpring({
        left: registrationFormStatus ? 0 : 700, // Register form sliding positions
    });

    const loginBtnProps = useSpring({
        borderBottom: registrationFormStatus
            ? 'solid 0px transparent'
            : 'solid 2px #1059FF', //Animate bottom border of login button
    });
    const registerBtnProps = useSpring({
        borderBottom: registrationFormStatus
            ? 'solid 2px #1059FF'
            : 'solid 0px transparent', //Animate bottom border of register button
    });

    const registerClicked = async () => {
        setRegistartionFormStatus(true);
        const res = axios.post('http://localhost:8080/api/user/add', {
            userName: usernameLog,
            password: passwordLog,
        });
        console.log(res);
    };
    const loginClicked = async () => {
        setRegistartionFormStatus(false);
        const res = axios.post('http://localhost:8080/api/user/login', {
            userName: usernameReg,
            password: passwordReg,
        });
        console.log(res);
    };

    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');
    const [usernameLog, setUsernameLog] = useState('');
    const [passwordLog, setPasswordLog] = useState('');

    const usernameRegisterHandler = event => {
        setUsernameReg(event.target.value);
    };

    const passwordRegisterHandler = event => {
        setPasswordReg(event.target.value);
    };

    const usernameLoginHandler = event => {
        setUsernameLog(event.target.value);
    };

    const passwordLoginHandler = event => {
        setPasswordLog(event.target.value);
    };

    return (
        <div className="form-content-right">
            <div className="login-register-wrapper">
                <div className="nav-buttons">
                    <animated.button
                        onClick={loginClicked}
                        id="loginBtn"
                        style={loginBtnProps}
                    >
                        Login
                    </animated.button>
                    <animated.button
                        onClick={registerClicked}
                        id="registerBtn"
                        style={registerBtnProps}
                    >
                        Register
                    </animated.button>
                </div>
                <div className="form-group">
                    <animated.form action="" id="loginform" style={loginProps}>
                        <LoginForm
                            userlogin={usernameLoginHandler}
                            passlogin={passwordLoginHandler}
                        />
                    </animated.form>
                    <animated.form
                        action=""
                        id="registerform"
                        style={registerProps}
                    >
                        <RegisterForm
                            userhandler={usernameRegisterHandler}
                            pwhandler={passwordRegisterHandler}
                        />
                    </animated.form>
                </div>
                <animated.div className="forgot-panel" style={loginProps}>
                    <a herf="#">Forgot your password</a>
                </animated.div>
            </div>
        </div>
    );
};

export default FormSignup;
