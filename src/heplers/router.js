import { Route, Redirect } from "react-router";

export function IsUserRedirect({ user, loggerInPath, children, ...resProps }) {
    return (
        <Route
            {...resProps}
            render={() => {
                if (!user) {
                    return children;
                }

                if (user) {
                    return (
                        <Redirect
                            to={{
                                pathname: loggerInPath,
                            }}
                        />
                    );
                }

                return null;
            }}
        />
    );
}

export function ProtectedRoute({ user, children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) => {
                if (user) {
                    return children;
                }

                if (!user) {
                    return (
                        <Redirect
                            to={{
                                pathname: "signin",
                                state: { from: location },
                            }}
                        />
                    );
                }

                return null;
            }}
        />
    );
}
