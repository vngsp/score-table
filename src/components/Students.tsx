import { StudentsTypes } from '@/types/studentsTypes'

const Student = ({ avatar, name, email }: StudentsTypes) => {
    return (
        <div className='flex items-center py-2 text-black'>
            <img className='w-13 h-13 rounded-full mr-2' src={avatar} alt="" />
            <div>
                <h3 className='font-bold'>{name}</h3>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Student;