import $ from './styles/LoginPage.module.scss'
import {  useSelector } from 'react-redux'
import { LogoutButton } from 'app/shared/ui/LogoutButton/LogoutButton'
import { LoginForm } from './ui/LoginForm/LoginForm'
import { RootState } from 'app/shared/config/__types'


export const LoginPage = () => {
   const { user } = useSelector((state: RootState) => state.user);
   return (
      <div className={$.wrapper}>
         {user ? <LogoutButton title="Logout" /> : <LoginForm />}
      </div>
   )
}
