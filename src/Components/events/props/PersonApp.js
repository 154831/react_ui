import PersonList from "./PersonList"

export default function personApp() {
    const personList = [
        {id: 1, name: "Kim"},
        {id: 2, name: "Lee"},
        {id: 3, name: "Park"},
        {id: 4, name: "Choi"},
        {id: 5, name: "Jeong"}
    ]

    return (
        /* PersonList.js의 props에 PersonApp.js의 personList를 제공한다. */
        <div>
            <PersonList personList ={personList}/> 
            
        </div>
    )

}