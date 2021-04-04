import React from 'react'

const Home = (props) => {
    const { user, setUser } = props

    return (
        <div>
            <div className="circles-bar">
                <div>WeOut</div>
                {user.circles.map((circle, index) => 
                <div key={index} className="circle"><p>{circle.name}</p></div>)}
            </div>
            
            <div className="main-section">
                <h6>Upcoming Events</h6>
                {user.events.map((event, index) => 
                    <div key={index}>
                        <div>{event.name}</div>
                        <div>{event.location}</div>
                        <div>{event.description}</div>
                        <div>{event.date}</div>
                    </div>)}
                <button type="button" className="btn btn-danger mx-2" onClick={() => setUser({})}>Sign Out</button>
            </div>
            
        </div>
    )
}

export default Home