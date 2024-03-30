import styles from '../../css/CardNameInput.module.css';
import DefaultInput from '../atom/DefaultInput';

const CardPwInput = () => {
  return (
    <div className={styles.container}>
      <p>카드 비밀번호</p>
      <DefaultInput placeholder={'카드 앞면 2자리 숫자'} />
    </div>
  );
};

export default CardPwInput;