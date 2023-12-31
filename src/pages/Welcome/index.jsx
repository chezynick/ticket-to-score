import { useState } from "react";
import Carraige from "../../components/Carraige";
import Engine from "../../components/Engine";

const Welcome = ({setPage}) => {
    const [startTrain, setStartTrain] = useState(false)
  const handleClick = ()=>{
        setTimeout(()=> setStartTrain(true),100)
        setTimeout(()=>setPage(1),2000)
    }
    return (
        <div className="relative flex items-center justify-center w-full h-full">
            <div className={`absolute  top-10 h-4 transition-all duration-[2000ms] ease-in-out flex ${startTrain ? 'left-[105%]' : '-left-[150px]'}`}>
           <div className="flex items-end justify-center h-10"> <Carraige /><Carraige /><Engine /></div>
            </div>
            <button onClick={()=>handleClick()} className="text-xl text-gray-300">Start game</button>
            <div className={`absolute  bottom-10 h-4 transition-all duration-[2000ms] ease-in-out flex ${startTrain ? 'right-[105%]' : '-right-[180px]'}`}>
           <div className="flex items-end justify-center h-10"> <Carraige /><Carraige /><Carraige /><Engine /></div>
            </div>
        </div>
    )
};
export default Welcome;