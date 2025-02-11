import { Auth0Provider } from "@auth0/auth0-react";
import { FC, ReactNode } from "react";
import { clientId, domain, redirectUri } from "./config";

interface OAuthProps {
  children: ReactNode
}

const OAuthProvider: FC<OAuthProps> = ({ children }) => {
  if (!(domain && clientId && redirectUri)) {
    return null;
  }
  return <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: redirectUri,
    }}
  >
    {children}
  </Auth0Provider>
}

export default OAuthProvider;