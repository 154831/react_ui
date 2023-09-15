import "./MainApp.css"

import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import BoardList , { Write, Detail } from "./board/BoardList"
import { useState } from "react";
import ComplexReducerHook from "./Hooks/reducer/ComplexReducerHook";
import HelloReact from "./hello/HelloReact";

export default function MainApp() {
        // 아이템이 목록처럼 보여져야하니 배열로 
    const [item, setItem] = useState([]) 


        // 조회수를 받아오기 위해 Detail 에 setItem 추가했음 
    return (
        <BrowserRouter>
            <div id="grid">
                <div id="header">여기는 헤더입니다.</div>
                <div id="aside">
                    <ul>
                    <li><Link to="articles/">게시판</Link></li>   
                    <li><Link to="/todo">Todo</Link></li>
                    <li><Link to="/hello">HelloReact</Link></li>
                    </ul>
                    
                </div> 
                <div>
                    <Routes>
                        <Route path = "/articles/*" element= {<BoardList item={item}/>}>
                            <Route path = ":num" element= { <Detail item={item} setItem={setItem}/> }/>
                        </Route>

                        <Route path = "/articles/write" element = { <Write item={item}  setItem={setItem}/> }/>
                        <Route path = "/todo" element = { <ComplexReducerHook/> }/>
                        <Route path = "/hello" element = { < HelloReact />}/>
                    </Routes>
                </div>  
            </div>
        </BrowserRouter>
    );
}