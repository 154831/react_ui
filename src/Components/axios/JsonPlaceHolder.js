import axios from "axios";
import { useEffect, useState } from "react";

export default function JsonPlaceholder2() {


    const [posts,setPosts] = useState([]) // posts State
    const [status,setStatus] = useState(0)    
    //여기에 함수를 적어 props를 보내는 이유는, state 가 여기에 있기 때문


    //componentDidmount 해당
    useEffect(() => { // 화면이 열리자 마자 조회를 해라 
        const readPostURL = "https://jsonplaceholder.typicode.com/posts"
        axios.get(readPostURL)
            .then((response) => {
                console.log (response.status)
                console.log (response.data)// 성공 CASE (요청이 성공했다. 응답이 정상적으로 도착)
                setPosts(response.data)
                setStatus(response.status)
            }) 
            .catch((error) => {
                console.log(error.response.status)
                console.log(error.message)
                setPosts([])
                setStatus(error.response.status)
                // 요청 받은 정보를 스테이터스에 집어 넣음. 
            }) // 실패 CASE (요청이 실패했다.응답이 제대로 오지 않았거나 응답 대기중임)
    }, [])

    if (status == 404) {
        return (
            <div>
                <Buttons/>
                URL이 올바르지 않습니다.
            </div>
        );
    }
    else {
    return  (
        <div>
            <Buttons/>
            {
                posts.map(post =><div key = {post.id}> 
                {post.title} </div>)
            }
        </div>
              )
    }
}

function Buttons () {
    return ( 
        <div>
            <button>조회</button>
            <button>한건 조회</button>
            <button>등록</button>
            <button>수정</button>
            <button>삭제</button>
        </div>
    )
}