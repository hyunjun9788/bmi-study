import './App.css';
import {useState} from "react";

function App() {

    const [input,setInput] = useState({
        height:'',
        weight:''
    })
    const [result,setResult]=useState({
        obesityResult:'',
        bmiIndex:''
    })

    const [isCalculated, setIsCalculated] = useState(false)


    const heightInputHandler =(e)=>{
        setInput((prevState)=>{
            return{
                ...prevState,
                height:e.target.value
            }
        })
    }
    const weightInputHandler =(e)=>{
        setInput((prevState)=>{
            return{
                ...prevState,
                weight:e.target.value
            }
        })
    }

    const btClickHandler =(e)=>{
    e.preventDefault()

        const height=parseFloat(input.height)
        const weight = parseFloat(input.weight)

        if(isNaN(height)||isNaN(weight)){
            alert("신장과 체중을 올바르게 입력하세요.")
            return;
        }
        const bmi=weight/((height/100)**2)
        let obesityResult = ''
        if(bmi<18.5) {
            obesityResult = '저체중';
        }else if(bmi<23){
            obesityResult='정상'}
        else if(bmi<25) {
            obesityResult = '과체중'
        }else{
            obesityResult='비만'
        }

        setResult({
            obesityResult: obesityResult,
            bmiIndex: bmi.toFixed(2)
        })
        setIsCalculated(true)

    }

    const resetClickHandler =(e)=>{
        e.preventDefault()
        setInput({
            height:'',
            weight:''
        })
        setResult({
            obesityResult: '',
            bmiIndex:''
        })
        setIsCalculated(false)
    }

    return (
        <div className='container'>
            <div className='title'>◎ 나의 체질량지수(BMI)</div>


            <div className='main'>
                <div className='bmi-def'>
                    체질량지수는 자신의 몸무게(kg)를 키의 제곱(m)으로 나눈 값입니다.<br/>
                    체질량지수는 근육량, 유전적 원인, 다른 개인적 차이를 반영하지 못하는 단점이 있음에도 불구하고
                    조사자들이나 의료인들이 가장 많이 쓰는 방법 중 하나입니다.
                </div>


                <div className='calculator'>
                    <div className='input'>
                        <span className='type-name'>신장</span><input onChange={heightInputHandler} /><span className='scale'>cm</span>
                        <span className='slash'>/</span>
                        <span className='type-name'>체중</span><input onChange={weightInputHandler}/><span className='scale'>kg</span>

                        <div className='btn-menu'>
                            <button className='calculator-bt' onClick={btClickHandler}>계산</button>
                            <button type='button' className='reset-bt' onClick={resetClickHandler}>초기화</button>
                        </div>


                    </div>
                    <div className={`result ${isCalculated?'position':''}`}>
                        <div className='result1'>비만도 결과<span className='obesity-result'>{result.obesityResult}</span></div>
                        <div className='result2'>BMI 지수<span className='bmi-result'>{result.bmiIndex}</span></div>
                    </div>

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
                </div>


            </div>

            <div className='footer'>
                <div className='footer-title'><span className='circle'>◎</span> 올바른 식생활 지침</div>
                <div className='footer-subtitle'>제때에</div>
                <div className='footer-subcontent'>신체리듬에 맞춰 규칙적으로 식사하는 것은 아주 중요합니다. 특히 아침을 거르지 맙시다.</div>
                <div className='footer-subtitle'>골고루</div>
                <div className='footer-subcontent'>다양한 식품을 선택해 부족한 영양소가 없도록 해야합니다.</div>
                <div className='footer-subtitle'>알맞게</div>
                <div className='footer-subcontent'>표준 체중을 유지하기 위해 하루에 필요한 적정열량을 섭취하는 것은 비만과 성인병을 예방하는 기본 노력입니다.</div>
                <div className='footer-subtitle'>싱겁게</div>
                <div className='footer-subcontent'>소금의 과잉 섭취는 고혈압을 비롯한 순환기계질환의 중요 요인이 됩니다. 건강을 위해 소금 섭취를 하루에 5g이하로
                    줄입시다.
                </div>
                <div className='footer-subtitle'>즐겁게</div>
                <div className='footer-subcontent'>식사는 가능한 여럿이 함께 하는 것이 좋습니다. 가족끼리 즐겁게 하는 식사는 그 자체가 즐거움이고, 성인병 관리입니다.
                </div>
            </div>
        </div>
    );
}

export default App;
