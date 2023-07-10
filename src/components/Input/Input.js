import Buttons from "../Buttons/Buttons";
import './Input.css'
function Input(props){
    return(
        <div className='input'>
            <span className='type-name'>신장</span><input onChange={props.heightInputHandler}/><span
            className='scale'>cm</span>
            <span className='slash'>/</span>
            <span className='type-name'>체중</span><input onChange={props.weightInputHandler}/><span
            className='scale'>kg</span>

            <Buttons
                onCalculate={props.onCalculate}
                onReset={props.onReset}
            />
        </div>
    )
}

export default Input