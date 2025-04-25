import { useMutation } from "@tanstack/react-query";
import axios from "axios";

// Login API call
const loginUser = async (userData) => {
  const response = await axios.post("http://localhost:8080/api/auth/login", userData);
  return response.data;
};

const useLogin = () => {
  return useMutation({
    mutationFn: loginUser,
    onError: (error) => {
      console.error("Login failed:", error.response?.data?.message || error.message);
    },
    onSuccess: (data) => {
      console.log("Login successful:", data);
      // Optional: Store JWT or redirect logic here
    },
  });
};

export default useLogin;
