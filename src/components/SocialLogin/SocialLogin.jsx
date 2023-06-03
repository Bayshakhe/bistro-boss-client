import React, { useContext } from "react";
import {FaGoogle} from "react-icons/fa"
import { AuthContext } from "../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleLogin} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            console.log(result.user)
            const savedUser = {name: result.user.displayName, email: result.user.email}
            fetch('http://localhost:5000/users', {
              method: 'POST',
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(savedUser)
            })
            .then(res => res.json())
            .then(() => {
                navigate(from, {replace: true});
            })
        })
        .catch(err => {
            console.log(err.message)
        })
    }
  return (
    <div className="text-center">
      <div className="divider"></div>
      <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline">
        <FaGoogle></FaGoogle>
      </button>
    </div>
  );
};

export default SocialLogin;
