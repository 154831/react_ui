import { useRef } from "react";

export default function RefComponent () {

    const nameRef = useRef();

    function click () {
        const nameInput = nameRef.current
        // return 의 ref 가 연결되어있는 current text를 nameInput 으로 가져온다.
        // js 에서 활용하던 this 임. 
        console.log(nameInput)
        console.dir(nameInput)
        console.log(nameInput.dataset["name"])
        console.log(nameInput.value)

        if (nameInput.value == "") {
            alert(" 이름을 입력하세요. ")
            nameInput.value = "이름은 필수값 입니다."
            nameInput.focus()
        }
    }

    return (
        <div>
            <input type="text" ref={nameRef}/>
            <button onClick = {click}>확인</button>
        </div>
    )
}