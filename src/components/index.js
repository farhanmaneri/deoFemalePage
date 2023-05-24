import { increment } from "firebase/firestore";
import { useState } from "react";

const Counter = () => {
    const [count, setCount ] = useState(0);

const Increment = () => {setCount(count + 1)}
const Decrement = () => {setCount((prevCount)=>{
    const newValue = prevCount > 0 ? prevCount -1 : 0;
    return newValue;
})
}

return (
    <>
    <div className="flex justify-center items-center  ">
<div>
<button onClick={Increment} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  +
</button>
</div>
<div className="bg-white rounded-full p-3 m-2">
     {count}
    </div>
    <div><button onClick={Decrement} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  -
</button>
</div>
</div>
</>
    )

}
export default Counter;