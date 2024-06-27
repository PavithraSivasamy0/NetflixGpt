import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <>
      <Header />
      <div className="absolute">
        <img
          className="h-screen w-screen"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/1fd8c6d0-20db-4667-860e-dd1ad7353ac0/10f8d166-7c8c-499a-b16f-57c3740cdeae/IN-en-20240624-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="bg-img"
        />
      </div>

      <form className="absolute w-6/12 p-12 my-36 bg-opacity-70 bg-black flex flex-col mx-auto right-0 left-0  text-white">
        <h1 className=" font-bold text-3xl pb-5 px-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full name"
            className="p-4 m-2 bg-slate-600 rounded-lg bg-opacity-70"
          />
        )}
        <input
          type="text"
          placeholder="Email or mobile number"
          className="p-4 m-2 bg-slate-600 rounded-lg bg-opacity-70"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 m-2 mb-6 bg-slate-600 rounded-lg bg-opacity-70"
        />
        <button
          type="submit"
          className="p-2 m-2 bg-red-600 rounded-lg bg-opacity-70"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm ? "Already Registered " : "New to Netflix Gpt? "}
          <strong>{isSignInForm ? "Sign In now." : "Sign Up now"}</strong>
        </p>
      </form>
    </>
  );
};

export default Login;
