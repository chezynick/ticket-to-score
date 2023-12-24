

const ColourSelector = ({selectedColour, setSelectedColour}) => {
  
    const colours = [
        {id: 0, bg: 'bg-red-500'},
        {id: 1, bg: 'bg-yellow-500'},
        {id: 2, bg: 'bg-blue-500'},
        {id: 3, bg: 'bg-green-500'},
        {id: 4, bg: 'bg-black-500'},
    ]
    return ( 

        <div>
            <div  className="flex items-center justify-between w-full py-4 space-x-2">
            {colours.map(col => <button onClick={()=>setSelectedColour(col.id)} key={col.id} selected={selectedColour === col.id} value={col.id} className={` border-gray-300 border rounded-full ${selectedColour === col.id ? 'w-6 h-6' : 'w-4 h-4'} ${col.bg}`}/>)}
            </div>
        </div>
     );
}
 
export default ColourSelector;