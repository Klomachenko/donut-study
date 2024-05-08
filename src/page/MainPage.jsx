import styles from '../css/MainPage.module.css';
import DefaultInput from '../components/atom/DefaultInput';
import WordsTab from '../components/block/WordsTab';
import { useEffect, useState } from 'react';
import words from '../data/words.json';

const MainPage = () => {
  const [wordList, setWordList] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [gameOver, setGameOver] = useState(false);

  const addRandomWord = () => {
    const randomNumb = Math.floor(Math.random() * words.words.length);
    const randomWord = words.words[randomNumb];
    setWordList((prevWordList) => [...prevWordList, randomWord]);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const deleteWord = (word) => {
    setWordList((prevWordList) => prevWordList.filter((w) => w !== word));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (wordList.includes(inputValue)) {
      deleteWord(inputValue);
    }
    setInputValue('');
  };

  useEffect(() => {
    if (!gameOver) {
      const gameCheck = setInterval(() => {
        if (wordList.length < 9) {
          addRandomWord();
        } else {
          setGameOver(true);
          alert('미션 실패! 게임 종료!');
          window.location.reload();
        }
      }, 2000);

      return () => clearInterval(gameCheck);
    }
  }, [gameOver, wordList]);

  return (
    <div className={styles.container}>
      <div className={styles.wordBox}>
        <WordsTab wordList={wordList} deleteWord={deleteWord} />
      </div>
      <div className={styles.inputBox}>
        <DefaultInput
          value={inputValue}
          onChange={handleInputChange}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default MainPage;
