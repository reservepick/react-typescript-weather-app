import './App.css';
//作成したTitleとFormのcomponentをimport
import Title from './components/Title';
import Form from './components/Form';
import Results from './components/Results';
import Loading from "./components/Loading";
import {useState} from 'react'; 

//受け取るdateの型指定
type ResultsStatesType = {
  country : string;
  cityName : string;
  temperature : string;
  conditionText : string;
  icon : string;
}

function App() {
  const [city,setCity] = useState<string>("");
  //都市名のでーたをAPIに渡す処理
  //console.log(見たいデータの変数)=ブラウザの開発者ツールのコンソールにログを出力するデバックで使いそうな機能
  //preventDefault() => 画面の更新を止めるめそっど
  //${変数名}←テンプレートリテラル
  //↑使用時は該当のURLをバッククォート(shify+@)で囲む(シングルクォートで囲むとうまく動作しない)
  const getWeather = (e:React.FormEvent<HTMLFormElement>) =>{
      e.preventDefault();
      fetch(`http://api.weatherapi.com/v1/current.json?key=b44e5b93b92146efa9772500240903&q=${city}&aqi=no`) 
      .then(res => res.json())
      .then(data => {
        setResults(
          {
            country: data.location.country,
            cityName: data.location.name,
            temperature: data.current.temp_c,
            conditionText: data.current.condition.text,
            icon: data.current.condition.icon,
          }
        )
      })
    }
  //dataを保存するstate
  const [results,setResults] = useState<ResultsStatesType>(
    {
      country : "",
      cityName : "",
      temperature : "",
      conditionText : "",
      icon : ""
    }
  );
  //returnの中身はHTMLと同じような動きをする
  //JSXと呼ばれる
  //値を渡す場合はApp(上位のコンポーネント)を経由しなければいけない
  //一つのコンポーネントが一元管理をすることで管理を容易にするため
  //{Loading ? <Loading /> : <Results results={results} />}  
  return (
    <div className="wrapper">
      <div className="container">
      <Title />
      <Form setCity={setCity} getWeather={getWeather}/>
      <Results results={results}/>
      </div>
    </div>
  );
}

//このファイル以外で使うおまじない
export default App;
