import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("student");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (student) => {
    localStorage.setItem("student", JSON.stringify(student));
    setUser(student);
  };

  const logout = () => {
    localStorage.removeItem("student");
    setUser(null);
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
