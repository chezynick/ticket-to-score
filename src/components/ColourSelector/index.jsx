import colours from "../../utils/colours";


const ColourSelector = ({selectedColour, setSelectedColour}) => {
  
   
    return ( 

        <div>
            <div  className="flex items-center justify-between w-full py-4 space-x-2">
            {colours.map(col => <button onClick={()=>setSelectedColour(col.id)} key={col.id} selected={selectedColour === col.id} value={col.id} className={` border-gray-300 border rounded-full ${selectedColour === col.id ? 'w-6 h-6' : 'w-4 h-4'} ${col.bg}`}/>)}
            </div>
        </div>
     );
}
 
export default ColourSelector;