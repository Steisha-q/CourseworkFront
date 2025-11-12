import React, { useState, useEffect } from "react";
import { Header } from "@modules/users/components";
import "./HomePage.css";

export const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const bestsellers = [
    {
      id: 1,
      name: "Homemade sweater",
      price: "$3",
      sales: "153"
    },
    {
      id: 2,
      name: "Designer hat",
      price: "$0",
      sales: "80"
    },
    {
      id: 3,
      name: "Comfortable shirt",
      price: "$30",
      sales: "300"
    },
    {
      id: 4,
      name: "Speed shoes",
      price: "$99",
      sales: "599"
    }
  ];

  const deliveryMethods = [
    {
      method: "Peking from Khmelnutskul",
      time: "About 6 days",
      cost: "Free"
    },
    {
      method: "EcoCraft counter delivery",
      time: "1 day",
      cost: "100$"
    },
    {
      method: "Nova Poshta",
      time: "2-3 days",
      cost: "150$"
    },
    {
      method: "Ukrposhta",
      time: "14 days",
      cost: "120$"
    }
  ];

  const feedbacks = [
    {
      name: "Steisha",
      date: "09.09.2025",
      text: "I have never seen anything better! I bought a lot of quality and beautiful things",
      rating: "★★★★★"
    },
    {
      name: "Dasha",
      date: "07.09.2025",
      text: "UX/UI design is top notch, but I didn't win the giveaway, so four stars.",
      rating: "★★★★☆"
    },
    {
      name: "Ann",
      date: "27.08.2025",
      text: "I don't understand who can use such a terrible site, one star from me!!!",
      rating: "★☆☆☆☆"
    }
  ];

  const getVisibleCount = () => {
    if (window.innerWidth >= 992) return 4;
    if (window.innerWidth >= 768) return 3;
    if (window.innerWidth >= 576) return 2;
    return 1;
  };

  const totalSlides = Math.ceil(bestsellers.length / getVisibleCount());

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="home-page">
      <Header />
      
{/* Hero Section */}
<section className="hero-section">
  <div className="hero-background">
    <div className="hero-overlay"></div>
  </div>
  <div className="hero-content">
    <div className="hero-badge">
      <span>♻️ Eco Friendly</span>
    </div>
    <h1 className="hero-title">
      <span className="hero-title-line">EcoCraft — craft the future,</span>
      <span className="hero-title-accent">give things a new life!</span>
    </h1>
    <p className="hero-subtitle">
      A community for sharing, recycling, and creative<br />
      rebirth of things. Find, create, inspire.
    </p>
    <div className="hero-actions">
      <button className="hero-btn primary">Explore Marketplace</button>
      <button className="hero-btn secondary">Learn More</button>
    </div>
    <div className="hero-stats">
      <div className="stat-item">
        <span className="stat-number">10K+</span>
        <span className="stat-label">Items Upcycled</span>
      </div>
      <div className="stat-item">
        <span className="stat-number">5K+</span>
        <span className="stat-label">Community Members</span>
      </div>
      <div className="stat-item">
        <span className="stat-number">99%</span>
        <span className="stat-label">Satisfaction Rate</span>
      </div>
    </div>
  </div>
  <div className="hero-scroll-indicator">
    <span>Scroll to explore</span>
    <div className="scroll-arrow"></div>
  </div>
</section>

{/* Features Section */}
<section className="features-section">
  <div className="container">
    <div className="features-grid">
      <div className="feature-card">
        <div className="feature-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="feature-title">We give things new life</h3>
        <p className="feature-text">
          We believe that in every old thing lies the potential for something new and better.
        </p>
      </div>
      
      <div className="feature-card">
        <div className="feature-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="feature-title">Uniting the community</h3>
        <p className="feature-text">
          Our strength lies in craftsmen and enthusiasts who share inspiration, experience, and resources.
        </p>
      </div>
      
      <div className="feature-card">
        <div className="feature-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="feature-title">We inspire creativity</h3>
        <p className="feature-text">
          We create a space where bold ideas and creative rethinking find support.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Bestsellers Section */}
