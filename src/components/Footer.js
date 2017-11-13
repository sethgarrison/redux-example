import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => (
    <div className="footer">
        <Link to="/">All</Link>
        <Link to="/completed">COMPLETED</Link>
        <Link to="/active">ACTIVE</Link>
    </div>
)