//下記形がreactのベースとなる
//inputは最後にスラッシュ
//[city,setCity]→cityがstate、setCityで操作する、オブジェクト的なやつ?
//[]の二つ目は一つ目の単語(state名)の前にset加えた形が理想(set+state名)
type FormPropsType={
    setCity:React.Dispatch<React.SetStateAction<string>>
    getWeather:(e: React.FormEvent<HTMLFormElement>) => void
}

const Form = (props:FormPropsType) => {
    return(
        <form onSubmit={props.getWeather}>
            <input type = "text" name = "city" placeholder="都市名" onChange={e => props.setCity(e.target.value)}/>
            <button type = "submit">Get Weather</button>
        </form>
    );
};

//このファイル以外に組み込むおまじない
export default Form;