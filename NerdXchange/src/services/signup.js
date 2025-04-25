import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const signupUser = async (userData) => {
  const response = await axios.post('http://localhost:8080/api/auth/signup', userData);
  return response.data;
};

const useSignup = () => {
  return useMutation({
    mutationFn: signupUser,
    onError: (error) => {
      console.error('Signup failed:', error.response?.data?.message || error.message);
    },
    onSuccess: (data) => {
      console.log('Signup successful:', data);
    },
  });
};

export default useSignup;
