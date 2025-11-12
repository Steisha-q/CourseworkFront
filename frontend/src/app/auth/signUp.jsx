import React, { useState } from "react";
import "./auth.form.css";
import { AuthHeader } from "./auth.header";
import { useRequest } from "@hooks";
import { api } from "@app/api";

export const AuthForm = ({ isLogin = false }) => {
  const { makeRequest } = useRequest({
    api: api.signup
  });

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
    debugger
    console.log("Form submitted:", data);
  };

  return (
    <div className="auth-form-wrapper">
      <AuthHeader />
      <h2 className="auth-title">{isLogin ? "Sign in to account" : "Create an account"}</h2>

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
          placeholder="Rebentree"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {!isLogin && (
          <input
            type="password"
            name="password_confirm"
            placeholder="Gather Password"
            value={formData.password_confirm}
            onChange={handleChange}
          />
        )}

        <div className="auth-buttons">
          {!isLogin ? (
            <>
              <button type="submit" className="register-btn">Register</button>
              <button type="button" className="signin-btn">Sign In</button>
            </>
          ) : (
            <button type="submit" className="signin-btn">Sign In</button>
          )}
        </div>

        <p className="auth-policy">
          By reprinting your details, you appreciate our Terms Consultants, and Privacy and Cookies Policy.
        </p>
      </form>
    </div>
  );
};