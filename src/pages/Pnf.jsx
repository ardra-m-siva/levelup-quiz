import React from 'react'
import { Link } from 'react-router-dom'

const Pnf = () => {
    return (
        <>
            <div className="container d-flex flex-column align-items-center justify-content-center vh-100 text-center">
                <h1 className="display-1 text-danger">404</h1>
                <h2 className="mb-3">Page Not Found</h2>
                <p className="mb-4 text-muted">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <Link to="/" className="btn btn-primary">
                    Go Back to Home
                </Link>
            </div>
        </>
    )
}

export default Pnf