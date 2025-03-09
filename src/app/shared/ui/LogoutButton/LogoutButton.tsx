import { Button } from 'antd'
import { useLogout } from 'app/shared/hooks/useLogout';

type Props = {
  title?: string
}

export const LogoutButton = ({title}:Props) => {
    const { handleLogout } = useLogout();
  return (
    <Button onClick={handleLogout} type="default">{title}</Button>
  )
}
