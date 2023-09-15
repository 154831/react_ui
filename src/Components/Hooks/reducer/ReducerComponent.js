import { useRef }  from "react"
import { useReducer } from "react";
import { reducer } from "./CalcReducer";
// 여기에 cal reducer 갖다 넣어야함 

export default function ReducerComponent() {
    
    const numberRef = useRef(); 
        // (= const [number, setNumbre]= useState(1);)
    const [ result, dispatch ] = useReducer (reducer, 0)

    return (
        <>
            <h1> 계산기 : </h1>
            <h3> 결과 :</h3>
            <input type ="number" ref={numberRef}/>
            <button onClick = {() => dispatch({type:"power", payload: numberRef.current.value})}> 제곱 구하기 </button>
            <button onClick = {() => dispatch({type:"mod", payload: numberRef.current.value})}>나머지 구하기</button>
        </>
    )
}