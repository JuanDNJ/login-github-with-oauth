import { useAuth0 } from "@auth0/auth0-react";
import { Route, Routes } from "react-router";
import { AuthenticationGuard } from "./AuthenticationGuard";
import { CallbackPage } from "./pages/CallbackPage";

function App() {
  const { isLoading } = useAuth0();
  if (isLoading) {
    return (
      <div className="page-layout">
        <img src="https://cdn.auth0.com/blog/hello-auth0/loader.svg" alt="Loading..." />
      </div>
    );
  }
  return (
    <Routes>
      <Route path="/" element={<section>
        <h1>Hola Mundo!</h1>
      </section>} />
      <Route path="/profile" element={<AuthenticationGuard component={() => <h1>Profile</h1>} />} />
      <Route path="/callback" element={<CallbackPage />} />
      <Route path="*" element={<h1>PAge not found</h1>} />
    </Routes>
  )
}

export default App
