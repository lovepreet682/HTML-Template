import React, { useState, useEffect } from 'react'
import { Outlet, useNavigate, Link, useLocation } from 'react-router-dom'
import './AdminLayout.css'

function AdminLayout() {
    const navigate = useNavigate()
    const location = useLocation()
    const [showProfileDropdown, setShowProfileDropdown] = useState(false)
    const [userName, setUserName] = useState('Admin User')

    // Get user name from localStorage or use default
    useEffect(() => {
        const storedUser = localStorage.getItem('user')
        if (storedUser) {
            try {
                const user = JSON.parse(storedUser)
                if (user.name) {
                    setUserName(user.name)
                }
            } catch (error) {
                console.error('Error parsing user data:', error)
            }
        }
    }, [])

    const handleLogout = () => {
        // Clear user data from localStorage
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        // Navigate to login page
        navigate('/login')
    }

    const handleProfile = () => {
        setShowProfileDropdown(false)
        // Navigate to profile page or open profile modal
        // You can customize this based on your needs
        console.log('Navigate to profile')
    }

    const menuItems = [
        { path: '/admin/dashboard', label: 'Dashboard', icon: '📊' },
        { path: '/admin/students', label: 'Students', icon: '👥' },
        { path: '/admin/teachers', label: 'Teachers', icon: '👨‍🏫' },
        { path: '/admin/courses', label: 'Courses', icon: '📚' },
        { path: '/admin/settings', label: 'Settings', icon: '⚙️' },
    ]

    return (
        <div className="admin-layout">
            {/* Left Sidebar */}
            <aside className="admin-sidebar">
                <div className="sidebar-header">
                    <h2 className="sidebar-logo">
                        🎓 Scorpio <span>Tutorials</span>
                    </h2>
                </div>
                <nav className="sidebar-nav">
                    <ul className="nav-menu">
                        {menuItems.map((item) => (
                            <li key={item.path} className="nav-item">
                                <Link
                                    to={item.path}
                                    className={`nav-link ${location.pathname === item.path ? 'active' : ''
                                        }`}
                                >
                                    <span className="nav-icon">{item.icon}</span>
                                    <span className="nav-label">{item.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>

            {/* Main Content Area */}
            <div className="admin-main">
                {/* Top Header */}
                <header className="admin-header">
                    <div className="header-content">
                        <h1 className="page-title">Admin Panel</h1>
                        <div className="header-right">
                            <div className="user-menu">
                                <button
                                    className="user-menu-button"
                                    onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                                >
                                    <span className="user-name">{userName}</span>
                                    <span className="user-avatar">👤</span>
                                    <span className="dropdown-arrow">▼</span>
                                </button>
                                {showProfileDropdown && (
                                    <div className="profile-dropdown">
                                        <button
                                            className="dropdown-item"
                                            onClick={handleProfile}
                                        >
                                            <span className="dropdown-icon">👤</span>
                                            Profile
                                        </button>
                                        <button
                                            className="dropdown-item logout-item"
                                            onClick={handleLogout}
                                        >
                                            <span className="dropdown-icon">🚪</span>
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="admin-content">
                    <Outlet />
                </main>
            </div>

            {/* Overlay for mobile when sidebar is open */}
            {showProfileDropdown && (
                <div
                    className="overlay"
                    onClick={() => setShowProfileDropdown(false)}
                ></div>
            )}
        </div>
    )
}

export default AdminLayout
