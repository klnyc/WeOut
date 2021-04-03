import React from 'react'

const Home = (props) => {
    const { user, setUser } = props

    return (
        <div>
            <div>WeOut</div>
            <div>Welcome {user.name}!</div>
            <div>Circles</div>
            {user.circles.map((circle, index) => <div key={index}>{circle.name} {circle.description}</div>)}
            <div>Upcoming Events</div>
            <button type="button" className="btn btn-danger mx-2" onClick={() => setUser({})}>Sign Out</button>
        </div>
    )
}

export default Home