import Article from "./Article";

export default function ArticleList({content}) {
    return (
        <table>
            <thead>
                <tr>
                    <th>글 번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>조회수</th>
                </tr>
            </thead>

            <tbody>

                    {
                    content.map((value,index) => <Article key = {index} 
                                                        aNum = {value.aNum}
                                                        aSubject = {value.aSubject}
                                                        aWriter = {value.aWriter}
                                                        aViewCount = {value.aViewCount}
                                                />)
                    }

            </tbody>
        </table>
    )

}


