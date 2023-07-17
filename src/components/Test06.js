const List = ['title01','title02','title03','title04'];

function Source( {title}){
  console.log(title)
  return (
    <ul>
      {title.map((item,index) => (<li key={index}>{item}:{index}</li>))}
      {/* <li>title01</li>
      <li>title02</li>
      <li>title03</li>
      <li>title04</li> */}
    </ul>
  )
}

export default function Test06(){
  return (
  <Source
  title = {List}
  />
  )
}