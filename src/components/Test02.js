// const list ={
//   title:'react',
//   price:'10000원',
//   level: 5
// }


function ReactBook(props){
  console.log(props)
  return (
    <dl>
      <dt>title;{props.title}</dt>
      <dd>price;{props.price}</dd>
      <dd>level;{props.level}</dd>
    </dl>
  )
}

export default function Test02(){
  return (
   <ReactBook
      title="react" 
      price="10000원"
      level={5}
      />
  )
}