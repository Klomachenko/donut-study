import styles from '../../../src/css/DefaultInput.module.css';

const DefaultInput = ({ placeholder, value, onChange }) => {
  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    ></input>
  );
};

export default DefaultInput;
