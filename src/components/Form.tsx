//下記形がreactのベースとなる
//inputは最後にスラッシュ
//[city,setCity]→cityがstate、setCityで操作する、オブジェクト的なやつ?
//[]の二つ目は一つ目の単語(state名)の前にset加えた形が理想(set+state名)
import {useState} from 'react'; 
const Form = () => {
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
    return(
        <form>
            <input type = "text" name = "city" placeholder="都市名" onChange={e => setCity(e.target.value)}/>
            <button type = "submit" onClick={getWeather}>Get Weather</button>
        </form>
    );
};

//このファイル以外に組み込むおまじない
export default Form;