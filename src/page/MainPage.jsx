import styles from '../css/MainPage.module.css';
import DefaultInput from '../components/atom/DefaultInput';
import WordsTab from '../components/block/WordsTab';

const MainPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wordBox}>
        <WordsTab />
      </div>
      <div className={styles.inputBox}>
        <DefaultInput />
      </div>
    </div>
  );
};

export default MainPage;
