import { Button, Divider, Form, Input, message } from 'antd';
import React from 'react';
import './SignupPage.css'; // Assuming your CSS file is here
import { confirmSignUp} from '../auth';
import { useNavigate } from 'react-router-dom';


const ConfirmSignUpPage = () => {
    const navigate = useNavigate();

    const onFinish = async (values) => {
        const { email, confirmationCode } = values; // Destructure values
        
        try {
          await confirmSignUp(email, confirmationCode) // Call signUp with destructured values
          message.success('You can now log in with your credentials!');
          navigate('/signin')
        } catch (error) {
          message.error(`Error while confirming signing up: ${error.message}`); // Display specific error
        }
      };


  return (
    <>
      <div className='flex justify-evenly min-h-screen w-full'>
        <div className='w-1/2 flex flex-col px-40 justify-center'>
          <h1 className='text-blue-700 font-semibold text-3xl mb-2'>Confirm Signup</h1>
          <Form layout='vertical' requiredMark={false} onFinish={onFinish}>
            <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Please input your email' }]}>
              <Input placeholder='Email' />
            </Form.Item>
            <Form.Item name="confirmationCode" label="Confirmation Code" rules={[{ required: true, message: 'Please input the code sent to your email' }]}>
              <Input placeholder='Confirmation Code' />
            </Form.Item>
            <Form.Item label="" className='mt-6'>
              <Button htmlType='submit' className='w-full rounded-3xl h-[40px] bg-blue-700 text-white'>Confirm</Button>
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

export default ConfirmSignUpPage;
