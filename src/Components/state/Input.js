import { useState } from "react"

export default function Input() {

    //state 생성, 스테이트 이름이 Value 라면, 뒤에 나오는 이름은 setValue가 됨
    const [value, setValue] = useState("") //  value 가 처음 생성되면 그냥 빈 문자열을 넣어주겠다. 

    return (
        <div>
            <p>{value}</p>
            <input type = "text" onKeyUp={e => setValue(e.target.value)}/>
        </div>
    )
}