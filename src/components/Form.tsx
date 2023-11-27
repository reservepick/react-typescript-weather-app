//下記形がreactのベースとなる
//inputは最後にスラッシュ
//[city,setCity]→cityがstate、setCityで操作する、オブジェクト的なやつ?
//[]の二つ目は一つ目の単語(state名)の前にset加えた形が理想(set+state名)
import {useState} from 'react'; 
const Form = () => {
    const [city,setCity] = useState<string>("");
    return(
        <form>
            <input type = "text" name = "city" placeholder="都市名" onChange={e => setCity(e.target.value)}/>
            {city}
            <button type = "submit">Get Weather</button>
        </form>
    );
};

//このファイル以外に組み込むおまじない
export default Form;