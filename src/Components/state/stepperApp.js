import { useState } from "react";

export default function StepperApp() {

    return (
        <div>
            <Selector/>
           
        </div>
    );
}
// 컴포넌트(내부)
function Selector () {

    // State: 컴포넌트가 관리하는 데이터. step 이란 이름을 가진 스테이트이며, 시작점은 1이다. 
    const [step, setStep] = useState(1)
    console.log(step)

    return ( // option value 가 변경되면 해당 value 의 문자를 parseInt 로 숫자로 형변환하여 step 에 전달
        <div>
            <select onChange={e => setStep(parseInt(e.target.value))}> 
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <Stepper step={step}/>
        </div>
    )
}

function Stepper ({step}) {
    const [count, setCount] = useState(0)
    console.log(count)

    return ( // 버튼을 누르면 count - step 만큼 count 의 스테이트를 변경해라)
        <div>
            <button onClick ={e=>setCount(count-step)}>-</button>
            <input type="number" value = {count} />
            <button onClick ={e=>setCount(count+step)}>+</button>
        </div>
    )
}