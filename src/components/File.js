import React,{useState} from 'react'



function File(){
const [riiny, setRiiny]=useState(40)

return(
<div>
<h1 className="counter">
    {riiny}
</h1>
<h1></h1>
<button className="greeny"onClick={()=>setRiiny(riiny +100)}>ADD BUTTON</button>
<h1></h1>
<button className='benson' onClick={()=>setRiiny(riiny -60)}>SUBTRACT BUTTON</button>
</div>



)

}
export default File