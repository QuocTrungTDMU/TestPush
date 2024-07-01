import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const closeForm = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="bg-blue-300 h-screen w-full">
      <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
        <div
          className="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0 relative"
          style={{ height: "550px", width: "800px", marginBottom: "130px" }}
        >
          <button
            onClick={closeForm}
            className="absolute top-1 right-5 text-gray-600 text-2xl focus:outline-none"
          >
            &times;
          </button>
          <div
            className="hidden md:block md:w-1/2"
            style={{
              backgroundImage:
                "url('https://p1.liveauctioneers.com/dist/images/SignupLadySmall.png')",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              borderRadius: "0.5rem 0 0 0.5rem",
              width: "300px",
              height: "550px",
            }}
          ></div>

          <div
            className="flex flex-col w-full md:w-1/2 p-4"
            style={{ marginLeft: "50px" }}
          >
            <div className="flex flex-col flex-1 justify-center mb-8">
              <h1 className="text-4xl text-center font-thin">
                Welcome to LiveAuctioneers!
              </h1>
              <div className="w-full mt-4">
                <form
                  className="form-horizontal w-3/4 mx-auto"
                  onSubmit={handleSubmit}
                >
                  <div className="flex flex-col mt-4">
                    <div>EMAIL ADDRESS / USERNAME</div>
                    <input
                      id="email"
                      type="text"
                      className="flex-grow h-10 px-5 border rounded border-grey-400"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col mt-4 relative">
                    <div>PASSWORD</div>
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      className="flex-grow h-10 px-5 rounded border border-grey-400"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1 flex items-center text-sm text-gray-600"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                      <span className="ml-1">{showPassword ? "Hide" : "Show"}</span>
                    </button>
                  </div>
                  <div className="flex items-center mt-4">
                    <input
                      type="checkbox"
                      name="remember"
                      id="remember"
                      className="mr-2"
                    />
                    <label
                      htmlFor="remember"
                      className="text-sm text-grey-dark"
                    >
                      Remember Me
                    </label>
                  </div>
                  <div className="flex flex-col mt-8">
                    <button
                      type="submit"
                      className="bg-red-500 hover:bg-gray-700 text-white text-sm font-semibold py-2 px-4 rounded"
                    >
                      Login
                    </button>
                  </div>
                </form>
                <div className="text-center mt-4">
                  <a
                    href="#"
                    className="no-underline hover:underline text-blue text-lg"
                    style={{ color: "rgb(0, 97, 127)", fontSize: "15px" }}
                  >
                    Forgot Your Password?
                  </a>
                </div>

                <div className="text-center mt-4">
                  <span>Don't have an account? </span>
                  <a
                    href="#"
                    className="no-underline hover:underline text-blue text-lg"
                    style={{ color: "rgb(0, 97, 127)", fontSize: "15px" }}
                  >
                    Join
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
