import axios from "axios";

const API_URL =
  "https://6a5608ffb17de7bebbddbc73.mockapi.io/api/students";

// Register Student
export const registerStudent = async (studentData) => {
  const response = await axios.post(API_URL, studentData);
  return response.data;
};

// Get All Students
export const getStudents = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Login Student
export const loginStudent = async (email, password) => {
  const response = await axios.get(API_URL);

  const student = response.data.find(
    (user) =>
      user.email === email &&
      user.password === password
  );

  return student;
};