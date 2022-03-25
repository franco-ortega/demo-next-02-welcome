import React, { useEffect, useState } from 'react';
import styles from './Welcome.module.css';

const Welcome = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/words`)
    .then(res => res.json())
    .then(res => setData(res))
  }, []);

  const handleIndex = () => {
    if(currentWordIndex >= data.length - 1) {
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
  
  const wordList = data.map((word, i) => {
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

  console.log({ data });

  return (
    <div className={styles.Welcome}>
      {wordList[currentWordIndex]}
    </div>
  );
};

export default Welcome;
