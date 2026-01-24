import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'

function Dashboard() {
    const [stats, setStats] = useState({
        totalStudents: 0,
        totalTeachers: 0,
        totalCourses: 0,
        totalRevenue: 0,
        activeEnrollments: 0,
        pendingRequests: 0,
    })

    const [recentActivities, setRecentActivities] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Simulate data fetching - replace with actual API calls
        const fetchDashboardData = async () => {
            setLoading(true)
            // Simulate API delay
            setTimeout(() => {
                setStats({
                    totalStudents: 1248,
                    totalTeachers: 45,
                    totalCourses: 32,
                    totalRevenue: 125000,
                    activeEnrollments: 856,
                    pendingRequests: 12,
                })

                setRecentActivities([
                    {
                        id: 1,
                        type: 'enrollment',
                        student: 'John Doe',
                        course: 'Mathematics',
                        time: '2 hours ago',
                        status: 'completed',
                    },
                    {
                        id: 2,
                        type: 'payment',
                        student: 'Jane Smith',
                        course: 'Physics',
                        time: '5 hours ago',
                        status: 'completed',
                    },
                    {
                        id: 3,
                        type: 'enrollment',
                        student: 'Mike Johnson',
                        course: 'Chemistry',
                        time: '1 day ago',
                        status: 'pending',
                    },
                    {
                        id: 4,
                        type: 'teacher',
                        teacher: 'Dr. Sarah Williams',
                        action: 'New teacher registered',
                        time: '2 days ago',
                        status: 'completed',
                    },
                    {
                        id: 5,
                        type: 'enrollment',
                        student: 'Emily Brown',
                        course: 'Biology',
                        time: '2 days ago',
                        status: 'completed',
                    },
                ])
                setLoading(false)
            }, 500)
        }

        fetchDashboardData()
    }, [])

    const statCards = [
        {
            title: 'Total Students',
            value: stats.totalStudents,
            icon: '👥',
            color: '#3498db',
            change: '+12%',
            link: '/admin/students',
        },
        {
            title: 'Total Teachers',
            value: stats.totalTeachers,
            icon: '👨‍🏫',
            color: '#9b59b6',
            change: '+5%',
            link: '/admin/teachers',
        },
        {
            title: 'Total Courses',
            value: stats.totalCourses,
            icon: '📚',
            color: '#e74c3c',
            change: '+8%',
            link: '/admin/courses',
        },
        {
            title: 'Total Revenue',
            value: `$${stats.totalRevenue.toLocaleString()}`,
            icon: '💰',
            color: '#27ae60',
            change: '+15%',
            link: '#',
        },
        {
            title: 'Active Enrollments',
            value: stats.activeEnrollments,
            icon: '✅',
            color: '#f39c12',
            change: '+20%',
            link: '#',
        },
        {
            title: 'Pending Requests',
            value: stats.pendingRequests || 0,
            icon: '⏳',
            color: '#e67e22',
            change: '-3%',
            link: '#',
        },
    ]

    const quickActions = [
        { label: 'Add Student', icon: '➕', link: '/admin/students', color: '#3498db' },
        { label: 'Add Teacher', icon: '👨‍🏫', link: '/admin/teachers', color: '#9b59b6' },
        { label: 'Create Course', icon: '📚', link: '/admin/courses', color: '#e74c3c' },
        { label: 'View Reports', icon: '📊', link: '#', color: '#27ae60' },
    ]

    const getActivityIcon = (type) => {
        switch (type) {
            case 'enrollment':
                return '📝'
            case 'payment':
                return '💳'
            case 'teacher':
                return '👨‍🏫'
            default:
                return '📌'
        }
    }

    const getStatusBadge = (status) => {
        return status === 'completed' ? 'status-completed' : 'status-pending'
    }

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <div>
                    <h2 className="dashboard-title">Dashboard Overview</h2>
                    <p className="dashboard-subtitle">Welcome back! Here's what's happening today.</p>
                </div>
                <div className="dashboard-date">
                    {new Date().toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })}
                </div>
            </div>

            {/* Statistics Cards */}
            <div className="stats-grid">
                {statCards.map((card, index) => (
                    <Link
                        key={index}
                        to={card.link}
                        className="stat-card"
                        style={{ '--card-color': card.color }}
                    >
                        <div className="stat-card-content">
                            <div className="stat-card-icon" style={{ backgroundColor: `${card.color}20` }}>
                                <span style={{ color: card.color }}>{card.icon}</span>
                            </div>
                            <div className="stat-card-info">
                                <h3 className="stat-card-value">{card.value}</h3>
                                <p className="stat-card-title">{card.title}</p>
                            </div>
                        </div>
                        <div className="stat-card-footer">
                            <span className={`stat-change ${card.change.startsWith('+') ? 'positive' : 'negative'}`}>
                                {card.change}
                            </span>
                            <span className="stat-period">vs last month</span>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Quick Actions */}
            <div className="dashboard-section">
                <h3 className="section-title">Quick Actions</h3>
                <div className="quick-actions">
                    {quickActions.map((action, index) => (
                        <Link
                            key={index}
                            to={action.link}
                            className="quick-action-card"
                            style={{ '--action-color': action.color }}
                        >
                            <div className="quick-action-icon" style={{ backgroundColor: `${action.color}20` }}>
                                <span style={{ color: action.color }}>{action.icon}</span>
                            </div>
                            <span className="quick-action-label">{action.label}</span>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Recent Activities */}
            <div className="dashboard-section">
                <div className="section-header">
                    <h3 className="section-title">Recent Activities</h3>
                    <Link to="#" className="view-all-link">View All →</Link>
                </div>
                <div className="activities-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Activity</th>
                                <th>Details</th>
                                <th>Time</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan="4" className="loading-cell">
                                        <div className="loading-spinner"></div>
                                        Loading activities...
                                    </td>
                                </tr>
                            ) : recentActivities.length === 0 ? (
                                <tr>
                                    <td colSpan="4" className="empty-cell">
                                        No recent activities
                                    </td>
                                </tr>
                            ) : (
                                recentActivities.map((activity) => (
                                    <tr key={activity.id}>
                                        <td>
                                            <div className="activity-type">
                                                <span className="activity-icon">{getActivityIcon(activity.type)}</span>
                                                <span className="activity-type-text">
                                                    {activity.type === 'enrollment' ? 'Enrollment' :
                                                        activity.type === 'payment' ? 'Payment' :
                                                            'Teacher Registration'}
                                                </span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="activity-details">
                                                {activity.student && (
                                                    <span className="activity-name">{activity.student}</span>
                                                )}
                                                {activity.teacher && (
                                                    <span className="activity-name">{activity.teacher}</span>
                                                )}
                                                {activity.action && (
                                                    <span className="activity-action">{activity.action}</span>
                                                )}
                                                {activity.course && (
                                                    <span className="activity-course"> - {activity.course}</span>
                                                )}
                                            </div>
                                        </td>
                                        <td>
                                            <span className="activity-time">{activity.time}</span>
                                        </td>
                                        <td>
                                            <span className={`status-badge ${getStatusBadge(activity.status)}`}>
                                                {activity.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Additional Info Cards */}
            <div className="info-grid">
                <div className="info-card">
                    <h4 className="info-card-title">📈 Growth Rate</h4>
                    <div className="info-card-content">
                        <div className="growth-metric">
                            <span className="growth-value">+18%</span>
                            <span className="growth-label">This Month</span>
                        </div>
                        <div className="growth-chart">
                            <div className="chart-bar" style={{ height: '60%' }}></div>
                            <div className="chart-bar" style={{ height: '75%' }}></div>
                            <div className="chart-bar" style={{ height: '90%' }}></div>
                            <div className="chart-bar" style={{ height: '100%' }}></div>
                            <div className="chart-bar" style={{ height: '85%' }}></div>
                            <div className="chart-bar" style={{ height: '95%' }}></div>
                        </div>
                    </div>
                </div>

                <div className="info-card">
                    <h4 className="info-card-title">🎯 Top Courses</h4>
                    <div className="info-card-content">
                        <div className="top-courses-list">
                            <div className="course-item">
                                <span className="course-name">Mathematics</span>
                                <span className="course-enrollments">245 students</span>
                            </div>
                            <div className="course-item">
                                <span className="course-name">Physics</span>
                                <span className="course-enrollments">189 students</span>
                            </div>
                            <div className="course-item">
                                <span className="course-name">Chemistry</span>
                                <span className="course-enrollments">156 students</span>
                            </div>
                            <div className="course-item">
                                <span className="course-name">Biology</span>
                                <span className="course-enrollments">134 students</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
