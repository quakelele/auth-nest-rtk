import $ from './LoginPage.module.scss'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { LogoutButton } from 'app/shared/ui/LogoutButton/LogoutButton'
import { LoginForm } from './ui/LoginForm/LoginForm'
import { UserType } from 'app/shared/config/__types'

export const LoginPage = () => {
   const { user } = useSelector(
      (state) => state.user
   )

   return (
      <div className={$.wrapper}>
         {user ? <LogoutButton title="Logout" /> : <LoginForm />}
      </div>
   )
}
