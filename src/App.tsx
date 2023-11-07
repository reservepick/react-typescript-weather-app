import './App.css';
//作成したTitleとFormのcomponentをimport
import Title from './components/Title';
import Form from './components/Form';

function App() {
  //returnの中身はHTMLと同じような動きをする
  //JSXと呼ばれる
  return (
    <div className="app">
      <Title />
      <Form />

    </div>
  );
}

//このファイル以外で使うおまじない
export default App;
