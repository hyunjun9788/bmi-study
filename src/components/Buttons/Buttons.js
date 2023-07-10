import './Buttons.css'

function Buttons(props){
    return(
        <div className='btn-menu'>
            <button className='calculator-bt' onClick={props.onCalculate}>계산</button>
            <button type='button' className='reset-bt' onClick={props.onReset}>초기화</button>
        </div>
    )
}

export default Buttons