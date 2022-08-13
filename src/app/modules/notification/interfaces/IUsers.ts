import { Course } from '../../security/interfaces/ICourse';
export interface Users {
  uid: string;
  email: string;
  courses: Course[];
}
