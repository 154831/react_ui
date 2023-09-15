import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { BoardSlice } from "../new/toolkit/BoardSlice";

export default function BoardList() {

    // ReduxStore에서 state를 받아오는 hook을 사용해 item 에 배정
    const item = useSelector ((state) => [...state.board])


    return (
        <div>
            
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>조회수</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        item.map((item) => <Row key ={item.num}
                                                num ={item.num}
                                                title={item.title}
                                                author={item.author}
                                                viewCount={item.viewCount}/>)
                    }
                </tbody>
            </table>
                <div>
                    <Link to="/articles/write">글쓰기</Link>
                </div>
                {/* Detail Component 
                (Route 내부의 Route Component) */}
                <Outlet/>
        </div>
    );
}

function Row( {num, title, author, viewCount}) {

    return(
        <tr>
            <td>{num}</td>
            <td>
                <Link to={"/articles/" + num}>{title}
                </Link>
            </td>
            <td>{author}</td>
            <td>{viewCount}</td>
        </tr>
    )

}
// detail 과 write 는 외부에서 호출할 함수라 export 
export function Detail() {

    // /view/:num 의 값을 받아옴.
    const {num} = useParams()
    
    // 조회수 받아오기
   
    const item = useSelector((state) => [...state.board])
    //Redux의 state를 변경하기 위한 Dispatch가 생성됨.
    //자동으로 하나만 store 를 가지고 잇는 state를 갱신하기 위한 dispatch 발생
    const dispatch = useDispatch()

    //조회수 증가 -> componentDidMount할 때 진행예정
    useEffect(() => {
        // ReduxStore의 state값을 갱신하려면
        // ReduxReducer에게 state값 갱신 요청
        // ReduxReducer에게 갱신 요청을 하기 위해 dispatch 가 필요하다. 
        dispatch (BoardSlice.actions.read(num))// dispatch 에게 액션 데이터 보냄 
            
    } ,[])
     

    const detailItem = item.filter((each) => each.num == num) [0]

    // useEffect(() => { 
    //     const copyItem = [...item]
    //     console.log(copyItem)
    
    //     copyItem.map((each) => {
    //         if(each.num == num) {
    //             each.viewCount += 1
    //             return {...each}
    //             }
    //         return each
    //         })
    //     setItem(copyItem)} , []) // 최초에 한번만 실행됨.
    
    

    return (
        <div>
            <div>
            번호: {detailItem.num}
            </div>
            <div>
            제목: {detailItem.title}
            </div>
            <div>
            작성자: {detailItem.author}
            </div>
            <div>
            조회수: {detailItem.viewCount}
            </div>
            <div>
            내용: {detailItem.desc}
            </div>
        <div> 
            <Link to="/articles/">목록으로 돌아가기</Link>
        </div>
        </div>
    );

}

export function Write() {
    
    const titleRef = useRef()
    const authorRef = useRef()
    const descRef = useRef()
    const navigate = useNavigate() // 이게 들어간 순간 url 제어 가능

    // state 의 내용을 표시할게 아니니, useSelector 는 사용이 필요가 없음
    const item = useSelector(state => [...state.board])
    const dispatch = useDispatch()

    function save() {

    //    setItem ([...item, {
    //         num: item.length + 1,
    //         title: titleRef.current.value,
    //         author: authorRef.current.value,
    //         desc: descRef.current.value,
    //         viewCount:1
    //     }])
        
    // dispatch (  { type: "regist", payload:   {
        // num: item.length + 1,
        // title: titleRef.current.value,
        // author: authorRef.current.value,
        // desc: descRef.current.value,
        // viewCount:0

    //     }})
        dispatch(BoardSlice.actions.regist({
            num: item.length + 1,
            title: titleRef.current.value,
            author: authorRef.current.value,
            desc: descRef.current.value,
            viewCount: 0
        }))
        // save가 끝나면 url 을 이동해라
        navigate("/articles")
        
    }

    return (
        <div>
            <div>
                <input type ="text" placeholder="제목" ref={titleRef}/>
            </div>
            <div>
                <input type ="text" placeholder="작성자" ref={authorRef}/>
            </div>
            <div>
                <textarea placeholder="내용" ref={descRef}></textarea>
            </div>
            
            <div>
                <button onClick={save}>저장</button>
                <Link to ="/articles">목록으로 돌아가기</Link>
            </div>
        </div>
    )

}