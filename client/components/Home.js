import React from 'react'

const Home = (props) => {
    const { setUser } = props
    const logOut = () => setUser({})

    return (
        <div>
            <div>WeOut</div>
            <button type="button" className="btn btn-danger mx-2" onClick={() => logOut()}>Sign Out</button>
        </div>
    )
}

export default Home