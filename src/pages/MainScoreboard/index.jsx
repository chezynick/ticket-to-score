import PlayerScoreTile from "../../components/PlayerScoreTile";

const MainScoreboard = ({players, setPlayers}) => {

    return ( 
        <div className="grid w-screen h-full grid-cols-1 grid-rows-4">
            {players.map(player => <PlayerScoreTile player={player} setPlayers={setPlayers} key={player.id}/>)}
        </div>
     );
}
 
export default MainScoreboard;