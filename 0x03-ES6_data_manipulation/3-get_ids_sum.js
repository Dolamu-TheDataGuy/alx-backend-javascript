const getStudentIdsSum = (students) => students.reduce((number, stud) => number + stud.id, 0);

export default getStudentIdsSum;
