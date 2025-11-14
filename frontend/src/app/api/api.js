import axios from "./axios";

const endpoints = {
    login: () => "/auth/login",
    signup: () => "/auth/register",

    // users
    users: () => "/users",
    users: id => `/users/${id}`,
    getCurrentUser: () => `/users/me`,

    // posts
    posts: () => "/posts",
    post: id => `/posts/${id}`,
    postsByUser: userId => `/posts/user/${userId}`,
}

export const api = {
    login: (data) => axios.post(endpoints.login(), data),
    signup: (data) => axios.post(endpoints.signup(), data),

    // users
    getCurrentUser: () => axios.get(endpoints.getCurrentUser()),
    updateUser: (data) => axios.patch(endpoints.users(data.user_id), data),

    // posts
    createPost: (data) => axios.post(endpoints.posts(), data),
    getPost: (id) => axios.get(endpoints.post(id)),
    getPostsByUser: (userId) => axios.get(endpoints.postsByUser(userId)),
};