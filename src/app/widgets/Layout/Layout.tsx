import { LoginPage } from 'app/pages/LoginPage/LoginPage'
import { Link, Outlet } from 'react-router-dom'
import $ from 'app/styles/layout.module.scss'
export const Layout = () => {
  return (
    <div >
        <div className={$.wrapper}>
        <Link to="login">  LoginPage</Link>
        <Link to="user">  user</Link>
        <Link to="register">  register</Link>
        
        </div>
        <Outlet/>
    </div>
  )
}
