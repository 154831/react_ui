import "./Card.css"

export default function Card({name, age, profileImgSrc="https://www.ssrl-uark.com/wp-content/uploads/2014/06/no-profile-image.png"}) {
    // this.props는 클래스 컴포넌트에서만 사용할 수 있다.
    // console.log(this.props)
    console.log(name)
    console.log(age)

    return (
        
        <div className="card">
            <div>{name}</div>
            <div><img src = {profileImgSrc} style = {{width: "130px"}}/></div>
            <div>{age}</div>


            
        </div>
    );
}