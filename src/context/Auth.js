import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

  // const token = localStorage.getItem('token');


  const [user, setUser] = useState(null);

  const login = (user) => {
    setUser(user);
    // window.localStorage.setItem("token", true);
  };

  const logout = () => {
    // window.localStorage.setItem("token", false);
    setUser(null);

  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
    return useContext(AuthContext)
}
