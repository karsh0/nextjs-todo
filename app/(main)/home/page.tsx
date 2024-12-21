import { TodoCard } from "@/app/components/TodoCard";

export default function Home(){
    return <div className="w-screen h-screen p-10 flex flex-col gap-3">
        <span className="text-2xl font-semibold">YOUR TODOS</span>
        <div className="max-w-xl ">
        <TodoCard todo="go to gym"/>
        <TodoCard todo="Code Todo app"/>
        </div>
    </div>
}