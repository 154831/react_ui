import { useRef, useState } from "react";
import MovieList from "./MovieList";
import "./Search.css"

export default function Search () {

    const searchRef = useRef()
    const [searchKeyword, setSearchKeyword] = useState("")

    function search() {
        let keyword = searchRef.current.value
        setSearchKeyword(keyword)
    }

    return (
        <div>
            <div id = "search_area">
                <input type="text" placeholder="영화이름을 입력해주세요." ref={searchRef}/>
                <div></div>
                <button onClick={search}>검색</button>
            
            </div>

            <div>
                <MovieList searchKeyword={searchKeyword}/>
            </div>
        </div>
    ); 
        
}