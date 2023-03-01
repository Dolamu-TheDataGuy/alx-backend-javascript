const getStudentsByLocation(students, city) {
  return students.filter((student) => students.location === city);
}

export default getStudentsByLocation;
