import React from 'react'
import UserSidebar from '../components/UserSidebar';

const UserDashBoard = (props) => {
    const email =props.match.params.email;
    return (
        <div>
            <UserSidebar/>
            "USER DASH"{email}
        </div>
    )
}

export default UserDashBoard
