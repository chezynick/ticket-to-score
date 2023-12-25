import trainPoints from "../../utils/trainPoints";

const TrainSelector = ({addPointsToPlayer, selectedPlayer}) => {
   
    return ( <div className="w-screen h-full ">
        <div className="w-full text-center">Add points to {selectedPlayer.name}</div>
        <div className="grid h-full grid-cols-1 grid-rows-6">
            {trainPoints.map(train => (
                <button onClick={()=>addPointsToPlayer(train)} key={train.numberOfTrains} className="w-full h-full p-2">
                    <div className="flex items-center justify-between w-full h-full border-4 border-gray-300 rounded-lg">
                        {train.numberOfTrains} X train
                    </div>

                </button>
            ))}
        </div>
    </div> );
}
 
export default TrainSelector;