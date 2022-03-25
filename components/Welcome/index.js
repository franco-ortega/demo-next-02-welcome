import React, { useEffect, useState } from 'react';
import styles from './Welcome.module.css';

const Welcome = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/words`)
    .then(res => res.json())
    .then(res => setData(res))
  }, []);

  const nextWord = () => {
    setFadeIn(false);
  
    setTimeout(() => {
      setCurrentWordIndex(prevState => prevState + 1);
      setFadeIn(true);
    }, 500);
  };

  const resetWord = () => {
    setFadeIn(false);
  
    setTimeout(() => {
      setCurrentWordIndex(0);
      setFadeIn(true);
    }, 500);
  };

  const handleIndex = () => currentWordIndex < data.length - 1 ? nextWord() : resetWord();

  return (
    <div className={styles.Welcome}>
      <div>
        <button
          className={`${fadeIn ? styles.FadeIn : styles.FadeOut}`}
          onClick={handleIndex}
          disabled={!fadeIn}
        >
          {data[currentWordIndex]}
        </button>
      </div>
    </div>
  );
};

export default Welcome;
