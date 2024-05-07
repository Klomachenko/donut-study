import './App.css';
import DefaultInput from './components/atom/DefaultInput';
import Word from './components/atom/Word';

function App() {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      {/* <DefaultInput placeholder='단어를 입력해주세요' onChange={handleChange} /> */}
      <Word />
    </>
  );
}

export default App;
