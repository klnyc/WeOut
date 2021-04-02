import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './Login'
import Home from './Home'

const App = () => {
    const [user, setUser] = useState({})
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/">{user.id ? <Home /> : <Login setUser={setUser} />}</Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App