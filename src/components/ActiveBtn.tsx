import { ActiveTypes } from "@/types/activeTypes";

const ActiveBtn = ({active}: ActiveTypes) => {
    
    return (
        <div className={`${active ? "bg-green-500" : "bg-red-500"} flex items-center justify-center rounded-md h-8 w-24`}>
            <p>{active ? 'Active' : 'Inactive'}</p>
        </div>
    )
}

export default ActiveBtn;