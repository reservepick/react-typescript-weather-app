type ResultsPropsType = {
    results:{
        country : string;
        cityName : string;
        temperature : string;
        conditionText : string;
        icon : string;
    }
}
//ロジカルオペレーター　A&&B　←Aが正しければBを表示させる
const Results = (props:ResultsPropsType) =>{
    return(
        <div>
            {props.results.country && <div className="results-city">{props.results.country}</div>}
            {props.results.cityName && <div className="results-country">{props.results.cityName}</div>}
            {props.results.temperature && <div className="results-temp">{props.results.temperature}<span className="results-temp > span">℃</span></div>}
            {props.results.conditionText && 
            <div className="results-condition">
                <img src = {props.results.icon} alt = "icon"/>
                <span>{props.results.conditionText}</span>
            </div>}
        </div>
    );
};

export default Results;