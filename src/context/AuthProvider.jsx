import PropTypes from "prop-types";
import { createContext } from "react";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    return <AuthContext.Provider>
        {children}
    </AuthContext.Provider>;
};

AuthProvider.propTypes = {
    children: PropTypes.object.isRequired,
}

export default AuthProvider;