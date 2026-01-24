import React from 'react'
import Homepage from './components/pages/Homepage.jsx'
import AboutUs from './components/pages/AboutUs.jsx'
import PackagePrice from './components/pages/PackagePrice.jsx'
import Contact from './components/pages/Contact.jsx'
import { Route, Routes, Navigate } from 'react-router-dom'
import Login from './components/user/Login.jsx'
import Career from './components/user/Career.jsx'
import AdminLayout from './components/admin/components/AdminLayout.jsx'
import Dashboard from './components/admin/components/Dashboard.jsx'
import StudentSection from './components/admin/components/students/StudentSection.jsx'
import TeacherSection from './components/admin/components/teachers/TeacherSection.jsx'
function App() {
  return (
    <div>
      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="students" element={<StudentSection />} />
          <Route path="teachers" element={<TeacherSection />} />

        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/package" element={<PackagePrice />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </div>
  )
}

export default App