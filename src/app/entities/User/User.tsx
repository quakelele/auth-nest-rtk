import { useSelector, TypedUseSelectorHook } from 'react-redux'
import $ from './User.module.scss'
import { Profile } from './ui/Profile/Profile'
import LogoutLink from './ui/LogoutLink'
import { UserType, RootState } from 'app/shared/config/__types'

export const User = () => {
   const { user } = useSelector((state: RootState) => {
      console.log(state)
      return state.user
     
   })
   return (
      <div className={$.wrapper}>
         {user ? <Profile user={user} /> : <LogoutLink />}
      </div>
   )
}
