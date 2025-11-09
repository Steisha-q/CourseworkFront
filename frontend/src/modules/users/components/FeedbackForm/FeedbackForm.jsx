import React, { useState } from 'react';
import './FeedbackForm.css';

export const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ rating, feedback });
    // Тут буде логіка відправки форми
  };

  return (
    <div className="feedback-container">
      <div className="feedback-content">
        <h2 className="feedback-title">We appreciate your feedback.</h2>
        <p className="feedback-description">
          We are always looking for ways to improve your experience. 
          Please take a moment to evaluate and tell us what you think.
        </p>
        
        <form onSubmit={handleSubmit} className="feedback-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input 
              type="text" 
              id="name"
              className="form-input"
              placeholder="......"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Rating</label>
            <div className="stars-container">
              {[1, 2, 3, 4, 5, 6].map((star) => (
                <button
                  key={star}
                  type="button"
                  className={`star ${star <= rating ? 'active' : ''}`}
                  onClick={() => setRating(star)}
                >
                  ⭐
                </button>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="improvement" className="form-label">
              What we can improve?
            </label>
            <textarea
              id="improvement"
              className="form-textarea"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows="4"
              placeholder="Share your thoughts..."
            />
          </div>

          <button type="submit" className="submit-button">
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};