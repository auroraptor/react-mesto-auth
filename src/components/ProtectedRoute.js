import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoute() {
  console.log(localStorage.getItem('jwt'));
  let auth = {'token': localStorage.getItem('jwt')}

  return (
    auth.token ? <Outlet /> : <Navigate to="/sign-in"/>
  )
}

export default ProtectedRoute
