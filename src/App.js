import Card from "./Components/Card/Card";

function App() {
  const cardData = [
    {name: "조진웅", age: 39, profileImgSrc:"https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg"},
    {name: "안혜빈", age: 27},
    {name: "손석구", age: 39, profileImgSrc:"https://img.seoul.co.kr/img/upload/2018/12/08/SSI_20181208140733_O2.jpg"},
    {name: "김혜빈", age: 27, profileImgSrc:"https://images.mypetlife.co.kr/content/uploads/2021/10/19151330/corgi-g1a1774f95_1280-1024x682.jpg"}
  ]
  return (
    <div>

      {
        // 프로퍼티로 전달하는 데이터는 문자열은 ""로 전달,
        // 그 외 모든 데이터는 중괄호에 작성한다. 
      }
      
      {
        cardData.map( (value, index) => 
        <Card key={index} name = {value.name} 
        age ={value.age} profileImgSrc={value.profileImgSrc}/> )
      }

    </div>
  );
}
export default App;
