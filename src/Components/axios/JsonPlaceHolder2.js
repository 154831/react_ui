import axios from "axios";
import { useEffect, useState } from "react";

export default function JsonPlaceholder() {

    const [isLoad, setIsLoad] = useState(false) //false: 요청이 이미 끝났거나 요청중이아님
    const [posts,setPosts] = useState([]) // posts State
    const [status,setStatus] = useState(0)    
    //여기에 함수를 적어 props를 보내는 이유는, state 가 여기에 있기 때문

    axios.interceptors.request.use((config) => {
        console.log(config)
        setIsLoad(true)
        return config
    }, (error) => {
        setIsLoad(false)
        return Promise.reject(error)
    })

    axios.interceptors.response.use((response) => {
        console.log(response)
        setIsLoad(false)
        return response
    }, (error) => {
        setIsLoad(false)
        return Promise.reject(error);
    })


    function getAllPosts() {
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
    } 

    function getOnePost() {
        const readPostURL = "https://jsonplaceholder.typicode.com/posts/1"
        axios.get(readPostURL)
            .then((response) => {
                console.log (response.status)
                console.log (response.data)// 성공 CASE (요청이 성공했다. 응답이 정상적으로 도착)
                setPosts([response.data])
                setStatus(response.status)
            }) 
            .catch((error) => {
                console.log(error.response.status)
                console.log(error.message)
                setPosts([])
                setStatus(error.response.status)
                // 요청 받은 정보를 스테이터스에 집어 넣음. 
            }) // 실패 CASE (요청이 실패했다.응답이 제대로 오지 않았거나 응답 대기중임)

    }
     
    function addNewPost() {
        const readPostURL = "https://jsonplaceholder.typicode.com/posts"


        axios.post(readPostURL, {
            title:"등록합니다.",
            body:"새로운 글이에요.",
            userId:1
        })
            .then((response) => {
                console.log (response.status)
                console.log (response.data)// 성공 CASE (요청이 성공했다. 응답이 정상적으로 도착)
                setPosts([...posts,{
                    title:"등록합니다.",
                    body:"새로운 글이에요.",
                    userId:1,
                    id: 101 
                }])
                setStatus(response.status)
            }) 
            .catch((error) => {
                console.log(error.response.status)
                console.log(error.message)
                setPosts([...posts])
                setStatus(error.response.status)
                // 요청 받은 정보를 스테이터스에 집어 넣음. 
            }) // 실패 CASE (요청이 실패했다.응답이 제대로 오지 않았거나 응답 대기중임)

    }

    //componentDidmount 해당
    // useEffect(() => { // 화면이 열리자 마자 조회를 해라 
    //     const readPostURL = "https://jsonplaceholder.typicode.com/posts"
    //     axios.get(readPostURL)
    //         .then((response) => {
    //             console.log (response.status)
    //             console.log (response.data)// 성공 CASE (요청이 성공했다. 응답이 정상적으로 도착)
    //             setPosts(response.data)
    //             setStatus(response.status)
    //         }) 
    //         .catch((error) => {
    //             console.log(error.response.status)
    //             console.log(error.message)
    //             setPosts([])
    //             setStatus(error.response.status)
    //             // 요청 받은 정보를 스테이터스에 집어 넣음. 
    //         }) // 실패 CASE (요청이 실패했다.응답이 제대로 오지 않았거나 응답 대기중임)
    // }, [])

    if (status == 404) {
        return (
            <div>
                {isLoad ? <Spinner/> : <></>}
                <Buttons getAllPosts={getAllPosts}
                    getOnePost={getOnePost} 
                    addNewPost={addNewPost}/>
                URL이 올바르지 않습니다.
            </div>
        );
    }
    else {
    return  (
        <div>
            {isLoad ? <Spinner/> : <></>}
            <Buttons getAllPosts={getAllPosts}
                    getOnePost={getOnePost} 
                    addNewPost={addNewPost}/>
            {
                posts.map(post =>
                <div key = {post.id}> 
                {post.title} </div>)
            }
        </div>
              )
    }
}

function Buttons ({getAllPosts, getOnePost, addNewPost}) {
    return ( 
        <div>
            <button onClick={getAllPosts}>조회</button>
            <button onClick={getOnePost} >한건 조회</button>
            <button onClick={addNewPost}>등록</button>
            <button>수정</button>
            <button>삭제</button>
        </div>
    )
}

function Spinner () {

    const style = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex:999,
        position:"fixed",
        top:0,
        left: 0,
        bottom: 0,
        right: 0
    }

    const imgStyle = {
        width: "100px",
        height:"auto"
    }
    return (
        <div style={style}>
            <img style={imgStyle} src="https://cutewallpaper.org/24/totoro-transparent-gif/kawaii-transparents.gif"/>
        </div>
    )
}
