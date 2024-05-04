import { Route, Redirect, RouteProps } from "react-router-dom";
import { UserContextType, useUser } from "../context";
import { getSetToken } from "../utilities";

// Define the props interface for the ProtectedRoute component
interface ProtectedRouteProps extends RouteProps {
  component: React.ComponentType<any>;
}

// Custom ProtectedRoute component
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { userName } = useUser() as UserContextType;
  const token = getSetToken("get");

  // if user signed then move to profile page else go to home page
  return (
    <Route
      {...rest}
      render={(props) =>
        userName || token?.length ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default ProtectedRoute;
