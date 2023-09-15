
import { Provider } from "react-redux";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import BoardList, { Detail, Write } from "../../board/BoardList";
import ComplexReducerHook from "../../Hooks/reducer/ComplexReducerHook";
import HelloReact from "../../hello/HelloReact";
import { toolkitStore } from "../toolkit/TooklitSlice";


export default function MainApp() {

    
    // const reduxStore = ReduxStore()()

    return (
        <Provider store={toolkitStore}>
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
                        <Route path = "/articles/*" element= {<BoardList/>}>
                            <Route path = ":num" element= { <Detail/> }/>
                        </Route>

                        <Route path = "/articles/write" element = { <Write/> }/>
                        <Route path = "/todo" element = { <ComplexReducerHook/> }/>
                        <Route path = "/hello" element = { <HelloReact/>}/>
                    </Routes>
                </div>  
            </div>
          </BrowserRouter>


        </Provider>
    )


}