import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoute() {
  let auth = {'token': true}

  return (
    auth.token ? <Outlet /> : <Navigate to="/sign-in"/>
  )
}

export default ProtectedRoute
