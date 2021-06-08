import React, { Dispatch, FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';

import './header.styles.scss';
import { RootState } from '../../redux/store';
import { connect, ConnectedProps } from 'react-redux';
import { signOut } from '../../redux/user/user.actions';

const mapStateToProps = (state: RootState) => ({
  user: state.user.data,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  signOut: () => dispatch(signOut()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type HeaderProps = ConnectedProps<typeof connector>;

const Header: FunctionComponent<HeaderProps> = ({ user, signOut }) => {
  const history = useHistory();

  const signOutStart = () => {
    signOut();
    history.push('/');
  };

  return (
    <div className={'header'}>
      <div className={'options'}>
        {
          user
          && <div className={'option'} onClick={() => signOutStart()}>
            SIGN OUT
          </div>
        }
      </div>
    </div>
  );
};

export default connector(Header);
