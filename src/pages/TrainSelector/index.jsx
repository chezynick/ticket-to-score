import Engine from "../../components/Engine";
import Carraige from "../../components/Carraige";
import trainPoints from "../../utils/trainPoints";

const TrainSelector = ({addPointsToPlayer, selectedPlayer, removePointsFromPlayer}) => {
    const minusPoints = selectedPlayer.removePoints;
    const handleClick = (train) => {
        if(minusPoints){
            return removePointsFromPlayer(train)
        }
       return addPointsToPlayer(train)
    }
    return ( <div className="w-screen h-full ">
        <div className="w-full text-center">{minusPoints ?`Minus points from ${selectedPlayer.name}` :`Add points to ${selectedPlayer.name}`}</div>
        <div className="grid h-full grid-cols-1 grid-rows-7">
            {trainPoints.map((train, index) => {
                const carraigeArray = Array(train.numberOfTrains -1).fill('carraige') 
                
                return (
                <button onClick={()=>handleClick(train)} key={`${train.numberOfTrains} - ${index}`} className="w-full h-full p-2">
                    <div className="flex items-center justify-start w-full h-full border-4 border-gray-300 rounded-lg">
                        <span className="ml-4 text-2xl">{train.numberOfTrains}</span> <span className='px-2'>X</span>  {carraigeArray.map((car) => <Carraige key={car.length}/>)}<Engine />
                    </div>

                </button>
            )})}
        </div>
    </div> );
}
 
export default TrainSelector;