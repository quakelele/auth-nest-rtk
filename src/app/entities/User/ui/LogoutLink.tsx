import { ROUTES } from 'app/shared/config'
import { Link } from 'react-router-dom'

const LogoutLink = () => {
  return (
    <div>Bro you need to <Link to={ROUTES.LOGIN} > relogin..</Link></div>
  )
}

export default LogoutLink