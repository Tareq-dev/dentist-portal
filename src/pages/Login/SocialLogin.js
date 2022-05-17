import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
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
    navigate("/");
  }
  return (
    <div className="text-center">
      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-primary btn-outline"
      >
        <img
          className="w-8 px-1"
          src="https://i.ibb.co/5k5bzzG/google.png"
          alt=""
        />
        CONTINUE WITH GOOGLE
      </button>
    </div>
  );
};

export default SocialLogin;
