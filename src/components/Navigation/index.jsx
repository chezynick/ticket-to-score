import Button from "../Button";

const Navigation = ({pageNumber, setPage }) => {
    if(pageNumber === 0 ) return null;
    return ( 
        <div className="flex w-full py-1 justify-evenly">
           <Button outlineButton text="Back" onClick={()=>setPage(pageNumber - 1)} />
            <Button text="Start" onClick={()=>setPage(pageNumber + 1)} />
        </div>
     );
}
 
export default Navigation;