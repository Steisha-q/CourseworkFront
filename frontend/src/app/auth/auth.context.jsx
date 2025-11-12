import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router";


const authContext = createContext();

const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(localStorage.getItem("user"));
    const [accessToken, setAccessToken] = useState(localStorage.getItem("token"));

    const login = (accessToken, role) => {
        setAccessToken(accessToken);
        setUserSignedIn(true);
        localStorage.addItem("user")
        localStorage.addItem("token")

        navigate(ROUTES.home());
    }

    const logout = () => {
        setAccessToken(null);
        setUserSignedIn(false);

        localStorage.removeItem("user")
        localStorage.removeItem("token")
    }

    return <authContext.Provider value={{
        login, logout, user, accessToken
    }}>
        {children}
    </authContext.Provider>;
};

const useAuth = () => useContext(authContext);

export { AuthProvider, useAuth };