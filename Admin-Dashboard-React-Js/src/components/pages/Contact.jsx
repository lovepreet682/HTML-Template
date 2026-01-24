import React, { useState, useEffect } from 'react'
import NavbarSection from '../common/NavbarSection'
import Footer from './Footer'
import WhatsAppFloat from '../common/WhatsAppFloat'
import './Homepage.css'

function Contact() {
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

  const handleFormSubmit = (e) => {
    e.preventDefault()

    const toast = document.createElement('div')
    toast.style.cssText =
      'position: fixed; top: 20px; right: 20px; background: #48bb78; color: white; padding: 20px 30px; border-radius: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.3); z-index: 1000; font-weight: 600;'
    toast.textContent = '✓ Thank you! We will contact you soon.'
    document.body.appendChild(toast)

    e.target.reset()

    setTimeout(() => {
      toast.remove()
    }, 3000)
  }

  const handleWhatsAppClick = () => {
    const phoneNumber = '+918360006948'.replace(/\D/g, '')
    const message = encodeURIComponent('Hello! I have a query.')
    window.open(
      `https://wa.me/${phoneNumber}?text=${message}`,
      '_blank',
      'noopener,noreferrer'
    )
  }

  const handlePhoneClick = () => {
    window.open('tel:+918360006948', '_blank', 'noopener,noreferrer')
  }

  return (
    <div>
      <NavbarSection isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <section className="section contact-section" id="contact" style={{ marginTop: '70px' }}>
        <div className="container">
          <h2 className="section-title" id="contact-title">Get In Touch With Us</h2>
          <div className="contact-content">
            <div className="contact-form">
              <h3>Send Us a Message</h3>
              <form id="contactForm" onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="parent-name">Parent's Name</label>
                  <input
                    type="text"
                    id="parent-name"
                    name="parent-name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="student-name">Student's Name</label>
                  <input
                    type="text"
                    id="student-name"
                    name="student-name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" required />
                </div>
                <div className="form-group">
                  <label htmlFor="grade">Student's Grade</label>
                  <input
                    type="text"
                    id="grade"
                    name="grade"
                    placeholder="e.g., Grade 8"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Submit Inquiry
                </button>
              </form>
            </div>
            <div className="contact-info">
              <h3>Contact Information</h3>
              <div className="contact-method">
                <div className="contact-method-icon">📞</div>
                <div className="contact-method-info">
                  <h4>Phone</h4>
                  <p id="phone-display">+91 83600 06948</p>
                </div>
              </div>
              <div className="contact-method">
                <div className="contact-method-icon">💬</div>
                <div className="contact-method-info">
                  <h4>WhatsApp</h4>
                  <p id="whatsapp-display">+91 83600 06948</p>
                </div>
              </div>
              <div className="contact-method">
                <div className="contact-method-icon">📧</div>
                <div className="contact-method-info">
                  <h4>Email</h4>
                  <p>info@Scorpio Tutorialstuition.com</p>
                </div>
              </div>
              <div className="contact-method">
                <div className="contact-method-icon">📍</div>
                <div className="contact-method-info">
                  <h4>Address</h4>
                  <p>123 Education Street, Learning Plaza, City - 400001</p>
                </div>
              </div>
              <div className="contact-buttons">
                <button className="btn btn-whatsapp" onClick={handleWhatsAppClick}>
                  <span>💬</span> Chat on WhatsApp
                </button>
                <button className="btn btn-phone" onClick={handlePhoneClick}>
                  <span>📞</span> Call Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />

      {/* Fixed WhatsApp Button */}
      <WhatsAppFloat />
    </div>
  )
}

export default Contact