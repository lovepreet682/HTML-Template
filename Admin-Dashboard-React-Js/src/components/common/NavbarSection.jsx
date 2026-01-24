import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../pages/Homepage.css'
import BookDemoModal from '../user/BookDemoModal'

function NavbarSection({ isMenuOpen, setIsMenuOpen }) {
    const [showDemoModal, setShowDemoModal] = useState(false);

    useEffect(() => {
        // Smooth scrolling for anchor links
        const handleAnchorClick = (e) => {
            const href = e.target.getAttribute('href')
            if (href && href.startsWith('#')) {
                e.preventDefault()
                const target = document.querySelector(href)
                if (target) {
                    const offsetTop = target.offsetTop - 80
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth',
                    })
                    // Close mobile menu if open
                    if (window.innerWidth <= 768) {
                        setIsMenuOpen(false)
                    }
                }
            }
        }

        // Active link highlighting on scroll
        const handleScroll = () => {
            const sections = document.querySelectorAll('section[id]')
            let current = ''
            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 100
                const sectionHeight = section.clientHeight
                if (
                    window.scrollY >= sectionTop &&
                    window.scrollY < sectionTop + sectionHeight
                ) {
                    current = section.getAttribute('id')
                }
            })

            document.querySelectorAll('.nav-links a').forEach((link) => {
                link.classList.remove('active')
                const href = link.getAttribute('href')
                if (href === `#${current}` || (current === 'home' && href === '/')) {
                    link.classList.add('active')
                }
            })
        }

        document.querySelectorAll('.nav-links a').forEach((link) => {
            link.addEventListener('click', handleAnchorClick)
        })

        window.addEventListener('scroll', handleScroll)
        handleScroll() // Initial check

        return () => {
            document.querySelectorAll('.nav-links a').forEach((link) => {
                link.removeEventListener('click', handleAnchorClick)
            })
            window.removeEventListener('scroll', handleScroll)
        }
    }, [setIsMenuOpen])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav className="navbar" id="navbar">
            <div className="container-fluid">
                <Link to="/" className="logo">
                    🎓 Scorpio  <span>Tutorials</span>
                </Link>
                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`} id="navLinks">
                    <li>
                        <Link to="/" className="active">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/package">Package</Link>
                    </li>
                    <li>
                        <Link to="/career">Career</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/login" className="nav-cta mx-2">
                            Login
                        </Link>
                        <button className="nav-cta" onClick={() => setShowDemoModal(true)}>
                            Book a Demo
                        </button>
                    </li>
                </ul>
                <button
                    className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                    id="menuToggle"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <BookDemoModal showModal={showDemoModal} setShowModal={setShowDemoModal} />
        </nav>
    )
}

export default NavbarSection
