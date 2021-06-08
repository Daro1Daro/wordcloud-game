import React, { useState, useEffect } from 'react';

import Cloud from '../../components/cloud/cloud.component';
import { getData } from '../../service/fakeApi';
import { Game } from '../../common/interfaces';

import './game-page.styles.scss';

const GamePage = () => {
  const [game, setGame] = useState<Game>({
    question: '',
    all_words: [],
    good_words: [],
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    getData()
      .then(r => {
        setIsLoading(false);
        setGame(state => ({ ...state, ...r }));
      });
  }, []);

  return (
    <div className={'game-page'}>
      {
        isLoading
          ? <div className={'loading'}>LOADING...</div>
          : <>
            <h1 className={'question'}>{game.question}</h1>
            <Cloud words={game.all_words} goodWords={game.good_words}/>
          </>
      }
    </div>
  );
};

export default GamePage;
