import { useSelector } from 'react-redux'
import $ from './User.module.scss'
import { Profile } from './Profile/Profile'
import LogoutLink from './ui/LogoutLink'

export const User = () => {
   const { user } = useSelector((state) => state.user)

   return (
      <div className={$.wrapper}>
         {user ? <Profile user={user} /> : <LogoutLink />}
      </div>
   )
}
