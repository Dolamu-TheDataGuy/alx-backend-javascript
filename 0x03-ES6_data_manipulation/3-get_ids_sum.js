const getStudentIdsSum = (students) => students.reduce((prev_number, current_stud) => prev_number + current_stud.id, 0);

export default getStudentIdsSum;
