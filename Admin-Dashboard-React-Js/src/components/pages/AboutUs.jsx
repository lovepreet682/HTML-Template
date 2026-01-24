import React, { useState, useEffect } from 'react'
import NavbarSection from '../common/NavbarSection'
import Footer from './Footer'
import WhatsAppFloat from '../common/WhatsAppFloat'
import './Homepage.css'

function AboutUs() {
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

      <section className="section" id="about" style={{ marginTop: '70px' }}>
        <div className="container">
          <h2 className="section-title" id="about-title">
            Why Choose Our Tuition Center?
          </h2>
          <p className="section-subtitle" id="about-description">
            We provide comprehensive education with a personal touch
          </p>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🎓</div>
              <h3>Experienced Faculty</h3>
              <p>
                Learn from qualified teachers with 10+ years of teaching
                experience and proven track records
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3>Personalized Learning</h3>
              <p>
                Customized study plans tailored to each student's learning pace
                and academic goals
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">💯</div>
              <h3>Proven Results</h3>
              <p>
                95% of our students achieve grade improvement within the first
                semester
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">🏆</div>
              <h3>Small Class Sizes</h3>
              <p>
                Maximum 8 students per class ensuring individual attention and
                interactive learning
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">📱</div>
              <h3>Online & Offline</h3>
              <p>
                Flexible learning modes with both in-person classes and live
                online sessions
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">⏰</div>
              <h3>Flexible Timings</h3>
              <p>
                Morning, afternoon, and evening batches to fit your child's
                schedule
              </p>
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

export default AboutUs