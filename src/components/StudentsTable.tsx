import { Students } from '@/data/students';
import TableLine from '@/components/TableLine';

const StudentsTable = () => {
    return (
        <table className="w-full border-collapse">
            <thead>
                <tr className="bg-gray-700 text-white text-sm text-left h-8">
                    <th className="pl-2">Student</th>
                    <th>Status</th>
                    <th>Grade 1</th>
                    <th>Grade 2</th>
                    <th>Final Grade</th>
                </tr>
            </thead>
            <tbody>
                {Students.map(student => (
                    <TableLine
                        key={student.id}
                        avatar={student.avatar}
                        name={student.name}
                        email={student.email}
                        active={student.active}
                        grade1={student.grade1}
                        grade2={student.grade2}
                        finalGrade={student.finalGrade}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default StudentsTable;