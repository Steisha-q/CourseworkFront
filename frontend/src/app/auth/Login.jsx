import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./auth.form.css";
import { AuthHeader } from "./auth.header";
import { useRequest, useAuth } from "@hooks";
import { api } from "../api";
import { ROUTES } from "../constants";
import { LoaderOverlay, ErrorArea } from "@modules/core";

export const Login = ({ isLogin = false }) => {
  const navigate = useNavigate();
  const { makeRequest, isLoading, error } = useRequest({
    api: api.login
  });

  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await makeRequest(formData);
    if (!data) return;
    login(data.access_token, data.role);
  };

  const handleGoRegister = () => {
    navigate(ROUTES.signUp());
  }

  return (
    <div className="auth-form-wrapper">
      <AuthHeader />
      {/* <h2 className="auth-title">{isLogin ? "Sign in to account" : "Create an account"}</h2> */}
      <h2 className="auth-title">{"Sign in to account"}</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
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

        <div className="auth-buttons">
          {!isLogin ? (
            <>
              <button type="button" className="button" onClick={handleGoRegister}>Go to Register</button>
              <button type="submit" className="button active-btn">Sign in</button>
            </>
          ) : (
            <button type="submit" className="signin-btn" style={{flex: '1'}}>Sign in</button>
          )}
        </div>

        <p className="auth-policy">
          By registering your details, you agree with our Terms & Conditions,
          and Privacy and Cookies Policy.
        </p>
        <LoaderOverlay show={isLoading} />
        <ErrorArea message={error && "Wrong email or password"} />
      </form>
    </div>
  );
};