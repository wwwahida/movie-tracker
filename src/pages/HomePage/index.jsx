import React from 'react'
import { Link } from 'react-router-dom'

const linkStyle = {
    color: '#1746A2',
}

export default function HomePage() {
    return (
        <>
            <h1>top tv</h1>
            <em>all about the smaller silver screen</em>
            <ul>
                <li><Link to="/shows" style={linkStyle}>Explore Shows</Link></li>
                <li><Link to="/search" style={linkStyle}>Search your favourite shows</Link></li>
            </ul>
        </>
    )
}