import { useRegisterUserMutation } from 'app/shared/api/RegisterApi'
import { Button, Form, Input } from 'antd'
import $ from './RegisterForm.module.scss'
import { RegisterRequest } from 'app/shared/config/__types'
import { formItemLayout, tailFormItemLayout } from '../utils/formItems'

export const RegisterForm = () => {
   const [form] = Form.useForm()
   const [registerUser] = useRegisterUserMutation()

   const onFinish = (values: RegisterRequest) => {
      registerUser(values)
   }

   return (
      <div className={$.wrapper}>
         <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            style={{ maxWidth: 800 }}
            scrollToFirstError>
            <Form.Item
               name="userName"
               label="Name"
               tooltip="What do you want others to call you?"
               rules={[
                  {
                     required: true,
                     message: 'input your name!',
                     whitespace: true,
                  },
               ]}>
               <Input />
            </Form.Item>

            <Form.Item
               name="email"
               label="E-mail"
               rules={[
                  {
                     type: 'email',
                     message: 'input is not valid E-mail!',
                  },
                  {
                     required: true,
                     message: 'input your E-mail!',
                  },
               ]}>
               <Input />
            </Form.Item>

            <Form.Item
               name="phone"
               label="Phone"
               rules={[{ required: true, message: 'input your phone!' }]}>
               <Input style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item
               name="password"
               label="Password"
               rules={[
                  {
                     required: true,
                     message: 'input your password!',
                  },
               ]}
               hasFeedback>
               <Input.Password />
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
               <Button type="primary" htmlType="submit">
                  Register
               </Button>
            </Form.Item>
         </Form>
      </div>
   )
}
