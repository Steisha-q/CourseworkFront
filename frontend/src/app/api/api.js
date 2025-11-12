import axios from "./axios";

const endpoints = {
    login: "/auth/login",
    signup: "/auth/register",
}

export const api = {
    login: (data) => axios.post(endpoints.login, data),
    signup: (data) => axios.post(endpoints.signup, data),
};