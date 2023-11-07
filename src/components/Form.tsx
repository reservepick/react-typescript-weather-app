//下記形がreactのベースとなる
//inputは最後にスラッシュ
const Form = () => {
    return(
        <form>
            <input type = "text" name = "city" placeholder="都市名"/>
            <button type = "submit">Get Weather</button>
        </form>
    );
};

//このファイル以外に組み込むおまじない
export default Form;