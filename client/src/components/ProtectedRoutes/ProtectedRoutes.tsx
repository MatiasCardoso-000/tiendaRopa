import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"

interface Params {
  children?: React.ReactNode,
  isAuthenticated:boolean,
  redirectTo: string
}

export const ProtectedRoutes = ({children, isAuthenticated, redirectTo}: Params) => {
  const {loading} = useAuth()

  if(loading) return (
    <div className="w-full h-screen flex items-center justify-center">
      <h1 className="text-xl font-semibold">Loading...</h1>
    </div>
  )

  if(!loading && !isAuthenticated) return <Navigate to={redirectTo} replace/>

  return children ? children : <Outlet/>
}