import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router";
import { ROUTES } from "../constants";
import { useRequest } from "../../hooks";
import { api } from "../api";

const authContext = createContext();

const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const { makeRequest } = useRequest({ api: api.getCurrentUser });
    const [user, setUser] = useState(() => {
        try {
            const userData = localStorage.getItem("user");
            return userData ? JSON.parse(userData) : null;
        } catch (e) {
            return null;
        }
    });
    const [accessToken, setAccessToken] = useState(localStorage.getItem("token"));

    const login = (accessToken, role) => {
        setAccessToken(accessToken);
        handleUserFetch();
        localStorage.setItem("token", accessToken)

        navigate(ROUTES.home());
    }

    const logout = () => {
        setAccessToken(null);

        localStorage.removeItem("user")
        localStorage.removeItem("token")

        navigate(ROUTES.signIn());
    }

    const updateUser = (newUserData) => {
        setUser(newUserData);
        localStorage.setItem("user", JSON.stringify(newUserData))
    }

    const handleUserFetch = async () => {
        // Fetch user data logic here
        localStorage.setItem("user", null)
        const data = await makeRequest();
        if (!data) return;
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data))
    }

    return <authContext.Provider value={{
        login, logout, updateUser, user, accessToken
    }}>
        {children}
    </authContext.Provider>;
};

const useAuth = () => useContext(authContext);

export { AuthProvider, useAuth };