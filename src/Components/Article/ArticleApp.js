import ArticleList from "./ArticleList"

export default function ArticleApp() {

    let content = [
        {   aNum: 1,
            aSubject: "안녕하세요",
            aWriter: "안혜빈",
            aViewCount: 1,
            },

        {   aNum: 2,
            aSubject: "리액트로 만든",
            aWriter: "안혜빈",
            aViewCount: 2,
            },
        {   aNum: 3,
            aSubject: "게시판이에요",
            aWriter: "안혜빈",
            aViewCount: 3,
            },
        ]


    return (
        <div>
            <ArticleList content ={content}/>     {
                //컨텐트 배열로 전달. 
            }
            
        </div>
    )
}