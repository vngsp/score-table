import { StudentsTypes } from './studentsTypes';

export interface TableLineTypes extends StudentsTypes {
    active: boolean;
    grade1: number;
    grade2: number;
    finalGrade: number;
}