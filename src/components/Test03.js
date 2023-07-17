// const list ={
//   title:'react',
//   price:'10000원',
//   level: 5
// }


function ReactBook({title,level,price,num='no05'}){

  return (
    <dl>
      <dt>{title}</dt>
      <dd>{level}</dd>
      <dd>{price}</dd>
      <dd>{num}</dd>
    </dl>
  )
}

export default function Test03(){
  return (
   <ReactBook
      title="react" 
      price="10000원"
      level={5}
      />
  )
}