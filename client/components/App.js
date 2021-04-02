import React, { useState } from 'react'
import { useQuery, gql } from '@apollo/client';
import Login from './Login'

const findUser = gql`
        query RootQuery {
            user(id: "2") {
                email
                password
                name
            }
        }
    `

const App = () => {
    const { loading, error, data } = useQuery(findUser)
    const [user, setUser] = useState({})

    return (
        <div>
            <div>Hello Kenneth LAI</div>
            <div>{loading ? 'loading' : data.user.email}</div>
            <div>{loading ? 'loading' : data.user.name}</div>
            <div>{error && 'ERROR :('}</div>
            <button type="submit" className="btn btn-primary m-2">Cool</button>
            <button type="submit" className="btn btn-danger p-4">Cool</button>
        </div>
    )
}

export default App