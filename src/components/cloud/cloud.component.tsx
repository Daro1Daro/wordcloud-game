import React, { Dispatch, FunctionComponent, useState } from 'react';
import { useHistory } from "react-router-dom";
import { connect, ConnectedProps } from 'react-redux';

import { setPoints } from '../../redux/user/user.actions';
import Word from '../word/word.component';

import './cloud.styles.scss';

interface CloudProps {
  words: string[];
  goodWords: string[];
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  setPoints: (points: number) => dispatch(setPoints(points)),
});

const connector = connect(null, mapDispatchToProps);
type ConnectedCloudProps = CloudProps & ConnectedProps<typeof connector>;

const Cloud: FunctionComponent<ConnectedCloudProps> = ({ words, goodWords, setPoints }) => {
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const history = useHistory();

  const checkResults = () => {
    setIsChecked(true);
  };

  const updateSelectedWords = (selected: string) => {
    if (!selectedWords.includes(selected)) {
      setSelectedWords(state => [...state, selected]);
    } else {
      setSelectedWords(state => state.filter(word => word !== selected));
    }
  };

  const renderWords = () =>
    words.map((word, index) =>
      <Word
        key={index}
        word={word}
        updateSelectedWords={updateSelectedWords}
      />);

  const renderCheckedWords = () =>
    words.map((word, index) => {
      const result = selectedWords.includes(word) ? (goodWords.includes(word) ? 'good' : 'wrong') : undefined;
      return <Word
        key={index}
        word={word}
        result={result}
      />;
    });

  const countPoints = () => {
    const goodAnswers: string[] = selectedWords.filter(word => goodWords.includes(word))
    const wrongAnswers: string[] = selectedWords.filter(word => !goodWords.includes(word))
    const unselectedAnswers: string[] = goodWords.filter(goodWord => !selectedWords.includes(goodWord))
    const points = goodAnswers.length * 2 - wrongAnswers.length - unselectedAnswers.length;
    setPoints(points);
    history.push('/score');
  }

  return (
    <div className={'cloud-container'}>
      <div className={'cloud'}>
        {
          isChecked
            ? renderCheckedWords()
            : renderWords()
        }
      </div>
      <div className={'button-container'}>
        {
          isChecked
            ? <button type={'submit'} onClick={countPoints}> FINISH GAME </button>
            : <button type={'submit'} onClick={checkResults}> CHECK RESULTS </button>
        }
      </div>
    </div>
  );
};

export default connector(Cloud);
