import styles from '../../../src/css/DefaultInput.module.css';

const DefaultInput = ({ placeholder, value, onChange, onSubmit }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSubmit(e);
    }
  };

  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyPress={handleKeyPress}
    ></input>
  );
};

export default DefaultInput;
