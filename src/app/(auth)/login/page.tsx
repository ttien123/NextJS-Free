import React from 'react';
import LoginForm from './login-form';

const LoginPage = () => {
  return (
    <div>
     <h1 className="text-xl font-semibold text-center">Đăng ký</h1>
      <div className='flex justify-center'>
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
