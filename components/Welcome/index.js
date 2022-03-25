import React,  { useState } from 'react';
import styles from './Welcome.module.css';

const Welcome = () => {
  const words = [
    'Welcome',
    'to',
    'the',
    'end',
    'of',
    'everything',
    'and',
    'the',
    'beginning',
    'of',
    'nothing',
    'new.',
    'RESTART'
  ];
  
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const handleIndex = () => {
    if(currentWordIndex >= words.length - 1) {
      setFadeIn(false);
      setFadeOut(true);
  
      setTimeout(() => {
        setCurrentWordIndex(0);
        setFadeIn(true);
        setFadeOut(false);
      }, 500);
    } else {
      setFadeIn(false);
      setFadeOut(true);
  
      setTimeout(() => {
        setCurrentWordIndex(prevState => prevState + 1);
        setFadeIn(true);
        setFadeOut(false);
      }, 500);
    }
    
  };
  
  const wordList = words.map((word, i) => {
    return(
      <div key={i}>
        <button
          className={`${fadeIn ? styles.FadeIn : undefined} ${fadeOut ? styles.FadeOut : undefined}`}
          
          onClick={handleIndex}
          disabled={fadeOut}
        >
          {word}
        </button>
      </div>
    );
  });

  return (
    <div className={styles.Welcome}>
      {wordList[currentWordIndex]}
    </div>
  );
};

export default Welcome;
