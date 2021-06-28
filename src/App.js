import { BrowserRouter as Router, Switch } from "react-router-dom";
import * as ROUTES from "./constants/router";
import { Home, Browse, Signin, Signup } from "./pages/index";
import { IsUserRedirect, ProtectedRoute } from "./heplers/router";
import { useAuthListener } from './hook'

export default function App() {
    const {user} = useAuthListener();
    return (
        <Router>
            <Switch>
                <IsUserRedirect
                    user={user}
                    loggerInPath={ROUTES.BROWSE}
                    path={ROUTES.SIGN_IN}
                >
                    <Signin />
                </IsUserRedirect>
                <IsUserRedirect
                    user={user}
                    loggerInPath={ROUTES.BROWSE}
                    path={ROUTES.SIGN_UP}
                >
                    <Signup />
                </IsUserRedirect>
                <ProtectedRoute user={user} path={ROUTES.BROWSE}>
                    <Browse />
                </ProtectedRoute>

                <IsUserRedirect
                    user={user}
                    loggerInPath={ROUTES.BROWSE}
                    exact
                    path={ROUTES.HOME}
                >
                    <Home />
                </IsUserRedirect>
            </Switch>
        </Router>
    );
}
