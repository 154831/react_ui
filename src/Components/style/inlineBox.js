export default function InlineBox ({bgColor,letter}) {
// bgColor 와 letter 를 받아와 이 인라인박스 함수 내부에 적용할것임
    const style = {
        padding: "10px",
        margin: "10px",
        backgroundColor: bgColor,
        color: "#333",
        display: "inline-block",
        fontSize: "50px",
        fontFamily: "맑은 고딕",
        textAlign: "center"
    };

// 선언한 style 변수를 아래 div에 적용.
    return ( 
        <div style = {style}>
            {letter}
        </div>
    );
}
