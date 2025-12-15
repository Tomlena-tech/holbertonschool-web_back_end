export default function updateStudentGradeByCity (students, city, newGrades)
{
    return students.filter((student) => student.location === city)
                   .map((student) => {
                       const gradeRecord = newGrades.find((record) => record.studentId === student.id);
                       if (gradeRecord) {
                           return { ...student, grade: gradeRecord.grade };
                       }
                       return { ...student, grade: 'N/A' };
                   });
}
