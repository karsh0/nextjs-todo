
interface ButtonProps{
    title: string,
    onClick?: ()=> void,
    background?: string,
}

export function Button({title, onClick, background}: ButtonProps){
    return <div className={"bg-blue-500 flex items-center justify-center px-3 py-2 rounded-xl w-full cursor-pointer"} onClick={onClick}>
        {title}
    </div>
}