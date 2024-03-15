//下記形がreactのベースとなる
//inputは最後にスラッシュ
//[city,setCity]→cityがstate、setCityで操作する、オブジェクト的なやつ?
//[]の二つ目は一つ目の単語(state名)の前にset加えた形が理想(set+state名)
type FormPropsType={
    setCity:React.Dispatch<React.SetStateAction<string>>
    getWeather:(e: any) => void
}

const Form = (props:FormPropsType) => {
    return(
        <form>
            <input type = "text" name = "city" placeholder="都市名" onChange={e => props.setCity(e.target.value)}/>
            <button type = "submit" onClick={props.getWeather}>Get Weather</button>
        </form>
    );
};

//このファイル以外に組み込むおまじない
export default Form;