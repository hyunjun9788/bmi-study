import './Result.css'


function Result(props){
    return(
        <div className={`result ${props.isCalculated ? 'position' : ''}`}>
            <div className='result1'>비만도 결과<span className='obesity-result'>{props.result.obesityResult}</span>
            </div>
            <div className='result2'>BMI 지수<span className='bmi-result'>{props.result.bmiIndex}</span></div>
        </div>
    )
}

export default Result