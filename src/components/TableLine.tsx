import ActiveBtn from '@/components/ActiveBtn';
import Student from '@/components/Students';
import { TableLineTypes } from '@/types/tableLineTypes';

const TableLine = ({ avatar, name, email, active, grade1, grade2, finalGrade }: TableLineTypes) => {
    return (
        <tr className="text-gray-100 bg-gray-400 text-sm text-left border-b border-gray-900">
            <td className="pl-2">
                <Student avatar={avatar} name={name} email={email} active={active} />
            </td>
            <td><ActiveBtn active={active} /></td>
            <td className="text-black">{grade1}</td>
            <td className="text-black">{grade2}</td>
            <td className="text-black">{finalGrade}</td>
        </tr>
    );
};

export default TableLine;