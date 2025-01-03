import { Button, Divider, Form , Input, message} from 'antd'
import React from 'react'
import { Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { signIn } from '../auth'

const LoginPage = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const { email, password } = values;
    
    try {
      await signIn(email, password) 
      message.success('Signed in successfully!');
      navigate('/blogs')
    } catch (error) {
      message.error(`Error while signing in: ${error.message}`);
    }
  };

  return (
    <>
        <div className='flex justify-evenly min-h-screen w-full '>
        <div className='w-1/2 flex flex-col px-40 justify-center'>
            <h1 className='text-blue-700 font-semibold text-3xl mb-2'>Sign in</h1>
            <p className='mb-10 text-gray-500'>Don't have an account? <Link to="/signup" className='underline text-blue-700'>Create now</Link></p>
            <Form layout='vertical' requiredMark={false} onFinish={onFinish}>
                <Form.Item name="email" label="Email"  rules={[{required: true, message: 'Please input ypur email'}]}>
                    <Input placeholder='Email'/>
                </Form.Item>
                <Form.Item name="password" label="Password"  rules={[{required: true, message: 'Please input ypur password'}]}>
                    <Input.Password placeholder='Password'/>
                </Form.Item>
                <Link to="/resetPassword" className='underline text-blue-700 font-medium'>Forgot Password?</Link>
                <Form.Item label="" className='mt-6'>
                    <Button htmlType='submit' className='w-full rounded-3xl h-[40px] bg-blue-700 text-white'>Sign In</Button>
                </Form.Item>
            </Form>
        </div>
        <div className='bg-blue-700 w-1/2'>
          <h1 className="text-2xl font-bold text-white mt-4 ml-6">PromptlyAI</h1>
        </div>
    </div>
    </>
  )
}

export default LoginPage