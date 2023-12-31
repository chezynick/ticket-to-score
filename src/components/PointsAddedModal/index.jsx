const PointsAddedModal = ({ pointsInfo }) => {
    return ( 
        <div className="absolute top-0 left-0 flex items-center justify-center w-screen h-screen bg-gray-800 bg-opacity-50">
            <div className="flex flex-col items-center justify-center w-3/4 py-6 text-5xl text-gray-800 bg-gray-300 rounded-lg"><div>{pointsInfo.pointsToAdd} points </div>
            {pointsInfo.positive ? <div className="text-center">Added</div> : <div className="text-center">Removed</div>}
            </div>
        </div>
     );
}
 
export default PointsAddedModal;