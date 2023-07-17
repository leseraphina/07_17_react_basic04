const people ={
  name:'myDomg',
  source:'./images/cat01.jpg',
  alt:'putty Dog',
  thema : {
    backgroundColor:'green',
    color:"#fff"
  }
}


export default function Test01(){
  return (
    <>
    <div className="main">
      <h1>MyDog Name : {people.name}</h1>
      <img src={people.source} alt={people.alt} />
      <ul style = {people.thema}>
        <li>list01</li>
        <li>list01</li>
      </ul>
    </div>
    </>
  )
}