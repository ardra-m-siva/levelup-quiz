import React, { useEffect, useState } from 'react'
import { getAllUserDetailsApi } from '../services/allApi'

const Users = () => {
    const [allUsers, setAllUsers] = useState([])

    useEffect(() => {
        getAllUsersList()
    }, [])

    const getAllUsersList = async () => {
        try {
            const token = sessionStorage.getItem('token')
            const reqHeader = {
                "Authorization": `Bearer ${token}`
            }
            const result = await getAllUserDetailsApi(reqHeader)            
            if (result.status == 200) {
                console.log(result.data);
                setAllUsers(result.data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>UserId</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allUsers.length > 0 ?
                            allUsers.map(item => (
                                <tr key={item._id}>
                                    <td>{item._id}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                </tr>
                            ))
                       :
                       <tr>
                            <td>No Data Found</td>
                       </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Users