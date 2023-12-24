const PlayerTile = ({player, setPlayers, players}) => {

    const updateName = () => {
        const savedPlayer = {...player, name: 'Geoff'};
        setPlayers(players.map(ply => {
            if(ply.id === player.id){
                return savedPlayer
            }
            return ply
        }))

    }
    return (
        <div className="w-full h-full  p-2 ">
            <div className="w-full flex flex-col justify-center rounded-lg items-center h-full border-4 border-gray-300">
            <div className="text-xl">{player.name}</div>
            <button onClick={updateName}>update name</button>

            </div>
            
        </div>
    )
}
export default PlayerTile;