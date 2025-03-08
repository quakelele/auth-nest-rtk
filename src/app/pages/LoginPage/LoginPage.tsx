import $ from './LoginPage.module.scss'
import { useSelector } from 'react-redux'
import { LogoutButton } from 'app/shared/ui/LogoutButton/LogoutButton'
import { LoginForm } from './LoginForm/LoginForm'


export const LoginPage = () => {
   const { user } = useSelector((state) => state.user)

   return (
      <div className={$.wrapper}>
         {user ? <LogoutButton title="Logout" /> : <LoginForm />}
      </div>
   )
}
