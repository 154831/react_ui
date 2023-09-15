// const [ money, dispatch ] = useReducer (reducer, 0)
// dispatch ( {type: ,payload: })
// money 라는 애가 state 로 들어옴
export const reducer = function (state, action) {

    //reducer 의 역할은state를 효율적으로 관리하는 것이다

    console.log("Reducer", "State => ", state , "Action => ", action)

    if (action.type=="power") {
        // reducer 에서 return 을 하게 되면, state 값이 갱신된다. 
        // state 가 갱신되면 이 reducer를 사용하는 컴포넌트가 갱신된다. 

        return action.payload * action.payload
    } 

    else if (action.type=="mod") {
        return action.payload % 2
    } // action payload값을 2로 나눈 나머지를 반환해라
    
    else {
        return state;
    } // power 나 mod 가 아니면 갱신해주지 않겠다 
    


}