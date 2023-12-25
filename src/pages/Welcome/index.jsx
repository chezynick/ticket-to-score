import { useState } from "react";

const Welcome = ({setPage}) => {
    const [startTrain, setStartTrain] = useState(false)
  const handleClick = ()=>{
        setTimeout(()=> setStartTrain(true),100)
        setTimeout(()=>setPage(1),1100)
    }
    return (
        <div className="relative flex items-center justify-center w-full h-full">
            <div className={`absolute  top-10 h-4 transition-all duration-[1500ms] ease-in-out flex  bg-red-400 ${startTrain ? 'left-[105%]' : '-left-[50px]'}`}>train</div>
            <button onClick={()=>handleClick()} className="text-xl text-gray-300">Start game</button>
        </div>
    )
};
export default Welcome;