import React from 'react'
import AdminSidebar from '../components/AdminSidebar';
import RegisterForm from '../components/RegisterForm';

const AdminDashboard = (props) => {
    const email = props.match.params.email;
    return (
        <div>
            <AdminSidebar/>
            "ADMIN DASH"{email}

            <RegisterForm/>
        </div>
    )
}

export default AdminDashboard
