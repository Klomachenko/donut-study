import styles from '../../../src/css/Word.module.css';

const Word = ({ word }) => {
  return (
    <div className={styles.div}>
      <span>{word}</span>
    </div>
  );
};

export default Word;
