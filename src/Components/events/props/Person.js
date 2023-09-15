export default function Person({id, name, onClickEvent}) {// props로 데이터 받아오기

    return (
        <div>
            <h1 onClick={(event) => onClickEvent(event.target.innerText, Person)}>{name}</h1>
            <p onClick={(event) => onClickEvent(event.target.innerText, Person)}>{id}</p>
        </div>
    )
}