import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import loginImage from "../../assets/images/bag.avif";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await signInWithEmailAndPassword(auth, email, password);
      const singleUser = userData.user;
      localStorage.setItem("user-name", JSON.stringify(singleUser));
      navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div className="w-full h-screen flex items-start ">
      <div className="w-1/2 flex flex-col relative h-full">
        <div className="absolute flex flex-col top-[15%] left-[10%]">
          <h2 className="text-4xl text-white font-bold my-4">
            Fulfill your dreams
          </h2>
          <p className="text-xl text-white font-semibold">
            Sign Up and get <span className="text-red-600">40% off</span> on
            your first <span className="text-red-600">10</span> orders.
          </p>
        </div>
        <img
          src={loginImage}
          alt="image"
          className=" w-full h-full object-cover "
        />
      </div>
      <div className="w-1/2 flex flex-col p-14 bg-[#e0e0e0] h-full justify-between items-center">
        <h1 className="w-full max-w-[500px] mx-auto text-xl font-semibold text-red-500 ">
          Dharun Super Mart
        </h1>
        <div className="w-full flex flex-col max-w-[500px]">
          <div className="w-full flex flex-col mb-2">
            <h2 className="text-3xl font-semibold mb-2">Login</h2>
            <p className=" font-base mb-2">
              Welcome to <span className="text-red-500">DSM</span>
            </p>
          </div>
          <div className="w-full flex flex-col  ">
            <form onSubmit={formSubmit} className="flex flex-col w-full  ">
              <input
                className="text-black py-4 bg-transparent border-b border-black outline-none focus:outline-none my-2"
                type="email"
                placeholder="Email"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <input
                className="text-black py-4 bg-transparent border-b border-black outline-none focus:outline-none my-2"
                type="password"
                placeholder="Password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <div className="w-full flex items-center justify-between my-2">
                <div className="w-full flex items-center">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="w-4 h-4 mr-2"
                  />
                  <p className="text-sm">Remember me</p>
                </div>
                <p className="text-red-500 whitespace-nowrap text-sm font-medium underline underline-offset-2">
                  Forgot Password?
                </p>
              </div>
              <div className="w-full flex flex-col">
                <button
                  className="w-full flex items-center justify-center text-center font-medium bg-red-500 text-white p-4 rounded-md my-2"
                  type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <p className="font-normal">
            Not have an account?
            <a
              href="/signup"
              className="text-red-500 underline underline-offset-2 font-medium">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
