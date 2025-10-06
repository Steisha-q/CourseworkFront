import { Outlet } from "react-router"

export const ManagerLayout = () => {
  return (
    <div>
        <div>Manage Menu:</div>
        <Outlet />
    </div>
  )
}