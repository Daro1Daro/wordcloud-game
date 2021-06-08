import React, { FunctionComponent, MouseEvent, useState } from 'react';

import './word.styles.scss';

interface WordProps {
  word: string;
  updateSelectedWords?: (selected: string) => void
  result?: string;
}

const Word: FunctionComponent<WordProps> = ({ word, updateSelectedWords= () => {}, result }) => {
  const [selected, setSelected] = useState<boolean>(false);

  const onClick = (e: MouseEvent<HTMLElement>) => {
    const wordElement = e.target as HTMLElement;
    updateSelectedWords(wordElement.innerText);
    setSelected(!selected);
  };

  return (
    <div className={'word-container'} onClick={onClick}>
      { result && <div className={`result ${result}`}>{result}</div> }
      <div className={`word ${selected ? 'selected' : ''} ${result}`}>{ word }</div>
    </div>
  );
};

export default Word;
