import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"
import { Navigate, useLocation } from "react-router-dom"

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext)
  
    const location = useLocation()
  
    if (user) return children
    return <Navigate to='/login' state={location.pathname} />
  }
  
  export default PrivateRoute