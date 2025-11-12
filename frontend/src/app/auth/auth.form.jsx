import React, { useState } from "react";
import "./auth.form.css";
import { AuthHeader } from "./auth.header";
import { useRequest, useAuth } from "@hooks";
import { api } from "../api";

export const AuthForm = ({ isLogin = false }) => {
  const { makeRequest } = useRequest({
    api: api.login
  });

  const { login } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirm: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await makeRequest(formData);
    login(data.access_token, data.role);
  };

  return (
    <div className="auth-form-wrapper">
      <AuthHeader />
      {/* <h2 className="auth-title">{isLogin ? "Sign in to account" : "Create an account"}</h2> */}
      <h2 className="auth-title">{"Sign in to account"}</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        {!isLogin && (
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {!isLogin && (
          <input
            type="password"
            name="password_confirm"
            placeholder="Confirm Password"
            value={formData.password_confirm}
            onChange={handleChange}
          />
        )}

        <div className="auth-buttons">
          {!isLogin ? (
            <>
              <button type="button" className="register-btn">Register</button>
              <button type="submit" className="signin-btn">Sign in</button>
            </>
          ) : (
            <button type="submit" className="signin-btn" style={{flex: '1'}}>Sign in</button>
          )}
        </div>

        <p className="auth-policy">
          By registering your details, you agree with our Terms & Conditions,
          and Privacy and Cookies Policy.
        </p>
      </form>
    </div>
  );
};