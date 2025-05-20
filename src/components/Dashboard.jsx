import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { allTestimonialCountApi, allUserCountApi } from '../services/allApi';

const Dashboard = () => {
    const [counts, setCounts] = useState({
        userCount: 0,
        testimonialCount: 0,
    })
    const token = sessionStorage.getItem("token");
    const reqHeaders = {
        Authorization: `Bearer ${token}`,
    }

    useEffect(() => {
        getAllUserCount()
        getAllTestimonialCount()
    }, [])

    const getAllUserCount = async () => {
        try {
            const result = await allUserCountApi(reqHeaders)
            setCounts(prev =>({ ...prev, userCount: result.data }))
        } catch (err) {
            console.log(err);
        }
    }
    const getAllTestimonialCount = async () => {
        try {
            const result = await allTestimonialCountApi(reqHeaders)
            setCounts(prev=>({ ...prev, testimonialCount: result.data }))
        } catch (err) {
            console.log(err);
        }
    }
    const dashboardData = [
        { title: 'Total Users', value: counts?.userCount, variant: 'light' ,text:"All users excluding the Admins"},
        { title: 'Internal Subjects', value: '0', variant: 'secondary',text:"Subjects added manually only" }, //not added 
        { title: 'Added Questions', value: '0', variant: 'info',text:"Questions added to manually added subjects" }, //not added
        { title: 'Total Testimonial', value: counts?.testimonialCount, variant: 'dark' ,text:"All testimonials received through the site"} 
    ];

    return (
        < >
            <h4>Dashboard</h4>
            <div className="row">
                {dashboardData.map(({ title, value, variant ,text}) => (
                    <div className="col-lg-3" key={title}>
                        <Card
                            bg={variant.toLowerCase()}
                            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                            style={{ width: '18rem' }}
                            className="mb-2 shadow"
                        >
                            <Card.Header>{title}</Card.Header>
                            <Card.Body>
                                <Card.Title className='fs-2'>{value} </Card.Title>
                                <Card.Text>
                                    {text}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>

        </>
    )
}

export default Dashboard