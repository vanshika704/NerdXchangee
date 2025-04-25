import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useLogin from "../services/login"; // Custom hook to handle login

function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { mutate, isLoading, error, isSuccess } = useLogin(); // Custom hook for login mutation

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name: username,
      email,
      password,
    };

    mutate(userData); // Trigger login
  };

  useEffect(() => {
    if (isSuccess) {
      alert("Login successful! 🎉");
      navigate("/page1"); // Replace '/page1' with your desired page
    }
  }, [isSuccess, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col items-center w-full px-4 py-8 max-w-7xl lg:flex-row lg:py-12">
        <div className="flex justify-center w-full mb-10 lg:w-1/2 lg:mb-0">
          <img
            src="https://res.cloudinary.com/macxenon/image/upload/v1631570592/Run_-_Health_qcghbu.png"
            alt="Signup Illustration"
            className="w-full max-w-md lg:max-w-lg"
          />
        </div>

        <div className="w-full p-8 bg-white shadow-2xl lg:w-1/2 rounded-xl lg:p-10">
          <h2 className="mb-8 font-serif text-3xl text-center lg:text-4xl">
            Login to your account
          </h2>

          {error && <p className="text-center text-red-500">{error.message}</p>}

          <div className="space-y-6">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="John"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="123@ex.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              />
            </div>
            <button
              className="w-full py-3 text-white transition bg-indigo-500 rounded-md hover:bg-indigo-600"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Submit"}
            </button>
          </div>
          <p className="mt-4 text-sm text-center text-gray-600">
            Don&apos;t have an account?{" "}
            <a href="/signup" className="text-indigo-500 hover:underline">
              Signup
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
