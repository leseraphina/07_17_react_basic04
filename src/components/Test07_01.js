const allColor = ['red','blue','yellow','ornage','violet']
function ProColor({color}){
  function optionColor(){
    return color.map((item,index) => (<option value={item} key={index}>{item}</option>))
  }
  return (
    <p>
      <label htmlFor="color">color</label>
      <select id="color">
        {optionColor()}
      </select>
    </p>
  )
}


export default function Test07_01(){
  return (
  <ProColor
    color={allColor} />
  )
}


