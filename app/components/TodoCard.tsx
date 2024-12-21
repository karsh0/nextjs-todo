import { Button } from "./Button";

interface TodoCardProps{
    todo: string,
}

export function TodoCard({todo}: TodoCardProps){
    return <div className="max-w-full px-3 py-2 flex justify-between ">
        <div className="text-xl ">{todo}</div>
        <div className="flex gap-2">
        <Button title="Update"/>
        <Button title="Delete"/>
        </div>
    </div>
}