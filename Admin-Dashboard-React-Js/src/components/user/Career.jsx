import React, { useState, useEffect } from 'react'
import NavbarSection from '../common/NavbarSection'
import Footer from '../pages/Footer'
import WhatsAppFloat from '../common/WhatsAppFloat'
import '../pages/Homepage.css'

function Career() {
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
        toast.textContent = '✓ Application submitted successfully! We will contact you soon.'
        document.body.appendChild(toast)

        e.target.reset()

        setTimeout(() => {
            toast.remove()
        }, 3000)
    }

    return (
        <div>
            <NavbarSection isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

            {/* Hero Section */}
            <section className="hero" id="career-hero">
                <div className="hero-content">
                    <h1>Join Our Team at Scorpio Tutorials</h1>
                    <p>
                        Shape the future of education • Inspire young minds • Make a lasting impact
                    </p>
                    <div className="student-icons">
                        <span>👨‍🏫</span> <span>👩‍🏫</span> <span>📚</span> <span>🌟</span>
                    </div>
                </div>
            </section>

            {/* Why Join Us Section */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Why Join Scorpio Tutorials?</h2>
                    <p className="section-subtitle">
                        Be part of a team that's transforming education and empowering students
                    </p>
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon">🎯</div>
                            <h3>Impactful Work</h3>
                            <p>
                                Make a real difference in students' lives and help them achieve their academic goals
                            </p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">💼</div>
                            <h3>Professional Growth</h3>
                            <p>
                                Continuous learning opportunities, training programs, and career advancement paths
                            </p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">🤝</div>
                            <h3>Supportive Environment</h3>
                            <p>
                                Work with a collaborative team that values your contributions and ideas
                            </p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">⚖️</div>
                            <h3>Work-Life Balance</h3>
                            <p>
                                Flexible schedules and a healthy work environment that respects your personal time
                            </p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">💰</div>
                            <h3>Competitive Benefits</h3>
                            <p>
                                Attractive salary packages, performance bonuses, and comprehensive benefits
                            </p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">🏆</div>
                            <h3>Recognition & Rewards</h3>
                            <p>
                                Your hard work and dedication are recognized and rewarded regularly
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Open Positions Section */}
            <section className="section stats-section">
                <div className="container">
                    <h2 className="section-title" style={{ color: 'white' }}>
                        Open Positions
                    </h2>
                    <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.9)' }}>
                        Explore exciting career opportunities with us
                    </p>
                    <div className="testimonials-grid">
                        <div className="testimonial-card">
                            <h3 style={{ color: '#2d3748', marginBottom: '15px', fontSize: '24px' }}>
                                Mathematics Teacher
                            </h3>
                            <p style={{ color: '#718096', marginBottom: '15px' }}>
                                <strong>Location:</strong> On-site / Remote
                            </p>
                            <p style={{ color: '#718096', marginBottom: '15px' }}>
                                <strong>Experience:</strong> 2+ years
                            </p>
                            <p style={{ color: '#4a5568', lineHeight: '1.7', marginBottom: '20px' }}>
                                We're looking for an enthusiastic Mathematics teacher to teach students from Grade 6 to 12.
                                Strong subject knowledge and passion for teaching required.
                            </p>
                            <button className="btn btn-primary" style={{ width: '100%' }}>
                                Apply Now
                            </button>
                        </div>
                        <div className="testimonial-card">
                            <h3 style={{ color: '#2d3748', marginBottom: '15px', fontSize: '24px' }}>
                                Science Teacher
                            </h3>
                            <p style={{ color: '#718096', marginBottom: '15px' }}>
                                <strong>Location:</strong> On-site / Remote
                            </p>
                            <p style={{ color: '#718096', marginBottom: '15px' }}>
                                <strong>Experience:</strong> 2+ years
                            </p>
                            <p style={{ color: '#4a5568', lineHeight: '1.7', marginBottom: '20px' }}>
                                Join us as a Science teacher specializing in Physics, Chemistry, or Biology.
                                Help students develop a love for science through engaging teaching methods.
                            </p>
                            <button className="btn btn-primary" style={{ width: '100%' }}>
                                Apply Now
                            </button>
                        </div>
                        <div className="testimonial-card">
                            <h3 style={{ color: '#2d3748', marginBottom: '15px', fontSize: '24px' }}>
                                English Teacher
                            </h3>
                            <p style={{ color: '#718096', marginBottom: '15px' }}>
                                <strong>Location:</strong> On-site / Remote
                            </p>
                            <p style={{ color: '#718096', marginBottom: '15px' }}>
                                <strong>Experience:</strong> 2+ years
                            </p>
                            <p style={{ color: '#4a5568', lineHeight: '1.7', marginBottom: '20px' }}>
                                We need a creative English teacher to help students improve their language skills,
                                literature understanding, and communication abilities.
                            </p>
                            <button className="btn btn-primary" style={{ width: '100%' }}>
                                Apply Now
                            </button>
                        </div>
                        <div className="testimonial-card">
                            <h3 style={{ color: '#2d3748', marginBottom: '15px', fontSize: '24px' }}>
                                Primary Teacher
                            </h3>
                            <p style={{ color: '#718096', marginBottom: '15px' }}>
                                <strong>Location:</strong> On-site
                            </p>
                            <p style={{ color: '#718096', marginBottom: '15px' }}>
                                <strong>Experience:</strong> 1+ years
                            </p>
                            <p style={{ color: '#4a5568', lineHeight: '1.7', marginBottom: '20px' }}>
                                Looking for a patient and nurturing teacher for Grade 1-5 students.
                                Must have a passion for early childhood education and creative teaching methods.
                            </p>
                            <button className="btn btn-primary" style={{ width: '100%' }}>
                                Apply Now
                            </button>
                        </div>
                        <div className="testimonial-card">
                            <h3 style={{ color: '#2d3748', marginBottom: '15px', fontSize: '24px' }}>
                                Academic Coordinator
                            </h3>
                            <p style={{ color: '#718096', marginBottom: '15px' }}>
                                <strong>Location:</strong> On-site
                            </p>
                            <p style={{ color: '#718096', marginBottom: '15px' }}>
                                <strong>Experience:</strong> 3+ years
                            </p>
                            <p style={{ color: '#4a5568', lineHeight: '1.7', marginBottom: '20px' }}>
                                Manage academic programs, coordinate with teachers, and ensure quality education delivery.
                                Strong organizational and leadership skills required.
                            </p>
                            <button className="btn btn-primary" style={{ width: '100%' }}>
                                Apply Now
                            </button>
                        </div>
                        <div className="testimonial-card">
                            <h3 style={{ color: '#2d3748', marginBottom: '15px', fontSize: '24px' }}>
                                Student Counselor
                            </h3>
                            <p style={{ color: '#718096', marginBottom: '15px' }}>
                                <strong>Location:</strong> On-site / Remote
                            </p>
                            <p style={{ color: '#718096', marginBottom: '15px' }}>
                                <strong>Experience:</strong> 2+ years
                            </p>
                            <p style={{ color: '#4a5568', lineHeight: '1.7', marginBottom: '20px' }}>
                                Help students with academic guidance, career counseling, and personal development.
                                Psychology background preferred.
                            </p>
                            <button className="btn btn-primary" style={{ width: '100%' }}>
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">What We Offer</h2>
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon">💵</div>
                            <h3>Competitive Salary</h3>
                            <p>Attractive compensation packages based on experience and performance</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">🏥</div>
                            <h3>Health Insurance</h3>
                            <p>Comprehensive health and medical insurance coverage for you and your family</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">📖</div>
                            <h3>Training & Development</h3>
                            <p>Regular workshops, seminars, and professional development opportunities</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">🎓</div>
                            <h3>Education Support</h3>
                            <p>Support for your own continuing education and skill enhancement</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">☕</div>
                            <h3>Modern Facilities</h3>
                            <p>Well-equipped classrooms and comfortable working environment</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">🎉</div>
                            <h3>Team Events</h3>
                            <p>Regular team building activities, celebrations, and recognition events</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Form Section */}
            <section className="section contact-section">
                <div className="container">
                    <h2 className="section-title">Apply for a Position</h2>
                    <p className="section-subtitle">
                        Fill out the form below and we'll get back to you soon
                    </p>
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-10 col-12">
                            <div className="contact-form">
                                <form onSubmit={handleFormSubmit}>
                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <label htmlFor="applicant-name">Full Name</label>
                                                <input
                                                    type="text"
                                                    id="applicant-name"
                                                    name="applicant-name"
                                                    placeholder="Enter your full name"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <label htmlFor="applicant-email">Email Address</label>
                                                <input
                                                    type="email"
                                                    id="applicant-email"
                                                    name="applicant-email"
                                                    placeholder="your.email@example.com"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <label htmlFor="applicant-phone">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    id="applicant-phone"
                                                    name="applicant-phone"
                                                    placeholder="+91 98765 43210"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <label htmlFor="position">Position Applied For</label>
                                                <select
                                                    id="position"
                                                    name="position"
                                                    style={{
                                                        width: '100%',
                                                        padding: '12px 15px',
                                                        border: '2px solid #e2e8f0',
                                                        borderRadius: '10px',
                                                        fontSize: '16px',
                                                        fontFamily: 'inherit',
                                                        transition: 'border-color 0.3s ease',
                                                    }}
                                                    required
                                                >
                                                    <option value="">Select a position</option>
                                                    <option value="mathematics-teacher">Mathematics Teacher</option>
                                                    <option value="science-teacher">Science Teacher</option>
                                                    <option value="english-teacher">English Teacher</option>
                                                    <option value="primary-teacher">Primary Teacher</option>
                                                    <option value="academic-coordinator">Academic Coordinator</option>
                                                    <option value="student-counselor">Student Counselor</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <label htmlFor="experience">Years of Experience</label>
                                                <input
                                                    type="number"
                                                    id="experience"
                                                    name="experience"
                                                    placeholder="e.g., 3"
                                                    min="0"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <label htmlFor="qualification">Educational Qualification</label>
                                                <input
                                                    type="text"
                                                    id="qualification"
                                                    name="qualification"
                                                    placeholder="e.g., B.Ed, M.Sc, etc."
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label htmlFor="resume">Resume/CV (Optional)</label>
                                                <input
                                                    type="file"
                                                    id="resume"
                                                    name="resume"
                                                    accept=".pdf,.doc,.docx"
                                                    style={{
                                                        width: '100%',
                                                        padding: '12px 15px',
                                                        border: '2px solid #e2e8f0',
                                                        borderRadius: '10px',
                                                        fontSize: '16px',
                                                        fontFamily: 'inherit',
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label htmlFor="cover-letter">Cover Letter / Message</label>
                                                <textarea
                                                    id="cover-letter"
                                                    name="cover-letter"
                                                    placeholder="Tell us why you're interested in joining our team..."
                                                    rows="5"
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                                                Submit Application
                                            </button>
                                        </div>
                                    </div>
                                </form>
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

export default Career