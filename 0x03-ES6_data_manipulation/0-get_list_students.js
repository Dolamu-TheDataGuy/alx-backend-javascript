export default function getListStudents() {
	const StudentInfo = [];
	StudentInfo.push({ id: 1, firstName: 'Guillaume', location: 'San Francisco' });
	StudentInfo.push({ id: 2, firstName: 'James', location: 'Columbia' });
	StudentInfo.push({ id: 5, firstName: 'Serena', location: 'San Francisco' });

	return StudentInfo;
}
