import { Outlet, Navigate } from 'react-router-dom'

//if user logged in navigate to user profile page
//or if user is not logged in navigate to login page

function ProtectedRoutes({ admin }) {
  let auth = true
  return auth ? <Outlet /> : <Navigate to='/login' />
}

export default ProtectedRoutes
