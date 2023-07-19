import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const IsAdmin = () => {
     const [hasToken] = useState(localStorage.getItem("AccessToken"))
     const User = JSON.parse(localStorage.getItem("User"));
     return(
         (hasToken && hasToken !== "" && hasToken !== null && User.s==1) ? <Outlet/> : <Navigate to={'/auth/home'}/>
     )
}

export default IsAdmin