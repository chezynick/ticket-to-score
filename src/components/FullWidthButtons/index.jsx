const FullWidthButton = ({onClick, outlineButton, text}) => {
    if(!outlineButton ){
        return (
            <button className="flex items-center justify-center w-full py-3 text-gray-200 bg-gray-600 border border-gray-200" onClick={()=>onClick()} >{text}</button>
        )
    }
        return (
            <button  className="flex items-center justify-center w-full py-3 text-gray-600 bg-gray-300 border border-gray-600" onClick={()=>onClick()} >{text}</button>
        )
};
export default FullWidthButton;