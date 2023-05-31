import React, { useEffect, useRef, useState } from "react";
import loginBg from "../../assets/others/authentication.png";
import loginImg from "../../assets/others/authentication2.png";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
    const captchaRef = useRef();
    const [disabled, setDisabled] = useState(true)
    useEffect(()=>{
        loadCaptchaEnginge(6);
    },[])
    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
    }
    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value)==true) {
            setDisabled(false)
            alert('Captcha Matched');
        }
        // if (validateCaptcha(user_captcha_value)==false) {
        //     setDisabled(true)
        //     alert('Captcha Not Matched');
        // }
        else{
            setDisabled(true)
        }
    }
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img src={loginImg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full lg:w-1/2  ">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
              <LoadCanvasTemplate />
              </label>
              <input
                ref={captchaRef}
                type="text"
                name="captcha"
                placeholder="Type your captcha"
                className="input input-bordered"
              />
              <button onClick={handleValidateCaptcha} className="btn btn-xs btn-outline mt-3">Validate Captcha</button>
            </div>
            <div className="form-control mt-6">
              <input disabled={disabled} className="btn bg-[#D1A054]" type="submit" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
