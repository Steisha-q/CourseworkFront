import axios from "./axios";

const endpoints = {
    login: () => "/auth/login",
    signup: () => "/auth/register",

    // users
    users: () => "/users",
    users: id => `/users/${id}`,
    getCurrentUser: () => `/users/me`,
}

export const api = {
    login: (data) => axios.post(endpoints.login(), data),
    signup: (data) => axios.post(endpoints.signup(), data),

    // users
    getCurrentUser: () => axios.get(endpoints.getCurrentUser()),
    updateUser: (data) => axios.patch(endpoints.users(data.user_id), data),
};