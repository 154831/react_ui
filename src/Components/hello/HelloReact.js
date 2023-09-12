// CSS 적용하기 
import Welcome from "../welcome/Welcome";
import "./HelloReact.css"

//컴포넌트 생성하기 
export default function HelloReact() {
    // 컴포넌트의 UI 만들기 
    const item = ["안녕", "React", "Application", "이에요."]
    const liStyle = { }
    return (
        
        <ul>
            <li>
            {   /** 
                {item [0]}
                {item [1]}
                {item [2]}
                {item [3]} */
            }    

            { /** 배열을 반복해서 li로 변경한다.  */}
            {
                item.map( (value, index) =>
                <li key = {index}
                style = { {liStyle}}
                 onClick={e => alert(e.target.innerText)}>
                {value}</li> )
            }
            </li>
        </ul>
    );
}