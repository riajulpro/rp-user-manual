import PropTypes from "prop-types";
import { createContext } from "react";

export const AuthContext = createContext(null);

const ContextProvider = ({ children }) => {
  const name = "RiaJul Pro";
  const authInfo = { name };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node,
};

export default ContextProvider;
