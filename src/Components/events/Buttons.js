export default function Buttons () {

    function click (event) {
        console.log(event.target.innerText)
        alert(event.target.innerText +"를 클릭했습니다.")
    }

    return ( 
        <div>
            <button onClick={ (event) => click(event)
                  }>클릭 1</button>

            <button onClick={ (event) => click(event)
                  }>클릭 2</button>

            <button>클릭 3</button>
            <div>클릭 4</div>

        </div>
    );
}