import { createContext, useContext } from "react";
import { useState } from "react";

export const AuthContext = createContext(); // step1
export const useAuthContext = () => {
  return useContext(AuthContext); // auth context hook step 3
};

export const AuthContextProvider = ({ children }) => {
  // step2
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("chat-user")) || null
  );
  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
