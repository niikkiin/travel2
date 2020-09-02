import React from 'react'
import { Route } from 'react-router-dom'


import FeedLayout from 'layouts/FeedLayout'

const FeedRoutes = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            <FeedLayout>
                <Component {...props} />
            </FeedLayout>
        )} />
    )
}

export default FeedRoutes