import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const IsAuth = () => {
     const [hasToken] = useState(localStorage.getItem("AccessToken"))
     const User = JSON.parse(localStorage.getItem("User"));
     return(
         (hasToken && hasToken !== "" && hasToken !== null) ? <Outlet/> : <Navigate to={'/'}/>
     )
}

export default IsAuth