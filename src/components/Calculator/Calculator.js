import Input from "../Input/Input";
import Result from "../Result/Result";
import Range from "../Range/Range";
import './Calculator.css'
function Calculator(props){
    return(
        <div className='calculator'>
            <Input
                heightInputHandler={props.heightInputHandler}
                weightInputHandler={props.weightInputHandler}
                onCalculate={props.btClickHandler}
                onReset={props.resetClickHandler}
            />
            <Result
                isCalculated={props.isCalculated}
                result={props.result}
                obesity={props.result.obesityResult}
                bmiIndex={props.result.bmiIndex}
            />
            <Range />
        </div>
    )
}

export default Calculator