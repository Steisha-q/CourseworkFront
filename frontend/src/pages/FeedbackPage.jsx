import React from "react";
import { Header, FeedbackForm } from "@modules/users/components";
import "./FeedbackPage.css";

export const FeedbackPage = () => {
  return (
    <div className="feedback-page">
      <Header />
      <FeedbackForm />
    </div>
  );
};