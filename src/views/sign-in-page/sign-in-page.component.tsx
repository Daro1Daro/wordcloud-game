import React from 'react';

import LoginForm from '../../components/login-form/login-form.component';

import './sign-in-page.styles.scss';

const SignInPage = () => {
  return (
    <div className={'sign-in-page'}>
      <LoginForm/>
    </div>
  );
};

export default SignInPage;
