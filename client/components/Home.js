import React from 'react'

const Home = (props) => {
    const { setUser } = props

    return (
        <div>
            <div>WeOut</div>
            <div>Upcoming Events</div>
            <div>Circles</div>
            <button type="button" className="btn btn-danger mx-2" onClick={() => setUser({})}>Sign Out</button>
        </div>
    )
}

export default Home