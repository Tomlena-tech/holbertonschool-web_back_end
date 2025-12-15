import getListStudents from "./0-get_list_students.js";
import updateStudentGradeByCity from "./4-update_grade_by_city-debug.js";

console.log('\n🧪 TEST 1: Toutes les notes disponibles');
console.log('========================================\n');

updateStudentGradeByCity(
    getListStudents(), 
    "San Francisco", 
    [
        { studentId: 5, grade: 97 }, 
        { studentId: 1, grade: 86 }
    ]
);

console.log('\n\n🧪 TEST 2: Note manquante pour Guillaume');
console.log('==========================================\n');

updateStudentGradeByCity(
    getListStudents(), 
    "San Francisco", 
    [
        { studentId: 5, grade: 97 }
    ]
);
