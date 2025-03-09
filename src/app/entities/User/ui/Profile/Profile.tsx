import { useUpdateFavoritesMutation } from 'app/shared/api/LoginApi'
// import $ from "./Profile.module.scss";
import { useLogout } from 'app/shared/hooks/useLogout'
import { UserType } from 'app/shared/config/__types'
import { Button } from 'antd'
import { Space, Typography, Flex } from 'antd'

const { Text } = Typography
type Props = {
   user: UserType
}

export const Profile = ({ user }: Props) => {
   const [sendProductId] = useUpdateFavoritesMutation()
   const { handleLogout } = useLogout()

   return (
      <Flex gap="middle" vertical>
         <Space direction="vertical">
            <Text>mail: {user.email}</Text>
            <Text>Name: {user.userName}</Text>
            <Text>ID: {user.id}</Text>
            <Text>Phone: {user.phone}</Text>
         </Space>
         <Button
            onClick={() => sendProductId({ productId: null })}
            type="default">
            send product ID
         </Button>
         <Button onClick={handleLogout} type="default">
            Logout
         </Button>
      </Flex>
   )
}
