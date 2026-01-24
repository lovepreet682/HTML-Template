import React, { useState, useEffect } from 'react'
import '../students/StudentSection.css'

function TeacherSection() {
    const [students, setStudents] = useState([])
    const [loading, setLoading] = useState(true)
    const [showAddForm, setShowAddForm] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [filterStatus, setFilterStatus] = useState('all')
    const [editingStudent, setEditingStudent] = useState(null)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        class: '',
        school: '',
        address: '',
        parentName: '',
        parentPhone: '',
        isActive: true,
    })

    useEffect(() => {
        // Simulate data fetching - replace with actual API calls
        const fetchStudents = async () => {
            setLoading(true)
            setTimeout(() => {
                setStudents([
                    {
                        id: 1,
                        name: 'John Doe',
                        email: 'john.doe@example.com',
                        phone: '+1234567890',
                        class: '10th Grade',
                        school: 'ABC High School',
                        address: '123 Main St, City',
                        parentName: 'Jane Doe',
                        parentPhone: '+1234567891',
                        isActive: true,
                        createdAt: '2024-01-15',
                    },
                    {
                        id: 2,
                        name: 'Jane Smith',
                        email: 'jane.smith@example.com',
                        phone: '+1234567892',
                        class: '11th Grade',
                        school: 'XYZ High School',
                        address: '456 Oak Ave, City',
                        parentName: 'Bob Smith',
                        parentPhone: '+1234567893',
                        isActive: true,
                        createdAt: '2024-01-20',
                    },
                    {
                        id: 3,
                        name: 'Mike Johnson',
                        email: 'mike.johnson@example.com',
                        phone: '+1234567894',
                        class: '9th Grade',
                        school: 'DEF High School',
                        address: '789 Pine Rd, City',
                        parentName: 'Sarah Johnson',
                        parentPhone: '+1234567895',
                        isActive: false,
                        createdAt: '2024-02-01',
                    },
                ])
                setLoading(false)
            }, 500)
        }

        fetchStudents()
    }, [])

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (editingStudent) {
            // Update existing student
            setStudents((prev) =>
                prev.map((student) =>
                    student.id === editingStudent.id
                        ? { ...formData, id: editingStudent.id, createdAt: editingStudent.createdAt }
                        : student
                )
            )
            setEditingStudent(null)
        } else {
            // Add new student
            const newStudent = {
                ...formData,
                id: Date.now(),
                createdAt: new Date().toISOString().split('T')[0],
            }
            setStudents((prev) => [...prev, newStudent])
        }

        // Reset form
        setFormData({
            name: '',
            email: '',
            phone: '',
            class: '',
            school: '',
            address: '',
            parentName: '',
            parentPhone: '',
            isActive: true,
        })
        setShowAddForm(false)
    }

    const handleEdit = (student) => {
        setFormData({
            name: student.name,
            email: student.email,
            phone: student.phone,
            class: student.class,
            school: student.school,
            address: student.address,
            parentName: student.parentName,
            parentPhone: student.parentPhone,
            isActive: student.isActive,
        })
        setEditingStudent(student)
        setShowAddForm(true)
    }

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this student?')) {
            setStudents((prev) => prev.filter((student) => student.id !== id))
        }
    }

    const handleToggleActive = (id) => {
        setStudents((prev) =>
            prev.map((student) =>
                student.id === id ? { ...student, isActive: !student.isActive } : student
            )
        )
    }

    const handleCancel = () => {
        setShowAddForm(false)
        setEditingStudent(null)
        setFormData({
            name: '',
            email: '',
            phone: '',
            class: '',
            school: '',
            address: '',
            parentName: '',
            parentPhone: '',
            isActive: true,
        })
    }

    // Filter students based on search and status
    const filteredStudents = students.filter((student) => {
        const matchesSearch =
            student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.class.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.school.toLowerCase().includes(searchTerm.toLowerCase())

        const matchesStatus =
            filterStatus === 'all' ||
            (filterStatus === 'active' && student.isActive) ||
            (filterStatus === 'inactive' && !student.isActive)

        return matchesSearch && matchesStatus
    })

    return (
        <div className="student-section">
            <div className="section-header">
                <div>
                    <h2 className="section-title">Student Management</h2>
                    <p className="section-subtitle">Manage all students in the system</p>
                </div>
                <button
                    className="btn-add-student"
                    onClick={() => {
                        setShowAddForm(true)
                        setEditingStudent(null)
                    }}
                >
                    <span className="btn-icon">➕</span>
                    Add New Student
                </button>
            </div>

            {/* Search and Filter Bar */}
            <div className="search-filter-bar">
                <div className="search-box">
                    <span className="search-icon">🔍</span>
                    <input
                        type="text"
                        placeholder="Search by name, email, class, or school..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                    />
                </div>
                <div className="filter-box">
                    <label>Status:</label>
                    <select
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                        className="filter-select"
                    >
                        <option value="all">All</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                </div>
            </div>

            {/* Add/Edit Student Form */}
            {showAddForm && (
                <div className="form-modal-overlay" onClick={handleCancel}>
                    <div className="form-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="form-modal-header">
                            <h3>{editingStudent ? 'Edit Student' : 'Add New Student'}</h3>
                            <button className="close-btn" onClick={handleCancel}>✕</button>
                        </div>
                        <form onSubmit={handleSubmit} className="student-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Student Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Enter student name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="student@example.com"
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="+1234567890"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="class">Class/Grade *</label>
                                    <input
                                        type="text"
                                        id="class"
                                        name="class"
                                        value={formData.class}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="10th Grade"
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="school">School Name *</label>
                                    <input
                                        type="text"
                                        id="school"
                                        name="school"
                                        value={formData.school}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="School name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address">Address</label>
                                    <input
                                        type="text"
                                        id="address"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        placeholder="Full address"
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="parentName">Parent/Guardian Name</label>
                                    <input
                                        type="text"
                                        id="parentName"
                                        name="parentName"
                                        value={formData.parentName}
                                        onChange={handleInputChange}
                                        placeholder="Parent name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="parentPhone">Parent Phone</label>
                                    <input
                                        type="tel"
                                        id="parentPhone"
                                        name="parentPhone"
                                        value={formData.parentPhone}
                                        onChange={handleInputChange}
                                        placeholder="+1234567890"
                                    />
                                </div>
                            </div>

                            <div className="form-group checkbox-group">
                                <label className="checkbox-label">
                                    <input
                                        type="checkbox"
                                        name="isActive"
                                        checked={formData.isActive}
                                        onChange={handleInputChange}
                                    />
                                    <span>Active Student</span>
                                </label>
                            </div>

                            <div className="form-actions">
                                <button type="button" className="btn-cancel" onClick={handleCancel}>
                                    Cancel
                                </button>
                                <button type="submit" className="btn-submit">
                                    {editingStudent ? 'Update Student' : 'Add Student'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Students Table */}
            <div className="students-table-container">
                {loading ? (
                    <div className="loading-state">
                        <div className="loading-spinner"></div>
                        <p>Loading students...</p>
                    </div>
                ) : filteredStudents.length === 0 ? (
                    <div className="empty-state">
                        <span className="empty-icon">📋</span>
                        <p>No students found</p>
                        {searchTerm || filterStatus !== 'all' ? (
                            <button
                                className="btn-clear-filters"
                                onClick={() => {
                                    setSearchTerm('')
                                    setFilterStatus('all')
                                }}
                            >
                                Clear Filters
                            </button>
                        ) : (
                            <button
                                className="btn-add-first"
                                onClick={() => setShowAddForm(true)}
                            >
                                Add First Student
                            </button>
                        )}
                    </div>
                ) : (
                    <table className="students-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Class</th>
                                <th>School</th>
                                <th>Parent Name</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredStudents.map((student) => (
                                <tr key={student.id}>
                                    <td>
                                        <div className="student-name-cell">
                                            <span className="student-avatar">
                                                {student.name.charAt(0).toUpperCase()}
                                            </span>
                                            <span className="student-name">{student.name}</span>
                                        </div>
                                    </td>
                                    <td>{student.email}</td>
                                    <td>{student.phone}</td>
                                    <td>
                                        <span className="class-badge">{student.class}</span>
                                    </td>
                                    <td>{student.school}</td>
                                    <td>{student.parentName || '-'}</td>
                                    <td>
                                        <button
                                            className={`status-toggle ${student.isActive ? 'active' : 'inactive'}`}
                                            onClick={() => handleToggleActive(student.id)}
                                            title={student.isActive ? 'Click to deactivate' : 'Click to activate'}
                                        >
                                            {student.isActive ? '✅ Active' : '❌ Inactive'}
                                        </button>
                                    </td>
                                    <td>
                                        <div className="action-buttons">
                                            <button
                                                className="btn-action btn-edit"
                                                onClick={() => handleEdit(student)}
                                                title="Edit"
                                            >
                                                ✏️
                                            </button>
                                            <button
                                                className="btn-action btn-delete"
                                                onClick={() => handleDelete(student.id)}
                                                title="Delete"
                                            >
                                                🗑️
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            {/* Summary Stats */}
            {!loading && students.length > 0 && (
                <div className="summary-stats">
                    <div className="stat-item">
                        <span className="stat-label">Total Students:</span>
                        <span className="stat-value">{students.length}</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-label">Active:</span>
                        <span className="stat-value active-count">
                            {students.filter((s) => s.isActive).length}
                        </span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-label">Inactive:</span>
                        <span className="stat-value inactive-count">
                            {students.filter((s) => !s.isActive).length}
                        </span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default TeacherSection
