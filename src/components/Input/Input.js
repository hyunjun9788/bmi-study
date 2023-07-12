
import './Input.css'
function Input(props){
    return(
        <div className='input'>
            <span className='type-name'>신장</span>
            <input value={props.height} onChange={props.heightInputHandler}/>
            <span className='scale'>cm</span>
            <span className='slash'>/</span>
            <span className='type-name'>체중</span>
            <input value={props.weight} onChange={props.weightInputHandler}/><span
            className='scale'>kg</span>

        </div>
    )
}

export default Input