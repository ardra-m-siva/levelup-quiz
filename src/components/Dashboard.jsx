import React from 'react'
import { Card } from 'react-bootstrap'

const Dashboard = () => {

    const dashboardData = [ 
        { title: 'Total Users', value: '1245', variant: 'light' },
        { title: 'Subjects', value: '12', variant: 'secondary' },
        { title: 'Added Questions', value: '3200', variant: 'info' },
        { title: 'Total Testimonial', value: '120', variant: 'dark' }
    ];

    return (
        < >
            <h4>Dashboard</h4>
            <div className="row">
                {dashboardData.map(({ title, value, variant }) => (
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
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
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