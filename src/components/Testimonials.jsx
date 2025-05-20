import React, { useEffect, useState } from 'react'
import { getAllTestimonialDetailApi, updateTestimonialCheckApi, updateTestimonialCrossApi } from '../services/allApi'

const Testimonials = () => {
    const [allTestimonials, setAllTestimonials] = useState([])
    const [statusState, setStatusState] = useState(false)
    const token = sessionStorage.getItem('token')
    const reqHeader = {
        "Authorization": `Bearer ${token}`
    }

    useEffect(() => {
        getAllTestimonials()
    }, [statusState])

    const getAllTestimonials = async () => {
        try {
            const result = await getAllTestimonialDetailApi(reqHeader)
            if (result.status == 200) {
                setAllTestimonials(result.data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleCheck = async (id) => {
        try {
            const result = await updateTestimonialCheckApi({ id }, reqHeader)
            setStatusState(result.data)
        } catch (error) {
            console.log(error);
        }
    }

    const handleCross = async (id) => {
        try {
            const result = await updateTestimonialCrossApi({ id }, reqHeader)
            setStatusState(result.data)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allTestimonials?.length > 0 ?
                            allTestimonials.map(item => (
                                <tr key={item._id}>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.message}</td>
                                    <td>{
                                        item.status == "pending" ? (
                                            <div className='d-flex'>
                                                <button onClick={() => handleCheck(item._id)} className='btn btn-success me-1'><i className="fa-solid fa-check"></i></button>
                                                <button onClick={() => handleCross(item._id)} className='btn btn-danger'><i className="fa-solid fa-xmark"></i></button>
                                            </div>
                                        ) : item.status == "approved" ? (
                                            <button className='btn btn-success'>Approved</button>
                                        ) : (
                                            <button className='btn btn-danger'>Rejected</button>
                                        )
                                    }</td>
                                </tr>
                            ))
                            :
                            <tr>
                                <td>No data available</td>
                            </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Testimonials