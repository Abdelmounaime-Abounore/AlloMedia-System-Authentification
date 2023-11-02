import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { Route, Redirect } from 'react-router-dom';
import Home from './Home/index.jsx'


const Private = ({
    component: Component, 
    isAuthenticated
}) => {
    return (
    <Route
      render={(props) =>
        isAuthenticated ? (
          <Home {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
    )
}






