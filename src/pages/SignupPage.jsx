import { Button, Divider, Form, Input, message } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import GoogleIcon from '../assets/icons/icons8-google.svg';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import './SignupPage.css'; // Assuming your CSS file is here
import { signUp } from '../auth';
import { useNavigate } from 'react-router-dom';


const SignupPage = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const { email, phone, password } = values; // Destructure values
    
    try {
      await signUp(email, phone, password); // Call signUp with destructured values
      message.success('Sign up successful, please check your email for the confirmation code.');
      navigate('/confirmSignup')
    } catch (error) {
      message.error(`Error while signing up: ${error.message}`); // Display specific error
    }
  };

  return (
    <>
      <div className='flex justify-evenly min-h-screen w-full'>
        <div className='w-1/2 flex flex-col px-40 justify-center'>
          <h1 className='text-blue-700 font-semibold text-3xl mb-2'>Create Account</h1>
          <p className='mb-10 text-gray-500'>
            Already have an account?{' '}
            <Link to="/signin" className='underline text-blue-700'>Sign in</Link>
          </p>
          <Form layout='vertical' requiredMark={false} onFinish={onFinish}>
            <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Please input your email' }]}>
              <Input placeholder='Email' />
            </Form.Item>
            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[{ required: true, message: 'Please input your phone number!' }]}
            >
              <PhoneInput
                defaultCountry="US"
                className="custom-phone-input"
              />
            </Form.Item>
            <Form.Item name="password" label="Password" rules={[{ required: true, message: 'Please input your password' }]}>
              <Input.Password placeholder='Password' />
            </Form.Item>
            <Link to="/resetPassword" className='underline text-blue-700 font-medium'>Forgot Password?</Link>
            <Form.Item label="" className='mt-6'>
              <Button htmlType='submit' className='w-full rounded-3xl h-[40px] bg-blue-700 text-white'>Sign Up</Button>
            </Form.Item>
            <Divider>OR</Divider>
            <Form.Item>
              <Button className='w-full rounded-3xl h-[40px] text-gray-500 flex items-center'>
                <img src={GoogleIcon} alt="Google icon" className="w-5 h-5 mr-2" />
                Continue with Google
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className='bg-blue-700 w-1/2'>
        <h1 className="text-2xl font-bold text-white mt-4 ml-6">PromptlyAI</h1>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
