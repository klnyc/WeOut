import React from 'react'
import { useQuery, gql } from '@apollo/client';

const findUser = gql`
        query RootQuery {
            user(id: "2") {
                email
                password
                name
            }
        }
    `
// client.query({ query: findUser }).then(result => console.log(result))

const App = () => {
    const { loading, error, data } = useQuery(findUser)
    return (
        <div>
            <div>Hello Kenneth LAI</div>
            <div>{loading ? 'loading' : data.user.email}</div>
            <div>{loading ? 'loading' : data.user.name}</div>
            <div>{error && 'ERROR :('}</div>
        </div>
    )
}

export default App