import React, { useState, useEffect } from 'react'
import NavbarSection from '../common/NavbarSection'
import Footer from './Footer'
import WhatsAppFloat from '../common/WhatsAppFloat'
import './Homepage.css'
import Subjects from '../pages/Subjects.jsx';
import AboutUs from '../pages/AboutUs.jsx';
import TeacherList from '../pages/TeacherList.jsx';
import Contact from '../pages/Contact.jsx';

function Homepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    // Navbar scroll effect
    const navbar = document.getElementById('navbar')
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar?.classList.add('scrolled')
      } else {
        navbar?.classList.remove('scrolled')
      }
    }

    // Close mobile menu on window resize
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [setIsMenuOpen])

  return (
    <div>
      <NavbarSection isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1 id="hero-headline">Transform Your Future with Scorpio Tutorials</h1>
          <p id="hero-subheadline">
            Expert tutoring for students from Grade 1 to 12 • Personalized
            learning paths • Proven results
          </p>
          <div className="student-icons">
            <span>👨‍🎓</span> <span>👩‍🎓</span> <span>📚</span> <span>🎯</span>
          </div>
          <div className="cta-buttons">
            <button className="btn btn-primary">Enroll Now</button>
            <button className="btn btn-secondary">Book a  Demo</button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutUs />

      {/* Subjects Section */}
      <Subjects />

      {/* Faculty Section */}
      <TeacherList />

      {/* Stats Section */}
      <section className="section stats-section">
        <div className="container">
          <h2 className="section-title">Our Success Story</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <h3>200+</h3>
              <p>Students Taught</p>
            </div>
            <div className="stat-item">
              <h3>95%</h3>
              <p>Success Rate</p>
            </div>
            <div className="stat-item">
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3>25</h3>
              <p>Expert Teachers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">What Parents Say About Us</h2>
          <p className="section-subtitle">
            Real feedback from satisfied parents and students
          </p>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-text">
                My daughter's confidence in mathematics has grown tremendously.
                Her grades improved from C to A+ within 6 months. The teachers are
                patient and genuinely care about student progress.
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">👩</div>
                <div className="author-info">
                  <h4>Mrs. Sunita Reddy</h4>
                  <p>Parent of Grade 10 student</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                Excellent teaching methodology and friendly environment. My son
                actually looks forward to attending classes now! The small batch
                size ensures he gets personal attention.
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">👨</div>
                <div className="author-info">
                  <h4>Mr. Vikram Singh</h4>
                  <p>Parent of Grade 8 student</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                The best decision we made for our daughter's education. The
                teachers identified her weak areas and created a personalized
                study plan. She scored 98% in her finals!
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">👩</div>
                <div className="author-info">
                  <h4>Mrs. Anjali Mehta</h4>
                  <p>Parent of Grade 12 student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />


      {/* Fixed WhatsApp Button */}
      <WhatsAppFloat />
    </div>
  )
}

export default Homepage
