import styles from '../../../src/css/WordsTab.module.css';
import Word from '../atom/Word';

const WordsTab = ({ wordList }) => {
  return (
    <div className={styles.div}>
      {wordList.map((word, index) => (
        <Word key={index} word={word} />
      ))}
    </div>
  );
};

export default WordsTab;
