
interface LabelledInputType{
    title: string,
    placeholder: string,
    type: string,
    reference: any
}

export function LabelledInput({title, placeholder, type, reference}: LabelledInputType){
    return <div className="flex flex-col gap-1">
        <label className="text-md text-gray-400">{title}</label>
        <input className="text-md px-3 py-2 border text-black rounded-xl" ref={reference} type={type} placeholder={placeholder} />
    </div>

}