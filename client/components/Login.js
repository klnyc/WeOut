import React, { useState } from 'react'
import { useMutation, useLazyQuery, gql } from '@apollo/client'

const Login = (props) => {
    const { setUser } = props
    const [input, setInput] = useState({ email: "", password: "" })
    const [loginState, setLoginState] = useState(true)
    const [error, setError] = useState("")
    const variables = { variables: { email: input.email, password: input.password } }

    const LOGIN = gql`
        query RootQuery($email: String, $password: String) {
            user(email: $email, password: $password) {
                id
                email
                name
            }
        }
    `

    const SIGNUP = gql`
        mutation RootQuery($email: String, $password: String) {
            signUp(email: $email, password: $password) {
                id
                email
                name
            }
        }
    `

    const [logIn] = useLazyQuery(LOGIN, {
        onCompleted: (data) => data.user ? setUser(data.user) : setError("Invalid credentials")
    })

    const [signUp] = useMutation(SIGNUP, {
        onCompleted: (data) => setUser(data.signUp)
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        event.target.name === 'logIn' ? logIn({ variables }) : signUp({ variables })
    }

    const handleInputChange = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }

    return (
        <div>
            <div>WeOut</div>
            <div>{loginState ? "Login" : "Sign Up"}</div>
            <form onSubmit={handleSubmit} name={loginState ? "logIn" : "signUp"}>
                <div className="form-group">
                    <input type="email" name="email" className="form-control" onChange={handleInputChange} value={input.email} placeholder="Email" />
                </div>
                <div className="form-group">
                    <input type="password" name="password" className="form-control" onChange={handleInputChange} value={input.password} placeholder="Password" />
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary">{loginState ? "Login" : "Sign Up"}</button>
                    <button type="button" className="btn btn-info mx-2" onClick={() => setLoginState(!loginState)}>{loginState ? "Create account" : "I have an account"}</button>
                </div>
            </form>
            <div>{error}</div>
        </div>
    )
}

export default Login