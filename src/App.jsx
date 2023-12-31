import { useState } from "react"
import Navigation from "./components/Navigation"
import FinalCountUp from "./pages/FinalCountUp"
import LongestTrain from "./pages/LongestTrain"
import MainScoreboard from "./pages/MainScoreboard"
import SelectPlayers from "./pages/SelectPlayers"
import Welcome from "./pages/Welcome"

function App() {
  const [page, setPage] = useState(0)
  const [players, setPlayers] = useState([
  { id: 1, name: 'player one', colour: 0, score: 0, enabled: true, trainsRemaining: 50, history: []},
  {  id: 2, name: 'player two', colour: 1, score: 0, enabled: true, trainsRemaining: 50, history: []},
  {  id: 3, name: 'player three', colour: 2, score: 0, enabled: false, trainsRemaining: 50, history: []},
  {  id: 4, name: 'player four', colour: 3, score: 0, enabled: false, trainsRemaining: 50, history: []}
])
const sortOrderAndRemoveUnusedPlayers = () => {
  const enabledPlayersOnly = players.filter(player => player.enabled);
  const sortedByScoreOrderLowestFirst = enabledPlayersOnly.sort((a,b) => a.score < b.score ? -1 : 1 , 0);
  setPlayers(sortedByScoreOrderLowestFirst)
}
  return (
    <div className="flex flex-col justify-between w-screen h-screen p-0 m-0 overflow-hidden text-white bg-gradient-to-br from-gray-900 to-gray-700">
      <div className='h-[90%]'>
     {page === 0 && ( <Welcome setPage={setPage}/>)}
     {page === 1 && ( <SelectPlayers players={players} setPlayers={setPlayers}/>)}
     {page === 2 && ( <MainScoreboard players={players} setPlayers={setPlayers}/>)}
     {page === 3 && ( <LongestTrain players={players} setPlayers={setPlayers}/>)}
     {page === 4 && ( <FinalCountUp players={players} setPlayers={setPlayers}/>)}
     </div>
     <Navigation pageNumber={page} setPage={setPage} sortOrderAndRemoveUnusedPlayers={sortOrderAndRemoveUnusedPlayers}/>
    </div>
  )
}

export default App
