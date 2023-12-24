const PlayerTile = ({player, setPlayers}) => {
    return (
        <div className="w-full h-full  p-2 ">
            <div className="w-full flex flex-col justify-center rounded-lg items-center h-full border border-gray-300">
            <div className="text-xl">{player.name}</div>

            </div>
            
        </div>
    )
}
export default PlayerTile;