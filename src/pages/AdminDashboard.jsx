import React, { useState } from 'react'
import Dashboard from '../components/Dashboard';
import Users from '../components/Users';
import Testimonials from '../components/Testimonials';
import Subjects from '../components/Subjects';
import Questions from '../components/Questions';
import { Link } from 'react-router-dom';
const AdminDashboard = () => {
  
  const [activeSection, setActiveSection] = useState('Dashboard');

  const menuItems = [
    { label: 'Dashboard', icon: 'fa-chart-line' },
    { label: 'Users', icon: 'fa-users' },
    { label: 'Testimonials', icon: 'fa-comment-dots' },
    { label: 'Subjects', icon: 'fa-book' },
    { label: 'Manage Question', icon: 'fa-question-circle' }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Users':
        return <Users />;
      case 'Testimonials':
        return <Testimonials />
      case 'Subjects':
        return <Subjects />
      case 'Manage Question':
        return <Questions />
      default:
        return <h2 className='fw-bolder'>Welcome to Admin Panel</h2>;
    }
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className="col-12 col-md-3 col-lg-2 text-white p-2 vh-100" style={{ backgroundColor: '#11999E' }}>
          <h5 className='fw-bolder ps-2 mt-3'><Link to={'/'} className='text-decoration-none text-white'>LevelUp <i className="fa-solid fa-terminal"></i></Link></h5>
          <ul className='fw-bolder p-2 admin-list list-unstyled'>
            {menuItems.map(({ label, icon }) => (
              <li key={label}>
                <button
                  className={`btn fw-bolder w-100 text-start d-flex align-items-center gap-2 ${activeSection === label ? 'btn-outline-light' : 'text-white'}`}
                  onClick={() => setActiveSection(label)}
                >
                  <i className={`fa-solid ${icon}`}></i> {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-12 col-md-9 col-lg-10 p-4">
          {renderContent()}
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard