import './App.css';
//作成したTitleとFormのcomponentをimport
import Title from './components/Title';
import Form from './components/Form';
import Results from './components/Results';
import {useState} from 'react'; 

function App() {
  const [city,setCity] = useState<string>("");
  //都市名のでーたをAOIに渡す処理
  //console.log(見たいデータの変数)=ブラウザの開発者ツールのコンソールにログを出力するデバックで使いそうな機能
  //preventDefault() => 画面の更新を止めるめそっど
  const getWeather = (e:any) =>{
      e.preventDefault();
      fetch("http://api.weatherapi.com/v1/current.json?key=b44e5b93b92146efa9772500240903&q=London&aqi=no") 
      .then(res => res.json())
      .then(data => console.log(data))
  }
  //returnの中身はHTMLと同じような動きをする
  //JSXと呼ばれる
  //値を渡す場合はApp(上位のコンポーネント)を経由しなければいけない
  //一つのコンポーネントが一元管理をすることで管理を容易にするため
  return (
    <div className="app">
      <Title />
      <Form setCity={setCity} getWeather={getWeather}/>
      <Results/>
    </div>
  );
}

//このファイル以外で使うおまじない
export default App;
