import './App.css';
import React, {useState} from "react";
import Footer from "./components/Footer/Footer";
import BmiDef from "./components/BmiDef/BmiDef";
import Calculator from "./components/Calculator/Calculator";
function App() {

    const [input, setInput] = useState({
        height: '',
        weight: ''
    })
    const [result, setResult] = useState({
        obesityResult: '',
        bmiIndex: ''
    })

    const [isCalculated, setIsCalculated] = useState(false)


    const heightInputHandler = (e) => {
        setInput((prevState) => {
            return {
                ...prevState,
                height: e.target.value
            }
        })
    }
    const weightInputHandler = (e) => {
        setInput((prevState) => {
            return {
                ...prevState,
                weight: e.target.value
            }
        })
    }

    const btClickHandler = (e) => {
        e.preventDefault()

        const height = parseFloat(input.height)
        const weight = parseFloat(input.weight)

        if (isNaN(height) || isNaN(weight)) {
            alert("신장과 체중을 올바르게 입력하세요.")
            return;
        }
        const bmi = weight / ((height / 100) ** 2)
        let obesityResult = ''
        if (bmi < 18.5) {
            obesityResult = '저체중';
        } else if (bmi < 23) {
            obesityResult = '정상'
        } else if (bmi < 25) {
            obesityResult = '과체중'
        } else {
            obesityResult = '비만'
        }

        setResult({
            obesityResult: obesityResult,
            bmiIndex: bmi.toFixed(2)
        })
        setIsCalculated(true)

    }

    const resetClickHandler = (e) => {
        e.preventDefault()
        setInput({
            height: '',
            weight: ''
        })
        setResult({
            obesityResult: '',
            bmiIndex: ''
        })
        setIsCalculated(false)
    }

    return (
        <div className='container'>
            <div className='title'>◎ 나의 체질량지수(BMI)</div>
            <div className='main'>
                <BmiDef className='bmi-def'/>
                <Calculator
                    heightInputHandler={heightInputHandler}
                    weightInputHandler={weightInputHandler}
                    btClickHandler={btClickHandler}
                    resetClickHandler={resetClickHandler}
                    isCalculated={isCalculated}
                    result={result}
                    inputHeight={input.height}
                    inputWeight={input.weight}
                />
            </div>
            <Footer className='footer'/>
        </div>
    );
}

export default App;
