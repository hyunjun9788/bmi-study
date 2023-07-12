import Input from "../Input/Input";
import Result from "../Result/Result";
import Range from "../Range/Range";
import './Calculator.css'
import Buttons from "../Buttons/Buttons";

function Calculator(props){
    return(
        <div className='calculator'>
            <Input
                heightInputHandler={props.heightInputHandler}
                weightInputHandler={props.weightInputHandler}
                onReset={props.resetClickHandler}
                height={props.inputHeight}
                weight={props.inputWeight}

            />
            <Buttons
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