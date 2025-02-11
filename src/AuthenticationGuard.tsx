import { withAuthenticationRequired } from "@auth0/auth0-react";
import { FC } from "react";
interface AuthenticationGuardProps {
  component: React.ComponentType
}
export const AuthenticationGuard: FC<AuthenticationGuardProps> = ({ component }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <div>
        <img src="https://cdn.auth0.com/blog/hello-auth0/loader.svg" alt="Loading..." />
      </div>
    ),
  });

  return <Component />;
};