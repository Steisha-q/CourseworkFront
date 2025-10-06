import { Outlet } from "react-router"

export const MasterLayout = () => {
  return (
    <div>
        <div>Master Menu:</div>
        <Outlet />
    </div>
  )
}