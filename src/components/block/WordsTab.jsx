import styles from '../../../src/css/WordsTab.module.css';
import Word from '../atom/Word';

const WordsTab = ({ wordList }) => {
  console.log(wordList);
  return (
    <div className={styles.div}>
      {wordList.map((word, index) => (
        <Word key={word} word={word} />
      ))}
    </div>
  );
};

export default WordsTab;