<section className="bestsellers-section">
  <div className="container">
    <h2 className="section-title">Bestsellers</h2>
    <div className="bestsellers-grid">
      {/* Homemade Sweater */}
      <div className="product-card homemade-sweater">
        <div className="product-image">
          <div className="product-badge">Bestseller</div>
          Homemade Sweater
        </div>
        <div className="product-info">
          <div className="product-header">
            <h3 className="product-name">Homemade Sweater</h3>
            <div className="product-price">$3</div>
          </div>
          <div className="product-stats">
            <div className="sales-count">153 sold</div>
            <div className="rating">
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="rating-count">4.9</span>
            </div>
          </div>
          <div className="product-features">
            <span className="feature-tag">Handmade</span>
            <span className="feature-tag">Eco-friendly</span>
            <span className="feature-tag">Wool</span>
          </div>
          <button className="add-to-cart-btn">
            <span className="cart-icon">🛒</span>
            Add to cart
          </button>
        </div>
      </div>

      {/* Designer Hat */}
      <div className="product-card designer-hat">
        <div className="product-image">
          <div className="product-badge">Popular</div>
          Designer Hat
        </div>
        <div className="product-info">
          <div className="product-header">
            <h3 className="product-name">Designer Hat</h3>
            <div className="product-price">$0</div>
          </div>
          <div className="product-stats">
            <div className="sales-count">80 sold</div>
            <div className="rating">
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">☆</span>
              <span className="rating-count">4.2</span>
            </div>
          </div>
          <div className="product-features">
            <span className="feature-tag">Vintage</span>
            <span className="feature-tag">Upcycled</span>
          </div>
          <button className="add-to-cart-btn">
            <span className="cart-icon">🛒</span>
            Add to cart
          </button>
        </div>
      </div>

      {/* Comfortable Shirt */}
      <div className="product-card comfortable-shirt">
        <div className="product-image">
          <div className="product-badge">Trending</div>
          Comfortable Shirt
        </div>
        <div className="product-info">
          <div className="product-header">
            <h3 className="product-name">Comfortable Shirt</h3>
            <div className="product-price">$30</div>
          </div>
          <div className="product-stats">
            <div className="sales-count">300 sold</div>
            <div className="rating">
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="rating-count">4.8</span>
            </div>
          </div>
          <div className="product-features">
            <span className="feature-tag">Organic Cotton</span>
            <span className="feature-tag">Breathable</span>
          </div>
          <button className="add-to-cart-btn">
            <span className="cart-icon">🛒</span>
            Add to cart
          </button>
        </div>
      </div>

      {/* Speed Shoes */}
      <div className="product-card speed-shoes">
        <div className="product-image">
          <div className="product-badge">Hot Item</div>
          Speed Shoes
        </div>
        <div className="product-info">
          <div className="product-header">
            <h3 className="product-name">Speed Shoes</h3>
            <div className="product-price">$99</div>
          </div>
          <div className="product-stats">
            <div className="sales-count">599 sold</div>
            <div className="rating">
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">☆</span>
              <span className="rating-count">4.3</span>
            </div>
          </div>
          <div className="product-features">
            <span className="feature-tag">Sustainable</span>
            <span className="feature-tag">Lightweight</span>
            <span className="feature-tag">Durable</span>
          </div>
          <button className="add-to-cart-btn">
            <span className="cart-icon">🛒</span>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
 
      <section className="delivery-section">
        <div className="container">
          <h2 className="section-title">Delivery</h2>
          <div className="delivery-grid">
            {deliveryMethods.map((delivery, index) => (
              <div key={index} className="delivery-card">
                <h3 className="delivery-method">{delivery.method}</h3>
                <div className="delivery-details">
                  <span className="delivery-time">{delivery.time}</span>
                  <span className="delivery-cost">{delivery.cost}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedbacks Section */}
      <section className="feedbacks-section">
        <div className="container">
          <h2 className="section-title">Feedbacks</h2>
          <div className="feedbacks-grid">
            {feedbacks.map((feedback, index) => (
              <div key={index} className="feedback-card">
                <div className="feedback-header">
                  <div className="feedback-user">
                    <span className="feedback-name">{feedback.name}</span>
                    <span className="feedback-date">{feedback.date}</span>
                  </div>
                  <span className="feedback-rating">{feedback.rating}</span>
                </div>
                <p className="feedback-text">{feedback.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3 className="footer-title">Quick links</h3>
              <div className="footer-links">
                <a href="#">Home</a>
                <a href="#">Feedback</a>
                <a href="#">Tastes</a>
                <a href="#">Raffles</a>
                <a href="#">Marketplace</a>
              </div>
            </div>
            
            <div className="footer-section">
              <h3 className="footer-title">Follow Us</h3>
              <div className="social-links">
                <a href="#">Instagram</a>
                <a href="#">Facebook</a>
                <a href="#">Twitter</a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>©2025 EcoCraft. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};