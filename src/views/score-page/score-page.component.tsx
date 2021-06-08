import React, { FunctionComponent } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from '../../redux/store';

import './score-page.styles.scss';

const mapStateToProps = (state: RootState) => ({
  user: state.user.data,
  points: state.user.points,
});

const connector = connect(mapStateToProps);
type LoginFormProps = ConnectedProps<typeof connector>;

const ScorePage: FunctionComponent<LoginFormProps> = ({ user, points }) => {
  return (
    <div className={'score-page'}>
      <h2 className={'title'}>Congratulations, { user ? user.name : 'anonymous' }</h2>
      <p className={'text'}>Your score:</p>
      <p className={'text points'}>{ points } points!</p>
    </div>
  );
}

export default connector(ScorePage);
