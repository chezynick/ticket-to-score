const Button = ({onClick, outlineButton, text}) => {
    if(!outlineButton ){
        return (
            <button className="bg-gray-600 border border-gray-200 text-gray-200 min-w-10 flex items-center justify-center rounded-full py-0.5 px-2" onClick={()=>onClick()} >{text}</button>
        )
    }
        return (
            <button  className="bg-gray-300 border text-gray-600 border-gray-600 min-w-10 flex items-center rounded-full justify-center py-0.5 px-2" onClick={()=>onClick()} >{text}</button>
        )
};
export default Button;