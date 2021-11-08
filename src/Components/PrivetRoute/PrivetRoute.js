import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import useAuth from '../Hooks/useAuth';
function PrivateRoute({ children, ...rest }) {
const {AllContexts}=useAuth();
const {user,loading }=AllContexts;
if (loading){
  return<Spinner animation="border" />
};
    return (
      <Route
        {...rest}
        render={({ location }) =>
          user.displayName? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
  export default PrivateRoute;