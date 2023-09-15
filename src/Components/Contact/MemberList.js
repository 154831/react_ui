import {useRef, useState} from "react"


export default function MemberList(){
    // 생성

    const [memberData,setMemberData] = useState ([])
    
    const nameRef = useRef();
    const ageRef = useRef();
    const addressRef = useRef();

    
    
    function save(){

        let data = [...memberData]

        data.push({
            username:nameRef.current.value,
            age: ageRef.current.value,
            address: addressRef.current.value
        })
        // 세이브 버튼 눌렀을 때 해당 정보 받기 

        // 배열이나 객체는 반드시 펼치고
    //     let data = [...memberData]
        // 원하는 데이터를 추가해야해요
    //     data.push({username:nameInput, userage:ageInput, useraddress:addressInput});
        //  데이터 추가 완료
    //     setMemberData(data);
        // data를 추가한 이후에 초기화해라

    }
    
    // 반환 + <div>
    return (
        <div>
            <div>
                <label htmlFor="name">이름:</label>
                <input type="text" id="name" ref={nameRef} />
            </div>
            <div>
                <label htmlFor="name">나이:</label>
                <input type="text" id="age" ref={ageRef} />
            </div>
            <div>
                <label htmlFor="name">주소:</label>
                <input type="text" id="address" ref={addressRef} />
            </div>
            <div>
                <button onClick={()=> save()}>저장</button>
            </div>
            <Member memberData={memberData} />
        </div>
    )
}
// 자체(내부) 함수 --> 나중에 보이도록 붙일거에요 
function Member({memberData}){
    return(
        <>
            {
                memberData.map((value,index)=> 
                                <div key={index}>
                                    <span>{value.username}</span>
                                    <span>{value.age}</span>
                                    <span>{value.address}</span>
                                </div>)
            }
        </>
    )
}