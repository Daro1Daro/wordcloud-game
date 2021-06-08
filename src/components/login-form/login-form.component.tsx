import React, { FormEvent, FunctionComponent, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { History } from 'history';

import { signIn } from '../../redux/user/user.actions';
import { ThunkDispatchType } from '../../redux/store';

import './login-form.styles.scss';

const mapDispatchToProps = (dispatch: ThunkDispatchType) => ({
  signIn: (username: string, history: History) => dispatch(signIn(username, history)),
});

const connector = connect(null, mapDispatchToProps);
type LoginFormProps = ConnectedProps<typeof connector>;

const LoginForm: FunctionComponent<LoginFormProps> = ({ signIn }) => {
  const [username, setUsername] = useState<string>('');
  const history = useHistory();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    signIn(username, history);
  };

  const onInputChange = (e: FormEvent<HTMLInputElement>) => setUsername(e.currentTarget.value);

  return (
    <div className={'login-form'}>
      <h1 className={'title'}>Wordcloud game</h1>
      <form onSubmit={handleSubmit}>
        <div className={'inputs'}>
          <input
            id={'username'}
            className={'form-input'}
            name={'username'}
            type={'text'}
            value={username}
            onChange={onInputChange}
            placeholder={'Enter your nickname here...'}
            required
          />
        </div>
        <div className={'buttons'}>
          <button type={'submit'}> SUBMIT</button>
        </div>
      </form>
    </div>
  );
};

export default connector(LoginForm);
