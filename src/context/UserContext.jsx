import { useState, createContext, useContext } from "react";

// tạo context
const UserContext = createContext();

// tạo component
const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    const user = JSON.parse(localStorage.getItem("currentFiverrUser"));
    return user || null;
  });

  const handleSignin = (user) => {
    setCurrentUser(user);
    localStorage.setItem("currentFiverrUser", JSON.stringify(user));
  };

  const handleSignout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentFiverrUser");
  };
  return (
    <UserContext.Provider value={{ currentUser, handleSignin, handleSignout }}>
      {children}
    </UserContext.Provider>
  );
};

// tạo ra 1 customHook và export nó
export const useUserContext = () => {
  const value = useContext(UserContext);
  return value;
};

export default UserProvider;
