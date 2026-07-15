import axios from "axios";

const API_URL =
  "https://6a5608ffb17de7bebbddbc73.mockapi.io/api/users";

// Register User
export const registerUser = async (userData) => {
  const response = await axios.post(API_URL, userData);
  return response.data;
};

// Get All Users
export const getUsers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Login User
export const loginUser = async (email, password) => {
  const response = await axios.get(API_URL);

  return response.data.find(
    (user) =>
      user.email === email &&
      user.password === password
  );
};