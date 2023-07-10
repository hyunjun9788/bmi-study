import React from 'react'
import './Range.css'
function Range(){
return(
    <div className='range'>
        <div className='bmi-value'>
            <div className='bmi'>BMI</div>
            <div className='value1'>18.5</div>
            <div className='value2'>23</div>
            <div className='value3'>25.00</div>
        </div>
        <div className='graph'>
            <div className='under-weight'>저체중</div>
            <div className='normal'>정상</div>
            <div className='over-weight'>과체중</div>
            <div className='obesity'>비만</div>
        </div>
        <div className='weight-value'>
            <div className='weight'>체중</div>
        </div>
    </div>
)
}


export default Range