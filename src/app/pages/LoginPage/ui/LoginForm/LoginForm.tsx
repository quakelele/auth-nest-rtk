import { Button, Form, Input } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { ROUTES } from 'app/shared/config'
import { useLoginUserMutation } from 'app/shared/api/LoginApi'
import { UserType } from 'app/shared/config/__types'

export const LoginForm = () => {
   const [loginUser] = useLoginUserMutation()

   const navigate = useNavigate()

   const onFinish = (values: UserType) => {
      loginUser(values)
      
      navigate(ROUTES.USER)
   }

   return (
      <Form
         name="login"
         initialValues={{ remember: true }}
         style={{ maxWidth: 360 }}
         onFinish={onFinish}>
         <Form.Item
            name="email"
            rules={[{ required: true, message: 'input your Username!' }]}>
            <Input placeholder="Username" />
         </Form.Item>
         <Form.Item
            name="password"
            rules={[{ required: true, message: 'input your Password!' }]}>
            <Input type="password" placeholder="Password" />
         </Form.Item>

         <Form.Item>
            <Button block type="primary" htmlType="submit">
               Log in
            </Button>
            or <Link to={ROUTES.REGISTER}>Register now!</Link>
         </Form.Item>
      </Form>
   )
}
