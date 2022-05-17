import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
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
