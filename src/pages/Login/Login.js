import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "./../../firebase.init";
import SocialLogin from "./SocialLogin";
const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return (
      <div>
        <p>Signed In User: {user.email}</p>
      </div>
    );
  }
  return (
    <div className="flex justify-center">
      <div className="shadow-xl p-8 rounded-lg mt-5">
        <h2 className="text-2xl text-center">Login</h2>
        <div className="flex justify-center pt-8">
          <form className="flex-col justify-center mx-auto">
            <label htmlFor="" className="text-md mx-2">
              Email
            </label>
            <input
              className="border-2 rounded-lg px-4 py-2 block w-80"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="" className="text-md mx-2 block mt-5">
              Password
            </label>
            <input
              className="border-2 rounded-lg px-4 py-2 block w-80"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link to="/reset">Forgot Password ?</Link>
            <button
              className="border-2 rounded-lg px-4 py-2 block w-80 mt-5 bg-black text-white"
              onClick={() => signInWithEmailAndPassword(email, password)}
            >
              Login
            </button>
          </form>
        </div>
        <p className="text-center mt-5">
          New to Doctors Portal?
          <Link className="text-primary px-2" to="/register">
            Create new account
          </Link>
        </p>
        <div className="text-center py-5 text-gray-400">
          ________________OR________________
        </div>
        <SocialLogin />
      </div>
    </div>
  );
};

export default Login;
