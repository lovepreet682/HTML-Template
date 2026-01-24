import React from 'react'

function TeacherList() {
    return (
        <>
            <section className="section" id="faculty">
                <div className="container">
                    <h2 className="section-title">Meet Our Expert Faculty</h2>
                    <p className="section-subtitle">
                        Dedicated professionals committed to your child's success
                    </p>
                    <div className="faculty-grid">
                        <div className="faculty-card">
                            <div className="faculty-avatar">👨‍🏫</div>
                            <h3>Mr. Rajesh Kumar</h3>
                            <p className="specialty">Mathematics & Physics</p>
                            <p>M.Sc., B.Ed • 15 years experience</p>
                        </div>
                        <div className="faculty-card">
                            <div className="faculty-avatar">👩‍🏫</div>
                            <h3>Ms. Priya Sharma</h3>
                            <p className="specialty">English & Literature</p>
                            <p>M.A. English • 12 years experience</p>
                        </div>
                        <div className="faculty-card">
                            <div className="faculty-avatar">👨‍🔬</div>
                            <h3>Dr. Amit Patel</h3>
                            <p className="specialty">Chemistry & Biology</p>
                            <p>Ph.D. • 18 years experience</p>
                        </div>
                        <div className="faculty-card">
                            <div className="faculty-avatar">👩‍💼</div>
                            <h3>Ms. Neha Gupta</h3>
                            <p className="specialty">Commerce & Accounts</p>
                            <p>M.Com, CA • 10 years experience</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TeacherList