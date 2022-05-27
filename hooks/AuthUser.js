import { createContext, useContext } from "react";

const AuthContext = createContext();
export function AuthProvider({ children }) {
  const user = "himan";
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

export default function AuthUser() {
  return useContext(AuthContext);
}
