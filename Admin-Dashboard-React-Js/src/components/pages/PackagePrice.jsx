import React, { useState } from 'react'
import NavbarSection from '../common/NavbarSection'
import Footer from './Footer'
import WhatsAppFloat from '../common/WhatsAppFloat'
import './Homepage.css'
import './PackagePrice.css'

function PackagePrice() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [selectedPackage, setSelectedPackage] = useState(null)
    const [customPackage, setCustomPackage] = useState({
        subjects: [],
        hoursPerWeek: 5,
        duration: '3 months',
        mode: 'online',
        support: 'standard',
    })

    const packages = [
        {
            id: 'basic',
            name: 'Basic Package',
            price: '₹2,999',
            period: '/month',
            icon: '📚',
            popular: false,
            features: [
                '2 Subjects',
                '8 Hours/Week',
                'Online Classes',
                'Study Materials',
                'Monthly Progress Report',
                'Email Support',
            ],
            color: '#667eea',
        },
        {
            id: 'standard',
            name: 'Standard Package',
            price: '₹4,999',
            period: '/month',
            icon: '⭐',
            popular: true,
            features: [
                '4 Subjects',
                '12 Hours/Week',
                'Online + Offline',
                'Study Materials',
                'Weekly Progress Report',
                'WhatsApp Support',
                'Doubt Sessions',
            ],
            color: '#f6ad55',
        },
        {
            id: 'premium',
            name: 'Premium Package',
            price: '₹7,999',
            period: '/month',
            icon: '👑',
            popular: false,
            features: [
                'Unlimited Subjects',
                '20 Hours/Week',
                'Online + Offline',
                'Premium Study Materials',
                'Daily Progress Report',
                '24/7 Support',
                '1-on-1 Doubt Sessions',
                'Exam Preparation',
                'Career Counseling',
            ],
            color: '#764ba2',
        },
    ]

    const subjects = [
        'Mathematics',
        'Science',
        'English',
        'Social Studies',
        'Physics',
        'Chemistry',
        'Biology',
        'Computer Science',
        'Economics',
        'Accounting',
        'Languages',
        'Arts',
    ]

    const handleSubjectToggle = (subject) => {
        setCustomPackage((prev) => {
            const newSubjects = prev.subjects.includes(subject)
                ? prev.subjects.filter((s) => s !== subject)
                : [...prev.subjects, subject]
            return { ...prev, subjects: newSubjects }
        })
    }

    const calculateCustomPrice = () => {
        let basePrice = 2000
        const subjectPrice = customPackage.subjects.length * 500
        const hoursMultiplier = customPackage.hoursPerWeek / 5
        const durationMultiplier =
            customPackage.duration === '3 months' ? 1 : customPackage.duration === '6 months' ? 0.9 : 0.85
        const modeMultiplier = customPackage.mode === 'offline' ? 1.2 : 1
        const supportMultiplier =
            customPackage.support === 'premium' ? 1.3 : customPackage.support === 'standard' ? 1 : 0.8

        const total =
            (basePrice + subjectPrice) *
            hoursMultiplier *
            durationMultiplier *
            modeMultiplier *
            supportMultiplier

        return Math.round(total)
    }

    const handleCustomPackageSubmit = (e) => {
        e.preventDefault()
        const toast = document.createElement('div')
        toast.style.cssText =
            'position: fixed; top: 20px; right: 20px; background: #48bb78; color: white; padding: 20px 30px; border-radius: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.3); z-index: 1000; font-weight: 600;'
        toast.textContent = '✓ Custom package request submitted! We will contact you soon.'
        document.body.appendChild(toast)

        setTimeout(() => {
            toast.remove()
        }, 3000)
    }

    return (
        <div>
            <NavbarSection isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

            {/* Hero Section for Packages */}
            <section className="package-hero">
                <div className="hero-content">
                    <h1>Choose Your Perfect Learning Package</h1>
                    <p>
                        Flexible pricing plans designed to meet every student's needs and budget
                    </p>
                </div>
            </section>

            {/* Standard Packages */}
            <section className="section" id="packages">
                <div className="container">
                    <h2 className="section-title">Our Standard Packages</h2>
                    <p className="section-subtitle">
                        Select a package that best fits your learning goals
                    </p>
                    <div className="packages-grid">
                        {packages.map((pkg) => (
                            <div
                                key={pkg.id}
                                className={`package-card ${pkg.popular ? 'popular' : ''} ${selectedPackage === pkg.id ? 'selected' : ''
                                    }`}
                                onClick={() => setSelectedPackage(pkg.id)}
                            >
                                {pkg.popular && (
                                    <div className="popular-badge">Most Popular</div>
                                )}
                                <div className="package-icon">{pkg.icon}</div>
                                <h3>{pkg.name}</h3>
                                <div className="package-price">
                                    <span className="price">{pkg.price}</span>
                                    <span className="period">{pkg.period}</span>
                                </div>
                                <ul className="package-features">
                                    {pkg.features.map((feature, index) => (
                                        <li key={index}>
                                            <span className="check-icon">✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    className={`btn ${pkg.popular ? 'btn-primary' : 'btn-secondary'}`}
                                    style={{ width: '100%', marginTop: '20px' }}
                                >
                                    Select Package
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Custom Package Builder */}
            <section className="section custom-package-section">
                <div className="container">
                    <h2 className="section-title">Build Your Custom Package</h2>
                    <p className="section-subtitle">
                        Create a personalized learning plan tailored to your specific needs
                    </p>

                    <div className="custom-package-builder">
                        <div className="builder-form">
                            <form onSubmit={handleCustomPackageSubmit}>
                                {/* Subjects Selection */}
                                <div className="builder-section">
                                    <h3>
                                        <span className="section-icon">📚</span> Select Subjects
                                    </h3>
                                    <div className="subjects-selector">
                                        {subjects.map((subject) => (
                                            <button
                                                key={subject}
                                                type="button"
                                                className={`subject-chip ${customPackage.subjects.includes(subject) ? 'selected' : ''
                                                    }`}
                                                onClick={() => handleSubjectToggle(subject)}
                                            >
                                                {subject}
                                                {customPackage.subjects.includes(subject) && (
                                                    <span className="chip-check">✓</span>
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                    <p className="helper-text">
                                        Selected: {customPackage.subjects.length} subject(s)
                                    </p>
                                </div>

                                {/* Hours Per Week */}
                                <div className="builder-section">
                                    <h3>
                                        <span className="section-icon">⏰</span> Hours Per Week
                                    </h3>
                                    <div className="slider-container">
                                        <input
                                            type="range"
                                            min="5"
                                            max="30"
                                            step="1"
                                            value={customPackage.hoursPerWeek}
                                            onChange={(e) =>
                                                setCustomPackage({
                                                    ...customPackage,
                                                    hoursPerWeek: parseInt(e.target.value),
                                                })
                                            }
                                            className="slider"
                                        />
                                        <div className="slider-value">
                                            {customPackage.hoursPerWeek} hours/week
                                        </div>
                                    </div>
                                </div>

                                {/* Duration */}
                                <div className="builder-section">
                                    <h3>
                                        <span className="section-icon">📅</span> Duration
                                    </h3>
                                    <div className="option-buttons">
                                        {['3 months', '6 months', '12 months'].map((duration) => (
                                            <button
                                                key={duration}
                                                type="button"
                                                className={`option-btn ${customPackage.duration === duration ? 'active' : ''
                                                    }`}
                                                onClick={() =>
                                                    setCustomPackage({ ...customPackage, duration })
                                                }
                                            >
                                                {duration}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Learning Mode */}
                                <div className="builder-section">
                                    <h3>
                                        <span className="section-icon">💻</span> Learning Mode
                                    </h3>
                                    <div className="option-buttons">
                                        {['online', 'offline', 'hybrid'].map((mode) => (
                                            <button
                                                key={mode}
                                                type="button"
                                                className={`option-btn ${customPackage.mode === mode ? 'active' : ''
                                                    }`}
                                                onClick={() =>
                                                    setCustomPackage({ ...customPackage, mode })
                                                }
                                            >
                                                {mode.charAt(0).toUpperCase() + mode.slice(1)}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Support Level */}
                                <div className="builder-section">
                                    <h3>
                                        <span className="section-icon">💬</span> Support Level
                                    </h3>
                                    <div className="support-options">
                                        {[
                                            { value: 'basic', label: 'Basic', desc: 'Email only' },
                                            {
                                                value: 'standard',
                                                label: 'Standard',
                                                desc: 'Email + WhatsApp',
                                            },
                                            {
                                                value: 'premium',
                                                label: 'Premium',
                                                desc: '24/7 Support',
                                            },
                                        ].map((support) => (
                                            <div
                                                key={support.value}
                                                className={`support-card ${customPackage.support === support.value ? 'active' : ''
                                                    }`}
                                                onClick={() =>
                                                    setCustomPackage({
                                                        ...customPackage,
                                                        support: support.value,
                                                    })
                                                }
                                            >
                                                <h4>{support.label}</h4>
                                                <p>{support.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Custom Package Summary */}
                                <div className="package-summary">
                                    <h3>Your Custom Package Summary</h3>
                                    <div className="summary-content">
                                        <div className="summary-item">
                                            <span>Subjects:</span>
                                            <span>
                                                {customPackage.subjects.length > 0
                                                    ? customPackage.subjects.join(', ')
                                                    : 'None selected'}
                                            </span>
                                        </div>
                                        <div className="summary-item">
                                            <span>Hours/Week:</span>
                                            <span>{customPackage.hoursPerWeek} hours</span>
                                        </div>
                                        <div className="summary-item">
                                            <span>Duration:</span>
                                            <span>{customPackage.duration}</span>
                                        </div>
                                        <div className="summary-item">
                                            <span>Mode:</span>
                                            <span>
                                                {customPackage.mode.charAt(0).toUpperCase() +
                                                    customPackage.mode.slice(1)}
                                            </span>
                                        </div>
                                        <div className="summary-item">
                                            <span>Support:</span>
                                            <span>
                                                {customPackage.support.charAt(0).toUpperCase() +
                                                    customPackage.support.slice(1)}
                                            </span>
                                        </div>
                                        <div className="summary-price">
                                            <span>Estimated Price:</span>
                                            <span className="price-highlight">
                                                ₹{calculateCustomPrice().toLocaleString()}/month
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                                    Request Custom Package
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="section comparison-section">
                <div className="container">
                    <h2 className="section-title">Compare Packages</h2>
                    <div className="comparison-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Features</th>
                                    <th>Basic</th>
                                    <th>Standard</th>
                                    <th>Premium</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Number of Subjects</td>
                                    <td>2</td>
                                    <td>4</td>
                                    <td>Unlimited</td>
                                </tr>
                                <tr>
                                    <td>Hours Per Week</td>
                                    <td>8</td>
                                    <td>12</td>
                                    <td>20</td>
                                </tr>
                                <tr>
                                    <td>Learning Mode</td>
                                    <td>Online</td>
                                    <td>Online + Offline</td>
                                    <td>Online + Offline</td>
                                </tr>
                                <tr>
                                    <td>Study Materials</td>
                                    <td>✓</td>
                                    <td>✓</td>
                                    <td>Premium</td>
                                </tr>
                                <tr>
                                    <td>Progress Reports</td>
                                    <td>Monthly</td>
                                    <td>Weekly</td>
                                    <td>Daily</td>
                                </tr>
                                <tr>
                                    <td>Support</td>
                                    <td>Email</td>
                                    <td>WhatsApp</td>
                                    <td>24/7</td>
                                </tr>
                                <tr>
                                    <td>Doubt Sessions</td>
                                    <td>-</td>
                                    <td>✓</td>
                                    <td>1-on-1</td>
                                </tr>
                                <tr>
                                    <td>Career Counseling</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>✓</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <Footer />

            {/* Fixed WhatsApp Button */}
            <WhatsAppFloat />
        </div>
    )
}

export default PackagePrice
