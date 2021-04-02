import React, { useState } from 'react'
import { useLazyQuery, gql } from '@apollo/client'

const Login = (props) => {
    const [input, setInput] = useState({ email: "", password: "" })
    const [loginState, setLoginState] = useState(true)
    const { setUser } = props

    const findUser = gql`
        query RootQuery {
            user(email: "${input.email}", password: "${input.password}") {
                id
                email
                name
            }
        }
    `
    const [getUser] = useLazyQuery(findUser, {
        onCompleted: (data) => {
            setUser(data.user)
        }
    })

    const logIn = () => {
        getUser()
    }

    const signUp = () => {

    }

    const handleSubmit = (event) => {
        if (event) event.preventDefault()
        event.target.name === 'logIn' ? logIn() : signUp()
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
        </div>
    )
}

export default Login