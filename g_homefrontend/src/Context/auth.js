import { useState, useEffect, useContext, createContext } from "react";
//initial context
const AuthContext = createContext();
const AuthProvider = ({ children }) => {

  //state management
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  //side affects
  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      setAuth({
        ...auth,
        user: parseData.user,
        userid: parseData.userid,
        token: parseData.token,
      });
    }
  }, []);

  
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

// custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };