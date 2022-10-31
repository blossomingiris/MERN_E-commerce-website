import { Outlet, Navigate } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import LoginPage from '../pages/general/Login/LoginPage'

//if user logged in navigate to user profile page
//or if user is not logged in navigate to login page

function ProtectedRoutes({ admin }) {
  const [isAuth, setIsAuth] = useState()

  //fetch token
  useEffect(() => {
    axios.get('/api/get-token').then(function (data) {
      if (data.data.token) {
        setIsAuth(data.data.token)
      }
      return isAuth
    })
  }, [isAuth])

  if (isAuth === undefined) return <LoginPage />

  //if user is logged in but he is not an admin and try access to admin pages navigate to login page
  return isAuth && admin && isAuth !== 'admin' ? (
    <Navigate to='/login' />
  ) : //if logged in as an admin navigate him to admin pages
  isAuth && admin ? (
    <Outlet />
  ) : //if user logged in as regular user navigate to user pages
  isAuth && !admin ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to='/login' />
  )
}

export default ProtectedRoutes
