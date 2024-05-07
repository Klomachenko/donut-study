import './App.css';
import DefaultInput from './components/atom/DefaultInput';

function App() {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <DefaultInput placeholder='단어를 입력해주세요' onChange={handleChange} />
    </>
  );
}

export default App;
