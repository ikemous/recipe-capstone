import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { useAuth } from "../utils/contexts/AuthContext";

interface Props extends RouteProps {
    component: any;
};

const PrivateRoute:React.FC<Props> = (props) => {
    const { currentUser } = useAuth();
    const { component: Component, ...rest} = props;
    return (
        <Route
            {...rest}
            render={(routeProps:any) => 
            currentUser?
            <Component {...routeProps} />:
            <Redirect to={{
                    pathname: "/login",
                    state: { from: routeProps.location }
            }} />
            }
        ></Route>
    );
};

export default PrivateRoute;