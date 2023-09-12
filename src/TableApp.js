import Table from "./Components/Table/Table"


export default function TableApp() {

    let content = [
        {"num": 1, "name":"이순신","age": 20},
        {"num": 2, "name":"유관순","age": 30},
        {"num": 3, "name":"강감찬","age": 40},
    ]

    return (
        <div>
            <Table content ={content}/>     {
                //컨텐트 배열로 전달. 
            }
            
        </div>
    )
}